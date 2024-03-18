import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import style from "./Forms.module.css";
import { useLocation } from "react-router-dom";
import { Button, Label, SelectField, Input, Title } from "../../UI/index";
import useForm from "../../services/useForm";
import useFetch from "../../services/useFetch";

const LocationOfDocuments = () => {
  const fetchData = useForm();
  const location = useLocation();
  const trimmedcardtitle = location.state;
  const userId = sessionStorage.getItem("userId");

  const [formData, setFormData] = useState({
    documentsWillsType: "",
    locationOfDocument: "",
  });
  const { data } = useFetch("http://localhost:8090/api/v1/cities");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    debugger;
    e.preventDefault();
    const dataWithUserId = { ...formData, userId };
    fetchData(
      "http://localhost:8090/api/v1/location-of-imp-docs",
      dataWithUserId,
      trimmedcardtitle
    );
  };
  return (
    <>
      <ToastContainer autoClose={3000} />
      <div className="locationofdocuments">
        <div className="container my-5">
          <form onSubmit={handleSubmit}>
            <div className="form-row row my-2 my-2">
              <div className="form-group col-md-6">
                <Label htmlFor="documentwill" label="Document will type" />
                <span className="text-danger px-2">*</span>
                <SelectField
                  name="documentsWillsType"
                  onChange={handleChange}
                  required={true}
                  options={[
                    { label: "select", value: "select" },
                    { label: "Personal Will", value: "Personal_Will" },
                    { label: "Spouse Will", value: "Spouse_Will" },
                    {
                      label: "Insurance Policies",
                      value: "Insurance_Policies",
                    },
                    { label: "Investment papers", value: "Invest_Papers" },
                    { label: "Property Records", value: "Property_Records" },
                    { label: "Birth Certificate", value: "Birth_Certificate" },
                    {
                      label: "Marriage Certificate",
                      value: "Marriage_Certificate",
                    },
                    {
                      label: "Domicile Certificate",
                      value: "Domicile_Certificate",
                    },
                    {
                      label: "Important Agreements",
                      value: "Important_Agreements",
                    },
                    {
                      label: "Other Important Papers",
                      value: "Other_Important_Papers",
                    },
                    {
                      label: "Educational Certificates",
                      value: "Educational_certificates",
                    },
                  ]}
                />
              </div>
              <div className="form-group col-md-6">
                <Label htmlFor="location" label="Location of document" />
                <span className="text-danger px-2">*</span>
                <SelectField
                  name="locationOfDocument"
                  onChange={handleChange}
                  required={true}
                  options={data.map((item) => ({
                    label: item,
                    value: item,
                  }))}
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

export default LocationOfDocuments;
