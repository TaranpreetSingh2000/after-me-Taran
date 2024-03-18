import React, { useState } from "react";
import validateInput from "../../regex/validateInput";
import { Button, Label, SelectField, Input, Title } from "../../UI/index";
import useForm from "../../services/useForm";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const IncomeTax = () => {
  const fetchData = useForm();
  const location = useLocation();
  const userId = sessionStorage.getItem("userId");
  const trimmedcardtitle = location.state;
  const [formData, setFormData] = useState({
    year: "",
    totalGrossIncome: "",
    assessmentDoneIfAny: "",
    refundAmountDueIfAny: "",
    lastReturnField: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    totalGrossIncome: "",
    refundAmountDueIfAny: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    let error = validateInput(name, value);
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value === "" ? "" : error,
    }));
  };

  const handleSubmit = async (e) => {
    debugger;
    e.preventDefault();
    const dataWithUserId = { ...formData, userId };
    fetchData(
      "http://localhost:8090/api/v1/income-tax",
      dataWithUserId,
      trimmedcardtitle
    );
  };

  return (
    <>
      <ToastContainer autoClose={3000} />
      <div className="incometax">
        <div className="container my-5">
          <form onSubmit={handleSubmit}>
            <div className="form-row row my-2 my-2">
              <div className="form-group col-md-6">
                <Label htmlFor="assessmentyear" label="Assessment Year" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="number"
                  name="year"
                  className="form-control"
                  onChange={handleChange}
                  required={true}
                  pattern="\d{4}"
                />
              </div>

              <div className="form-group col-md-6">
                <Label htmlFor="grossincome" label="Total Gross Income" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="number"
                  name="totalGrossIncome"
                  className="form-control"
                  onChange={handleChange}
                  errorMessage={validationErrors.totalGrossIncome}
                  errorClassName="is-invalid"
                  required={true}
                />
              </div>
            </div>

            <div className="form-row row my-2 my-2">
              <div className="form-group col-md-6">
                <Label htmlFor="returnfiled" label="Last Return Filed" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="date"
                  name="lastReturnField"
                  className="form-control"
                  onChange={handleChange}
                  required={true}
                />
              </div>
              <div className="form-group col-md-6">
                <Label htmlFor="assessment" label=" Assessment Done, if any" />
                <span className="text-danger px-2">*</span>
                <SelectField
                  name="assessmentDoneIfAny"
                  onChange={handleChange}
                  required={true}
                  options={[
                    { label: "select", value: "select" },
                    { label: "Yes", value: "yes" },
                    { label: "No", value: "no" },
                  ]}
                />
              </div>
            </div>
            <div className="form-row row my-2">
              <div className="form-group col-md-6">
                <Label htmlFor="refundamount" label=" Refund Amount, if any" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="number"
                  name="refundAmountDueIfAny"
                  className="form-control"
                  onChange={handleChange}
                  errorMessage={validationErrors.refundAmountDueIfAny}
                  errorClassName="is-invalid"
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

export default IncomeTax;
