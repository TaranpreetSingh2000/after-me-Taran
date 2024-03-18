import React, { useState, useEffect } from "react";
import validateInput from "../../regex/validateInput";
import { Button, Label, SelectField, Input, Title } from "../../UI/index";
import CommonReadyRefDoctors from "./CommonReadyRefDoctors";
import useForm from "../../services/useForm";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const ReadyReference = () => {
  const fetchData = useForm();
  const location = useLocation();
  const trimmedcardtitle = location.state;
  const [selectedValue, setSelectedValue] = useState("familyDoctors");
  const [showinitialform, setShowInitialForm] = useState(true);
  const userId = sessionStorage.getItem("userId");
  const [formData, setFormData] = useState({
    name: "",
    officeAddress: "",
    residenceAddress: "",
    contact: "",
    referenceType: selectedValue,
  });
  const [validationErrors, setValidationErrors] = useState({
    name: "",
    contact: "",
  });

  useEffect(() => {
    console.log(formData);
  }, [formData]);

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
      "http://localhost:8090/api/v1/ready-reference",
      dataWithUserId,
      trimmedcardtitle
    );
  };

  return (
    <>
      <ToastContainer autoClose={3000} />
      <div className="readyreference">
        <div className="container my-5">
          <div className="form-group col-md-3 my-3">
            <SelectField
              name="referenceType"
              value={selectedValue}
              onChange={(e) => {
                const value = e.target.value;
                setSelectedValue(value);
                handleChange({
                  target: { name: "referenceType", value: value },
                });
                setShowInitialForm(
                  value === "familyDoctors" ||
                    value === "specialDoctors" ||
                    value === "hospitals" ||
                    value === "taxConsultants" ||
                    value === "stockBrokers" ||
                    value === "insuranceAgents"
                );
              }}
              required={true}
              options={[
                { label: "Family Doctor", value: "familyDoctors" },
                { label: "Special Doctor", value: "specialDoctors" },
                { label: "hospitals", value: "hospitals" },
                { label: "Tax Consultant", value: "taxConsultants" },
                { label: "Stock Broker", value: "stockBrokers" },
                { label: "Insurance Agent", value: "insuranceAgents" },
              ]}
            />
          </div>
          <form onSubmit={handleSubmit}>
            {showinitialform && (
              <CommonReadyRefDoctors
                handleChange={handleChange}
                validationErrors={validationErrors}
              />
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default ReadyReference;
