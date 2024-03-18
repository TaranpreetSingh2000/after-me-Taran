import React, { useState } from "react";
import validateInput from "../../regex/validateInput";
import { Button, Label, Input } from "../../UI/index";
import useForm from "../../services/useForm";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MediClaimPolicy = () => {
  const fetchData = useForm();
  const location = useLocation();
  const trimmedcardtitle = location.state;
  const userId = sessionStorage.getItem("userId");
  const [formData, setFormData] = useState({
    name: "",
    typeofPolicy: "",
    policyNO: "",
    previousPolicyNO: "",
    amountInsured: "",
    policyStartDate: "",
    policyEndDate: "",
    premium: "",
  });
  const [validationErrors, setValidationErrors] = useState({
    name: "",
    typeofPolicy: "",
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
      "http://localhost:8090/api/v1/mediclaim-policy",
      dataWithUserId,
      trimmedcardtitle
    );
  };
  return (
    <>
      <ToastContainer autoClose={3000} />
      <div className="mediclaimpolicy">
        <div className="container my-5">
          <form onSubmit={handleSubmit}>
            <div className="form-row row my-2 my-2">
              <div className="form-group col-md-6">
                <Label htmlFor="policyname" label="Policy Name" />
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
                <Label htmlFor="policytype" label="Type of Policy" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="text"
                  name="typeofPolicy"
                  className="form-control"
                  onChange={handleChange}
                  errorMessage={validationErrors.typeofPolicy}
                  errorClassName="is-invalid"
                  required={true}
                />
              </div>
            </div>
            <div className="form-row row my-2">
              <div className="form-group col-md-6">
                <Label htmlFor="policyno" label="Policy No" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="number"
                  name="policyNO"
                  className="form-control"
                  onChange={handleChange}
                  required={true}
                />
              </div>
              <div className="form-group col-md-6">
                <Label htmlFor="prevpolicyno" label=" Previous Policy No" />
                <Input
                  type="number"
                  name="previousPolicyNO"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row row my-2">
              <div className="form-group col-md-6">
                <Label htmlFor="policystartdate" label="Policy Start Date" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="date"
                  name="policyStartDate"
                  className="form-control"
                  onChange={handleChange}
                  required={true}
                />
              </div>

              <div className="form-group col-md-6">
                <Label htmlFor="policyduedate" label="Policy Due Date" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="date"
                  name="policyEndDate"
                  className="form-control"
                  onChange={handleChange}
                  required={true}
                />
              </div>
            </div>
            <div className="form-row row my-2">
              <div className="form-group col-md-6">
                <Label htmlFor="amountinsured" label="Amount Insured" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="number"
                  name="amountInsured"
                  className="form-control"
                  onChange={handleChange}
                  required={true}
                />
              </div>

              <div className="form-group col-md-6">
                <Label htmlFor="premium" label=" Premium" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="number"
                  name="premium"
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

export default MediClaimPolicy;
