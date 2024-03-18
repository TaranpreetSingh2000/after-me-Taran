import React, { useState } from "react";
import validateInput from "../../regex/validateInput";
import { Button, Label, Input } from "../../UI/index";
import useForm from "../../services/useForm";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GasAgencyDetails = () => {
  const fetchData = useForm();
  const location = useLocation();
  const trimmedcardtitle = location.state;
  const userId = sessionStorage.getItem("userId");
  const [formData, setFormData] = useState({
    name: "",
    houseDetails: "",
    customerId: "",
    deposit: "",
    phoneNumberForRefillBooking: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    name: "",
    phoneNumberForRefillBooking: "",
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
      "http://localhost:8090/api/v1/gas-cylinder-agency",
      dataWithUserId,
      trimmedcardtitle
    );
  };

  return (
    <>
      <ToastContainer autoClose={3000} />
      <div className="gasagencydetails">
        <div className="container my-5">
          <form onSubmit={handleSubmit}>
            <div className="form-row row my-2 my-2">
              <div className="form-group col-md-6">
                <Label htmlFor="name" label="Name" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="text"
                  name="name"
                  className="form-control"
                  onChange={handleChange}
                  errorMessage={validationErrors.name}
                  errorClassName="is-invalid"
                  required={true}
                />
              </div>

              <div className="form-group col-md-6">
                <Label htmlFor="housedetails" label="House Details" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="text"
                  name="houseDetails"
                  className="form-control"
                  onChange={handleChange}
                  required={true}
                />
              </div>
            </div>

            <div className="form-row row my-2 my-2">
              <div className="form-group col-md-6">
                <Label htmlFor="customerid" label="Customer Id" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="text"
                  name="customerId"
                  className="form-control"
                  onChange={handleChange}
                  required={true}
                />
              </div>
              <div className="form-group col-md-6">
                <Label htmlFor="deposit" label="Deposit (Rs)" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="number"
                  name="deposit"
                  className="form-control"
                  onChange={handleChange}
                  required={true}
                />
              </div>
            </div>
            <div className="form-row row my-2">
              <div className="form-group col-md-6">
                <Label htmlFor="meterno" label="Mobile Number" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="text"
                  name="phoneNumberForRefillBooking"
                  className="form-control"
                  onChange={handleChange}
                  errorMessage={validationErrors.phoneNumberForRefillBooking}
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

export default GasAgencyDetails;
