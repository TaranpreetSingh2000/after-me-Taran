import React, { useState } from "react";
import { Button, Label, SelectField, Input, Title } from "../../UI/index";
import useForm from "../../services/useForm";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import validateInput from "../../regex/validateInput";

const VehicleRCDetails = () => {
  const fetchData = useForm();
  const location = useLocation();
  const userId = sessionStorage.getItem("userId");
  const trimmedcardtitle = location.state;
  const [formData, setFormData] = useState({
    carCompany: "",
    carRegistrationNumber: "",
    issueDate: "",
    expiryDate: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    carCompany: "",
    carRegistrationNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

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
      "http://localhost:8090/api/v1/vehicle-rc-detail",
      dataWithUserId,
      trimmedcardtitle
    );
  };

  return (
    <>
      <ToastContainer autoClose={3000} />
      <div className="vehiclercdetails">
        <div className="container my-5">
          <form onSubmit={handleSubmit}>
            <div className="form-row row my-2 my-2">
              <div className="form-group col-md-6">
                <Label htmlFor="carCompany" label="Car Company" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="text"
                  name="carCompany"
                  placeholder="Company Name"
                  className="form-control"
                  onChange={handleChange}
                  errorMessage={validationErrors.carCompany}
                  errorClassName="is-invalid"
                  required={true}
                />
              </div>

              <div className="form-group col-md-6">
                <Label
                  htmlFor="carRegistrationNumber"
                  label="Car Registration Number"
                />
                <span className="text-danger px-2">*</span>
                <Input
                  type="text"
                  name="carRegistrationNumber"
                  placeholder="Registration Number"
                  className="form-control"
                  onChange={handleChange}
                  errorMessage={validationErrors.carRegistrationNumber}
                  errorClassName="is-invalid"
                  required={true}
                />
              </div>
            </div>

            <div className="form-row row my-2 my-2">
              <div className="form-group col-md-6">
                <Label htmlFor="issueDate" label=" Issue Date " />
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
                <Label htmlFor="expiryDate" label="Expiry Date" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="date"
                  name="expiryDate"
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

export default VehicleRCDetails;
