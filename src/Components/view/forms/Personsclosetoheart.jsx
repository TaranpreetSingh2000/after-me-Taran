import React, { useEffect, useState } from "react";
import validateInput from "../../regex/validateInput";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import style from "./Forms.module.css";
import { useLocation } from "react-router-dom";
import useForm from "../../services/useForm";
import { Button, Label, SelectField, Input, Title } from "../../UI/index";

const Personsclosetoheart = () => {
  const fetchData = useForm();
  const location = useLocation();
  const trimmedcardtitle = location.state;
  const [formData, setFormData] = useState({
    nomineeName: "",
    nomineeRelationship: "",
    address: "",
    contact: "",
    reasonForClose: "",
  });
  const [validationErrors, setValidationErrors] = useState({
    nomineeName: "",
    nomineeRelationship: "",
    contact: "",
    reasonForClose: "",
  });
  const userId = sessionStorage.getItem("userId");

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
      "http://localhost:8090/api/v1/personclose",
      dataWithUserId,
      trimmedcardtitle
    );
  };
  return (
    <>
      <ToastContainer autoClose={3000} />
      <div className="personclosetomyheart">
        <div className="container my-5">
          <form onSubmit={handleSubmit}>
            <div className="form-row row my-2 my-2">
              <div className="form-group col-md-6">
                <Label htmlFor="name" label="Name" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="text"
                  name="nomineeName"
                  placeholder="Enter your name"
                  className="form-control"
                  onChange={handleChange}
                  errorMessage={validationErrors.nomineeName}
                  errorClassName="is-invalid"
                  required={true}
                />
              </div>
              <div className="form-group col-md-6">
                <Label htmlFor="namerealtion" label="Realtionship" />
                <span className="text-danger px-2">*</span>

                <Input
                  type="text"
                  name="nomineeRelationship"
                  placeholder="Enter your relation"
                  className="form-control"
                  onChange={handleChange}
                  errorMessage={validationErrors.nomineeRelationship}
                  errorClassName="is-invalid"
                  required={true}
                />
              </div>
            </div>
            <div className="form-row row my-2">
              <div className="form-group col-md-6">
                <Label htmlFor="address" label="Address" />
                <span className="text-danger px-2">*</span>

                <Input
                  type="text"
                  name="address"
                  placeholder="Enter your address"
                  className="form-control"
                  onChange={handleChange}
                  required={true}
                />
              </div>
              <div className="form-group col-md-6">
                <Label htmlFor="contact" label="Mobile Number" />
                <span className="text-danger px-2">*</span>

                <Input
                  type="text"
                  name="contact"
                  placeholder="Enter your mobile number"
                  className="form-control"
                  onChange={handleChange}
                  errorMessage={validationErrors.contact}
                  errorClassName="is-invalid"
                  required={true}
                />
              </div>
            </div>

            <div className="form-row row my-2">
              <div className="form-group col-md-6">
                <Label
                  htmlFor="reasons"
                  label="Reasons for being close to my heart"
                />
                <span className="text-danger px-2">*</span>

                <Input
                  type="text"
                  name="reasonForClose"
                  className="form-control"
                  onChange={handleChange}
                  errorMessage={validationErrors.reasonForClose}
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

export default Personsclosetoheart;
