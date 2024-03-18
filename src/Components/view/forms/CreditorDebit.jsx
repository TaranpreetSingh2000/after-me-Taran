import React, { useState } from "react";
import validateInput from "../../regex/validateInput";
import { Button, Label, SelectField, Input, Title } from "../../UI/index";
import useForm from "../../services/useForm";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreditorDebit = () => {
  const fetchData = useForm();
  const location = useLocation();
  const [selectedBankUser, setSelectedBankUser] = useState("");
  const userId = sessionStorage.getItem("userId");
  const trimmedcardtitle = location.state;
  const [formData, setFormData] = useState({
    nameOfDebitorOrCreditor: "",
    creditorOrDebitorType: "",
    amount: "",
    creditorOrDebitorDate: "",
    creditorOrDebitorDueDate: "",
  });
  const [validationErrors, setValidationErrors] = useState({
    name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    let error = validateInput(name, value);
    setValidationErrors({
      ...validationErrors,
      [name]: error,
    });
  };

  const handleSubmit = async (e) => {
    debugger;
    e.preventDefault();
    const dataWithUserId = { ...formData, userId };
    fetchData(
      "http://localhost:8090/api/v1/creditor-debitor",
      dataWithUserId,
      trimmedcardtitle
    );
  };

  return (
    <>
      <ToastContainer autoClose={3000} />
      <div className="providentfund">
        <div className="container my-5">
          <form onSubmit={handleSubmit}>
            <div className="form-row row my-2 my-2">
              <div className="form-group col-md-6">
                <Label htmlFor="nameOfDebitorOrCreditor" label="Name" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="text"
                  name="nameOfDebitorOrCreditor"
                  placeholder="Name"
                  className="form-control"
                  onChange={handleChange}
                  errorMessage={validationErrors.nameOfDebitorOrCreditor}
                  errorClassName="is-invalid"
                  required={true}
                />{" "}
              </div>
              <div className="form-group col-md-6">
                <Label htmlFor="type" label="Type" />
                <span className="text-danger px-2">*</span>
                <div className="d-flex flex-row gap-3">
                  <div class="form-check">
                    <Input
                      type="radio"
                      name="creditorOrDebitorType"
                      value="Creditor"
                      className="form-check-input"
                      onChange={handleChange}
                      required={true}
                    />
                    <Label htmlFor="Creditor" label="Creditor" />
                  </div>
                  <div class="form-check">
                    <Input
                      type="radio"
                      name="creditorOrDebitorType"
                      value="Debitor"
                      className="form-check-input"
                      onChange={handleChange}
                      required={true}
                    />
                    <Label htmlFor="Debitor" label="Debitor" />
                  </div>
                </div>
              </div>
            </div>
            <div className="form-row row my-2">
              <div className="form-group col-md-6">
                <Label htmlFor="amount" label="Amount" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="number"
                  name="amount"
                  className="form-control"
                  onChange={handleChange}
                  required={true}
                />
              </div>
              <div className="form-group col-md-6">
                <Label htmlFor="date" label="Credit/Debit Date" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="date"
                  name="creditorOrDebitorDate"
                  className="form-control"
                  onChange={handleChange}
                  required={true}
                />
              </div>
            </div>

            <div className="form-row row my-2">
              {" "}
              <div className="form-group col-md-6">
                <Label htmlFor="duedate" label="Credit/Debit Due Date" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="date"
                  name="creditorOrDebitorDueDate"
                  className="form-control"
                  onChange={handleChange}
                  required={true}
                />
              </div>
              <div className="form-group col-md-6">
                <Label htmlFor="rate" label="Rate" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="text"
                  name="rate"
                  className="form-control"
                  onChange={handleChange}
                  required={true}
                />
              </div>
            </div>
            <Button
              type="submit"
              className="btn btn-primary my-2 px-4 py-2"
              title="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default CreditorDebit;
