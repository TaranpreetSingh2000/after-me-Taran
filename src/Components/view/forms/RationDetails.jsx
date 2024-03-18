import React, { useState } from "react";
import validateInput from "../../regex/validateInput";
import { Button, Label, SelectField, Input, Title } from "../../UI/index";
import useForm from "../../services/useForm";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RationDetails = () => {
  const fetchData = useForm();
  const location = useLocation();
  const userId = sessionStorage.getItem("userId");
  const trimmedcardtitle = location.state;
  const [formData, setFormData] = useState({
    rationCardNo: "",
    issuingAuthority: "",
    issueDate: "",
    renewalDueOn: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    name: "",
    issuingAuthority: "",
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
      "http://localhost:8090/api/v1/ration-card-details",
      dataWithUserId,
      trimmedcardtitle
    );
  };

  return (
    <>
      <ToastContainer autoClose={3000} />
      <div className="rationdetails">
        <div className="container my-5">
          <form onSubmit={handleSubmit}>
            <div className="form-row row my-2 my-2">
              <div className="form-group col-md-6">
                <Label htmlFor="rationcardno" label="Ration Card Number" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="number"
                  name="rationCardNo"
                  className="form-control"
                  onChange={handleChange}
                  required={true}
                />
              </div>

              <div className="form-group col-md-6">
                <Label htmlFor="issuingauthority" label="Issuing Authority" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="text"
                  name="issuingAuthority"
                  className="form-control"
                  onChange={handleChange}
                  errorMessage={validationErrors.issuingAuthority}
                  errorClassName="is-invalid"
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
                <Label htmlFor="renewaldue" label="Renewal Due on" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="date"
                  name="renewalDueOn"
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

export default RationDetails;
