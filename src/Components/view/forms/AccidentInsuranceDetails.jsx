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

const AccidentInsuranceDetails = () => {
  const fetchData = useForm();
  const location = useLocation();
  const trimmedcardtitle = location.state;
  const userId = sessionStorage.getItem("userId");
  const [formData, setFormData] = useState({
    nameOfInsured: "",
    insuranceCompany: "",
    sumInsured: "",
    risksCovered: "",
    policyPeriod: "",
    premium: "",
    remarks: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    nameOfInsured: "",
    insuranceCompany: "",
    risksCovered: "",
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
      "http://localhost:8090/api/v1/personal-accident-ins",
      dataWithUserId,
      trimmedcardtitle
    );
  };
  return (
    <>
      <ToastContainer autoClose={3000} />
      <div className="accidentinsurance">
        <div className="container my-5">
          <form onSubmit={handleSubmit}>
            <div className="form-row row my-2 my-2">
              <div className="form-group col-md-6">
                <Label htmlFor="name" label="Name of Insured" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="text"
                  name="nameOfInsured"
                  className="form-control"
                  onChange={handleChange}
                  errorMessage={validationErrors.nameOfInsured}
                  errorClassName="is-invalid"
                  required={true}
                />
              </div>

              <div className="form-group col-md-6">
                <Label htmlFor="insurancecompany" label="Insurance Company" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="text"
                  name="insuranceCompany"
                  className="form-control"
                  onChange={handleChange}
                  errorMessage={validationErrors.insuranceCompany}
                  errorClassName="is-invalid"
                  required={true}
                />
              </div>
            </div>
            <div className="form-row row my-2">
              <div className="form-group col-md-6">
                <Label htmlFor="suminsured" label="Sum Insured" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="number"
                  name="sumInsured"
                  className="form-control"
                  onChange={handleChange}
                  required={true}
                />
              </div>

              <div className="form-group col-md-6">
                <Label htmlFor="riskscovered" label="Risks Covered" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="text"
                  name="risksCovered"
                  className="form-control"
                  onChange={handleChange}
                  errorMessage={validationErrors.risksCovered}
                  errorClassName="is-invalid"
                  required={true}
                />
              </div>
            </div>
            <div className="form-row row my-2">
              <div className="form-group col-md-6">
                <Label htmlFor="policyperiod" label="Policy Period" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="text"
                  name="policyPeriod"
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
            <div className="form-row row my-2">
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

export default AccidentInsuranceDetails;
