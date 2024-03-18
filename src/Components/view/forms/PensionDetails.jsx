import React, { useState } from "react";
import validateInput from "../../regex/validateInput";
import { Button, Label, SelectField, Input, Title } from "../../UI/index";
import useForm from "../../services/useForm";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useTable from "../../services/useTable";

const PensionDetails = () => {
  const fetchData = useForm();
  const location = useLocation();
  const [selectedBankUser, setSelectedBankUser] = useState("");
  const userId = sessionStorage.getItem("userId");
  const trimmedcardtitle = location.state;
  const [formData, setFormData] = useState({
    typeOfAccount: "",
    pensionAccountNo: "",
    operatingInstruction: "",
    pensionPaymentOrderNo: "",
    pensionCommunicationRestorationDate: "",
    nominee: "",
    dueDateForLifeCertificate: "",
    signature: "",
    bankId: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    name: "",
    bankbranch: "",
    nominee: "",
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
      "http://localhost:8090/api/v1/pension",
      dataWithUserId,
      trimmedcardtitle
    );
  };

  return (
    <>
      <ToastContainer autoClose={3000} />
      <div className="pensiondetails">
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
                <Label htmlFor="accounttype" label="Type of Account" />
                <span className="text-danger px-2">*</span>
                <SelectField
                  name="typeOfAccount"
                  onChange={handleChange}
                  required={true}
                  options={[
                    { label: "select", value: "select" },
                    { label: "Savings", value: "savings" },
                    { label: "Current", value: "current" },
                  ]}
                />
              </div>
              <div className="form-group col-md-6">
                <Label htmlFor="pensionaccno" label="Pension Account Number" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="number"
                  name="pensionAccountNo"
                  className="form-control"
                  onChange={handleChange}
                  required={true}
                />
              </div>
            </div>
            <div className="form-row row my-2">
              <div className="form-group col-md-6">
                <Label htmlFor="instruction" label="Operating Instruction" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="text"
                  name="operatingInstruction"
                  className="form-control"
                  onChange={handleChange}
                  errorMessage={validationErrors.operatingInstruction}
                  errorClassName="is-invalid"
                  required={true}
                />
              </div>
              <div className="form-group col-md-6">
                <Label htmlFor="orderno" label="Pension paymnet Order Number" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="text"
                  name="pensionPaymentOrderNo"
                  className="form-control"
                  onChange={handleChange}
                  required={true}
                />
              </div>
            </div>

            <div className="form-row row my-2">
              <div className="form-group col-md-6">
                <Label
                  htmlFor="restorationdate"
                  label="Pension Commutation Restoration Date"
                />
                <span className="text-danger px-2">*</span>
                <Input
                  type="date"
                  name="pensionCommunicationRestorationDate"
                  className="form-control"
                  onChange={handleChange}
                  required={true}
                />
              </div>
              <div className="form-group col-md-6">
                <Label htmlFor="nominee" label="Nominee" />
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
                <Label
                  htmlFor="duedate"
                  label="Due Date for Life Certificate"
                />
                <span className="text-danger px-2">*</span>
                <Input
                  type="date"
                  name="dueDateForLifeCertificate"
                  className="form-control"
                  onChange={handleChange}
                  required={true}
                />
              </div>
              <div className="form-group col-md-6">
                <Label htmlFor="signature" label="Signature" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="text"
                  name="signature"
                  className="form-control"
                  onChange={handleChange}
                  errorMessage={validationErrors.signature}
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

export default PensionDetails;
