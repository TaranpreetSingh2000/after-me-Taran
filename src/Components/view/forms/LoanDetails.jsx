import React, { useEffect, useState } from "react";
import validateInput from "../../regex/validateInput";
import { Button, Label, SelectField, Input, Title } from "../../UI/index";
import useForm from "../../services/useForm";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useTable from "../../services/useTable";

const LoanDetails = () => {
  const fetchData = useForm();
  const [selectedBankUser, setSelectedBankUser] = useState("");
  const userId = sessionStorage.getItem("userId");
  const location = useLocation();
  const trimmedcardtitle = location.state;
  const [formData, setFormData] = useState({
    typeOfLoan: "",
    nameOfTheBorrowers: "",
    amountOfLoan: "",
    dateOfAdvance: "",
    bankId: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    typeOfLoan: "",
    nameOfTheBorrowers: "",
  });

  const { data } = useTable("http://localhost:8090/api/v1/bankAccount/get");
  debugger;
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
      "http://localhost:8090/api/v1/loanAccountDetails",
      dataWithUserId,
      trimmedcardtitle
    );
  };
  return (
    <>
      <ToastContainer autoClose={3000} />
      <div className="loandetails">
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
                <Label htmlFor="loantype" label="Type of Loan" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="text"
                  name="typeOfLoan"
                  className="form-control"
                  onChange={handleChange}
                  errorMessage={validationErrors.typeOfLoan}
                  errorClassName="is-invalid"
                  required={true}
                />
              </div>

              <div className="form-group col-md-6">
                <Label htmlFor="borrowername" label="Name of the Borrower" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="text"
                  name="nameOfTheBorrowers"
                  className="form-control"
                  onChange={handleChange}
                  errorMessage={validationErrors.nameOfTheBorrowers}
                  errorClassName="is-invalid"
                  required={true}
                />
              </div>
            </div>

            <div className="form-row row my-2">
              <div className="form-group col-md-6">
                <Label htmlFor="loanamount" label="Amount of Loan" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="number"
                  name="amountOfLoan"
                  className="form-control"
                  onChange={handleChange}
                  required={true}
                />
              </div>
              <div className="form-group col-md-6">
                <Label htmlFor="advancedate" label="Date of Advance" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="date"
                  name="dateOfAdvance"
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

export default LoanDetails;
