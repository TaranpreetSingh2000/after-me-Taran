import React, { useState } from "react";
import { Button, Label, SelectField, Input, Title } from "../../UI/index";
import useForm from "../../services/useForm";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import validateInput from "../../regex/validateInput";

const ClubMemberDetails = () => {
  const fetchData = useForm();
  const location = useLocation();
  const userId = sessionStorage.getItem("userId");
  const trimmedcardtitle = location.state;
  const [formData, setFormData] = useState({
    membershipNumber: "",
    issueDate: "",
    expiryDate: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    membershipNumber: "",
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
      "http://localhost:8090/api/v1/club-membership-detail",
      dataWithUserId,
      trimmedcardtitle
    );
  };

  return (
    <>
      <ToastContainer autoClose={3000} />
      <div className="clummembership">
        <div className="container my-5">
          <form onSubmit={handleSubmit}>
            <div className="form-row row my-2 my-2">
              <div className="form-group col-md-6">
                <Label htmlFor="membershipnumber" label="Membership Number" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="text"
                  name="membershipNumber"
                  placeholder="Membership Number"
                  className="form-control"
                  onChange={handleChange}
                  errorMessage={validationErrors.membershipNumber}
                  errorClassName="is-invalid"
                  required={true}
                />
              </div>

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
            </div>

            <div className="form-row row my-2 my-2">
              <div className="form-group col-md-6">
                <Label htmlFor="expirydate" label=" Expiry Date " />
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

export default ClubMemberDetails;
