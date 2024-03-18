import React, { useState } from "react";
import validateInput from "../../regex/validateInput";
import { Button, Label, SelectField, Input, Title } from "../../UI/index";
import useForm from "../../services/useForm";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BankAccounts = () => {
  const fetchData = useForm();
  const location = useLocation();
  const trimmedcardtitle = location.state;
  const userId = sessionStorage.getItem("userId");
  const [formData, setFormData] = useState({
    bankName: "",
    branchName: "",
    typeOfAccount: "",
    accountNumber: "",
    operatingInstructions: "",
    nominee: "",
    specimenSignature: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    bankName: "",
    branchName: "",
    accountNumber: "",
    nominee: "",
    operatingInstructions: "",
    specimenSignature: "",
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
      "http://localhost:8090/api/v1/bankAccount",
      dataWithUserId,
      trimmedcardtitle
    );
  };
  return (
    <>
      <ToastContainer autoClose={3000} />
      <div className="bankaccounts">
        <div className="container my-5">
          <form onSubmit={handleSubmit}>
            <div className="form-row row my-2 my-2">
              <div className="form-group col-md-6">
                <Label htmlFor="bankname" label="Bank Name" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="text"
                  name="bankName"
                  className="form-control"
                  onChange={handleChange}
                  errorMessage={validationErrors.bankName}
                  errorClassName="is-invalid"
                  required={true}
                />
              </div>
              <div className="form-group col-md-6">
                <Label htmlFor="branchname" label="Branch Name" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="text"
                  name="branchName"
                  className="form-control"
                  onChange={handleChange}
                  errorMessage={validationErrors.branchName}
                  errorClassName="is-invalid"
                  required={true}
                />
              </div>
            </div>

            <div className="form-row row my-2 my-2">
              <div className="form-group col-md-6">
                <Label htmlFor="accountno" label="Account Number" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="text"
                  name="accountNumber"
                  className="form-control"
                  onChange={handleChange}
                  errorMessage={validationErrors.accountNumber}
                  errorClassName="is-invalid"
                  required={true}
                />
              </div>
              <div className="form-group col-md-6">
                <Label htmlFor="accounttype" label="Account Type" />
                <span className="text-danger px-2">*</span>
                <SelectField
                  name="typeOfAccount"
                  onChange={handleChange}
                  required={true}
                  options={[
                    { label: "select", value: "select" },
                    { label: "Savings", value: "saving" },
                    { label: "Current", value: "current" },
                  ]}
                />
              </div>
            </div>
            <div className="form-row row my-2">
              <div className="form-group col-md-6">
                <Label
                  htmlFor="operatinginstructions"
                  label="Operating Instructions"
                />
                <span className="text-danger px-2">*</span>
                <Input
                  type="text"
                  name="operatingInstructions"
                  className="form-control"
                  onChange={handleChange}
                  errorMessage={validationErrors.operatingInstructions}
                  errorClassName="is-invalid"
                  required={true}
                />
              </div>
              <div className="form-group col-md-6">
                <Label htmlFor="Nominee/s" label="Nominee" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="text"
                  name="nominee"
                  className="form-control"
                  onChange={handleChange}
                  errorMessage={validationErrors.nominee}
                  errorClassName="is-invalid"
                  required={true}
                />
              </div>
            </div>
            <div className="form-row row my-2">
              <div className="form-group col-md-6">
                <Label htmlFor="SpecimenSignature" label="Specimen Signature" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="text"
                  name="specimenSignature"
                  className="form-control"
                  onChange={handleChange}
                  errorMessage={validationErrors.specimenSignature}
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

export default BankAccounts;
