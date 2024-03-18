import React, { useState } from "react";
import validateInput from "../../regex/validateInput";
import {
  Button,
  Label,
  SelectField,
  Input,
  Title,
  Textarea,
} from "../../UI/index";
import useForm from "../../services/useForm";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WalletDetails = () => {
  const fetchData = useForm();
  const location = useLocation();
  const userId = sessionStorage.getItem("userId");
  const trimmedcardtitle = location.state;
  const [formData, setFormData] = useState({
    walletName: "",
    company: "",
    attachedMobileNumber: "",
    loginId: "",
    loginPassword: "",
    remarks: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    walletName: "",
    company: "",
    attachedMobileNumber: "",
    loginPassword: "",
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
      "http://localhost:8090/api/v1/wallet-details",
      dataWithUserId,
      trimmedcardtitle
    );
  };

  return (
    <>
      <ToastContainer autoClose={3000} />
      <div className="walletdetails">
        <div className="container my-5">
          <form onSubmit={handleSubmit}>
            <div className="form-row row my-2 my-2">
              <div className="form-group col-md-6">
                <Label htmlFor="walletname" label="Wallet Name" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="text"
                  name="walletName"
                  className="form-control"
                  onChange={handleChange}
                  errorMessage={validationErrors.walletName}
                  errorClassName="is-invalid"
                  required={true}
                />
              </div>

              <div className="form-group col-md-6">
                <Label htmlFor="companyname" label="Company Name" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="text"
                  name="company"
                  className="form-control"
                  onChange={handleChange}
                  errorMessage={validationErrors.company}
                  errorClassName="is-invalid"
                  required={true}
                />
              </div>
            </div>

            <div className="form-row row my-2 my-2">
              <div className="form-group col-md-6">
                <Label htmlFor="mobile" label="Mobile Number" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="number"
                  name="attachedMobileNumber"
                  className="form-control"
                  onChange={handleChange}
                  errorMessage={validationErrors.attachedMobileNumber}
                  errorClassName="is-invalid"
                  required={true}
                />
              </div>
              <div className="form-group col-md-6">
                <Label htmlFor="loginid" label="Login ID" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="text"
                  name="loginId"
                  className="form-control"
                  onChange={handleChange}
                  required={true}
                />
              </div>
            </div>
            <div className="form-row row my-2">
              <div className="form-group col-md-6">
                <Label htmlFor="loginpassword" label="Login Password" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="password"
                  name="loginPassword"
                  className="form-control"
                  onChange={handleChange}
                  errorMessage={validationErrors.loginPassword}
                  errorClassName="is-invalid"
                  required={true}
                />
              </div>
              <div className="form-group col-md-6">
                <Label htmlFor="remarks" label="Remarks" />
                <Textarea
                  name="remarks"
                  onChange={handleChange}
                  placeholder="Enter your additional comments"
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

export default WalletDetails;
