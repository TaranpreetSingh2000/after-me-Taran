import React, { useState } from "react";
import validateInput from "../../regex/validateInput";
import { Button, Label, SelectField, Input, Title } from "../../UI/index";
import useForm from "../../services/useForm";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useTable from "../../services/useTable";

const AtmDebitDetails = () => {
  const fetchData = useForm();
  const location = useLocation();
  const [selectedBankUser, setSelectedBankUser] = useState("");
  const userId = sessionStorage.getItem("userId");
  const trimmedcardtitle = location.state;
  const [formData, setFormData] = useState({
    nameOfCardHolder: "",
    atmCardNumber: "",
    validFrom: "",
    validThru: "",
    personalAccidentCover: "",
    bankId: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    name: "",
    insurancecompany: "",
    bankname: "",
    bankbranch: "",
    debitcard: "",
  });

  const { data } = useTable("http://localhost:8090/api/v1/bankAccount/get");
  console.log(data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    if (name === "bankId") {
      setSelectedBankUser(value);
    }
    let error = validateInput(name, value);
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value === "" ? "" : error,
    }));
  };

  const handleSubmit = async (e) => {
    debugger;
    e.preventDefault();
    const dataWithUserId = { ...formData };
    fetchData(
      "http://localhost:8090/api/v1/atm-debit-card",
      dataWithUserId,
      trimmedcardtitle
    );
  };

  return (
    <>
      <ToastContainer autoClose={3000} />
      <div className="atmdebitdetails">
        <div className="container my-5">
          <div className="form-group col-md-3 my-3">
            <select
              className="form-select"
              name="bankId"
              value={selectedBankUser}
              onChange={handleChange}
              required="true"
            >
              <option value="" disabled>
                Select the Bank
              </option>
              {data.map((bankdata, index) => {
                return (
                  <option key={index} value={bankdata.bankId}>
                    {bankdata.bankName}
                  </option>
                );
              })}
            </select>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-row row my-2 my-2">
              <div className="form-group col-md-6">
                <Label htmlFor="cardholdername" label=" Name of Card Holder" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="text"
                  name="nameOfCardHolder"
                  className="form-control"
                  onChange={handleChange}
                  errorMessage={validationErrors.nameOfCardHolder}
                  errorClassName="is-invalid"
                  required={true}
                />
              </div>

              <div className="form-group col-md-6">
                <Label htmlFor="atmcardno" label="ATM Card Number" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="number"
                  name="atmCardNumber"
                  className="form-control"
                  onChange={handleChange}
                  required={true}
                />
              </div>
            </div>

            <div className="form-row row my-2 my-2">
              <div className="form-group col-md-6">
                <Label htmlFor="issuedate" label="Issue Date" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="date"
                  name="issueDate"
                  className="form-control"
                  onChange={handleChange}
                  required={true}
                />
              </div>
              <div className="form-group col-md-6">
                <Label htmlFor="validtill" label="Valid till" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="date"
                  name="validThru"
                  className="form-control"
                  onChange={handleChange}
                  required={true}
                />
              </div>
            </div>

            <div className="form-row row my-2 my-2">
              <div className="form-group col-md-6">
                <Label
                  htmlFor="accidentalcover"
                  label="Personal Accidental Cover"
                />
                <span className="text-danger px-2">*</span>
                <Input
                  type="number"
                  name="personalAccidentCover"
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

export default AtmDebitDetails;
