import React, { useState } from "react";
import validateInput from "../../regex/validateInput";
import { Button, Label, Input, Textarea } from "../../UI/index";
import useForm from "../../services/useForm";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FireDetails = () => {
  const fetchData = useForm();
  const location = useLocation();
  const userId = sessionStorage.getItem("userId");
  const trimmedcardtitle = location.state;
  const [formData, setFormData] = useState({
    nameOfTheProperty: "",
    nameOfNominee: "",
    insuranceCompany: "",
    policyNumber: "",
    amtInsured: "",
    risksCovered: "",
    issueDate: "",
    maturityDate: "",
    premium: "",
    remarks: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    name: "",
    insuranceCompany: "",
    nameOfNominee: "",
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
      "http://localhost:8090/api/v1/fire-burglary-insurance",
      dataWithUserId,
      trimmedcardtitle
    );
  };

  return (
    <>
      <ToastContainer autoClose={3000} />
      <div className="readyreference">
        <div className="container my-5">
          <form onSubmit={handleSubmit}>
            <div className="form-row row my-2 my-2">
              <div className="form-group col-md-6">
                <Label htmlFor="name" label="Name of the Property" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="text"
                  name="nameOfTheProperty"
                  className="form-control"
                  onChange={handleChange}
                  errorMessage={validationErrors.nameOfTheProperty}
                  errorClassName="is-invalid"
                  required={true}
                />
              </div>

              <div className="form-group col-md-6">
                <Label htmlFor="nominee" label="Nominee" />
                <Input
                  type="text"
                  name="nameOfNominee"
                  className="form-control"
                  onChange={handleChange}
                  errorMessage={validationErrors.nameOfNominee}
                  errorClassName="is-invalid"
                />
              </div>
            </div>

            <div className="form-row row my-2">
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

              <div className="form-group col-md-6">
                <Label htmlFor="policyno" label="Policy Number" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="number"
                  name="policyNumber"
                  className="form-control"
                  onChange={handleChange}
                  required={true}
                />
              </div>
            </div>

            <div className="form-row row my-2">
              <div className="form-group col-md-6">
                <Label htmlFor="amtinsured" label="Amount Insured" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="number"
                  name="amtInsured"
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
                <Label htmlFor="duedate" label="Maturity date" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="date"
                  name="maturityDate"
                  className="form-control"
                  onChange={handleChange}
                  required={true}
                />
              </div>
            </div>

            <div className="form-row row my-2 my-4">
              <div className="form-group col-md-6">
                <Label htmlFor="premium" label="Premium" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="number"
                  name="premium"
                  className="form-control"
                  onChange={handleChange}
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

export default FireDetails;
