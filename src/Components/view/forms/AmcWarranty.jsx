import React, { useState } from "react";
import validateInput from "../../regex/validateInput";
import { Button, Label, SelectField, Input, Title } from "../../UI/index";
import useForm from "../../services/useForm";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AmcWarranty = () => {
  const fetchData = useForm();
  const location = useLocation();
  const trimmedcardtitle = location.state;
  const [formData, setFormData] = useState({
    productAndModel: "",
    companyName: "",
    dateofPurchase: "",
    purchaseValue: "",
    validUpTo: "",
    amcReferenceNumber: "",
  });
  const userId = sessionStorage.getItem("userId");

  const [validationErrors, setValidationErrors] = useState({
    productAndModel: "",
    companyName: "",
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
      "http://localhost:8090/api/v1/amc-warranties",
      dataWithUserId,
      trimmedcardtitle
    );
  };
  return (
    <>
      <ToastContainer autoClose={3000} />
      <div className="amcwarranty">
        <div className="container my-5">
          <form onSubmit={handleSubmit}>
            <div className="form-row row my-2 my-2">
              <div className="form-group col-md-6">
                <Label htmlFor="model" label="Model" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="text"
                  name="productAndModel"
                  className="form-control"
                  onChange={handleChange}
                  errorMessage={validationErrors.productAndModel}
                  errorClassName="is-invalid"
                  required={true}
                />
              </div>

              <div className="form-group col-md-6">
                <Label htmlFor="company" label="Company" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="text"
                  name="companyName"
                  className="form-control"
                  onChange={handleChange}
                  errorMessage={validationErrors.companyName}
                  errorClassName="is-invalid"
                  required={true}
                />
              </div>
            </div>
            <div className="form-row row my-2">
              <div className="form-group col-md-6">
                <Label htmlFor="purchasedate" label="Date of Purchase" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="date"
                  name="dateofPurchase"
                  className="form-control"
                  onChange={handleChange}
                  required={true}
                />
              </div>
              <div className="form-group col-md-6">
                <Label htmlFor="purchasevalue" label="Purchase Value" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="number"
                  name="purchaseValue"
                  className="form-control"
                  onChange={handleChange}
                  required={true}
                />
              </div>
            </div>
            <div className="form-row row my-2">
              <div className="form-group col-md-6">
                <Label
                  htmlFor="warrantydate"
                  label="Warranty/ AMC valid upto"
                />
                <span className="text-danger px-2">*</span>
                <Input
                  type="date"
                  name="validUpTo"
                  className="form-control"
                  onChange={handleChange}
                  required={true}
                />
              </div>
              <div className="form-group col-md-6">
                <Label htmlFor="refnumber" label="AMC reference number" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="number"
                  name="amcReferenceNumber"
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

export default AmcWarranty;
