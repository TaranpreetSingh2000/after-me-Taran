import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../../services/useFetch";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useForm from "../../services/useForm";
import validateInput from "../../regex/validateInput";
import CommonSpouseChildDetails from "./CommonSpouseChildDetails";
import { Button, Label, SelectField, Input } from "../../UI/index";

const PersonalInformation = () => {
  const fetchData = useForm();
  const location = useLocation();
  const trimmedcardtitle = location.state;
  const userId = sessionStorage.getItem("userId");
  const [selectedValue, setSelectedValue] = useState("HeadofFamily");
  const [validationErrors, setValidationErrors] = useState({
    name: "",
    email: "",
    mobile: "",
    organizationContact: "",
    emergencyContact: "",
  });
  const [formData, setFormData] = useState({
    dateOfBirth: "",
    placeOfBirth: "",
    anniversary: "",
    mobile: "",
    gender: "",
    bloodGroup: "",
    emergencyContact: "",
    organizationContact: "",
    educationalQualification: "",
    aboutMe: "",
  });
  const { data } = useFetch("http://localhost:8090/api/v1/cities");

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

  const handleSubmit = (e) => {
    debugger;
    e.preventDefault();
    let url = "";
    switch (selectedValue) {
      case "HeadofFamily":
        url = "http://localhost:8090/api/v1/user/update";
        break;
      case "Spouse":
        url = "http://localhost:8090/api/v1/spouse";
        break;
      case "Child":
        url = "http://localhost:8090/api/v1/child";
        break;
      default:
        break;
    }
    if (url) {
      const dataToSend =
        selectedValue === "HeadofFamily" ? { ...formData, userId } : formData;
      fetchData(url, dataToSend, trimmedcardtitle);
    }
  };

  return (
    <>
      <ToastContainer autoClose={3000} />
      <div className="personalInformation">
        <div className="container my-5">
          <div className="form-group col-md-3 my-3">
            <SelectField
              name="user"
              value={selectedValue}
              onChange={(e) => setSelectedValue(e.target.value)}
              required={true}
              options={[
                { label: "Head of Family", value: "HeadofFamily" },
                { label: "Spouse", value: "Spouse" },
                { label: "Child", value: "Child" },
              ]}
            />
          </div>
          <form onSubmit={handleSubmit}>
            {selectedValue === "HeadofFamily" && (
              <>
                <div className="form-row row my-2 my-4">
                  <div className="form-group col-md-6 d-none">
                    <input type="hidden" name="name" value={userId} />
                  </div>

                  <div className="form-group col-md-6">
                    <Label htmlFor="dateOfBirth" label="Date of Birth" />
                    <span className="text-danger px-2">*</span>
                    <Input
                      type="date"
                      className="form-control"
                      name="dateOfBirth"
                      onChange={handleChange}
                      required={true}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <Label htmlFor="placeOfBirth" label=" Place of Birth" />
                    <span className="text-danger px-2">*</span>
                    <SelectField
                      name="placeOfBirth"
                      onChange={handleChange}
                      required={true}
                      options={data.map((item) => ({
                        label: item,
                        value: item,
                      }))}
                    />
                  </div>
                </div>
                <div className="form-row row my-2">
                  <div className="form-group col-md-6">
                    <Label htmlFor="anniversary" label="Anniversary" />
                    <span className="text-danger px-2">*</span>
                    <Input
                      type="date"
                      className="form-control"
                      name="anniversary"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <Label htmlFor="mobile" label="Mobile" />
                    <span className="text-danger px-2">*</span>
                    <Input
                      type="text"
                      name="mobile"
                      placeholder="Enter your mobile number"
                      className="form-control"
                      onChange={handleChange}
                      errorMessage={validationErrors.mobile}
                      errorClassName="is-invalid"
                      required={true}
                    />
                  </div>
                </div>
                <div className="form-row row my-2">
                  <div className="form-group col-md-6">
                    <Label htmlFor="gender" label="Gender" />
                    <span className="text-danger px-2">*</span>
                    <div className="d-flex flex-row gap-3">
                      <div class="form-check">
                        <Input
                          type="radio"
                          name="gender"
                          value="male"
                          className="form-check-input"
                          onChange={handleChange}
                          required={true}
                        />
                        <Label htmlFor="male" label="Male" />
                      </div>
                      <div class="form-check">
                        <Input
                          type="radio"
                          name="gender"
                          value="female"
                          className="form-check-input"
                          onChange={handleChange}
                          required={true}
                        />
                        <Label htmlFor="female" label="Female" />
                      </div>
                      <div class="form-check">
                        <Input
                          type="radio"
                          name="gender"
                          value="other"
                          className="form-check-input"
                          onChange={handleChange}
                          required={true}
                        />
                        <Label htmlFor="other" label="Other" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group col-md-6">
                    <Label htmlFor="bloodGroup" label="  Blood Group" />
                    <span className="text-danger px-2">*</span>
                    <SelectField
                      name="bloodGroup"
                      onChange={handleChange}
                      required={true}
                      options={[
                        { label: "select", value: "" },
                        { label: "A+", value: "A+" },
                        { label: "A-", value: "A-" },
                        { label: "B+", value: "B+" },
                        { label: "B-", value: "B-" },
                        { label: "O+", value: "O+" },
                        { label: "O-", value: "O-" },
                        { label: "AB+", value: "AB+" },
                        { label: "AB-", value: "AB-" },
                      ]}
                    />
                  </div>
                </div>
                <div className="form-row row my-2">
                  <div className="form-group col-md-6">
                    <Label
                      htmlFor="emergencyContact"
                      label=" Emergency Contact"
                    />
                    <span className="text-danger px-2">*</span>
                    <Input
                      type="text"
                      name="emergencyContact"
                      className="form-control"
                      onChange={handleChange}
                      errorMessage={validationErrors.emergencyContact}
                      errorClassName="is-invalid"
                      required={true}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <Label
                      htmlFor="organizationContact"
                      label=" Organization Contact"
                    />
                    <Input
                      type="text"
                      name="organizationContact"
                      className="form-control"
                      onChange={handleChange}
                      errorMessage={validationErrors.organizationContact}
                      errorClassName="is-invalid"
                    />
                  </div>
                </div>
                <div className="form-row row my-2">
                  <div className="form-group col-md-6">
                    <Label
                      htmlFor="educationalQualification"
                      label="Educational Qualification"
                    />
                    <Input
                      type="text"
                      name="educationalQualification"
                      className="form-control"
                      onChange={handleChange}
                      errorMessage={validationErrors.educationalQualification}
                      errorClassName="is-invalid"
                    />
                  </div>
                </div>
              </>
            )}

            {selectedValue === "Spouse" && (
              <CommonSpouseChildDetails
                handleChange={handleChange}
                data={data}
                validationErrors={validationErrors}
              />
            )}

            {selectedValue === "Child" && (
              <CommonSpouseChildDetails
                handleChange={handleChange}
                data={data}
                validationErrors={validationErrors}
              />
            )}
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

export default PersonalInformation;
