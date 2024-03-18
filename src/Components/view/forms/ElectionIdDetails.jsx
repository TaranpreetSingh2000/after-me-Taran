import React, { useState } from "react";
import validateInput from "../../regex/validateInput";
import { Button, Label, SelectField, Input } from "../../UI/index";
import useForm from "../../services/useForm";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useTable from "../../services/useTable";
import CommonElectionIdDetails from "./CommonElectionIdDetails";

const ElectionIdDetails = () => {
  const fetchData = useForm();
  const location = useLocation();
  const trimmedcardtitle = location.state;
  const userId = sessionStorage.getItem("userId");
  const [selectedValue, setSelectedValue] = useState("HeadofFamily");
  const [selectedUser, setSelectedUser] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    identityCardNumber: "",
    linkedContact: "",
    husbandName: "",
    fatherName: "",
    issueDate: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    name: "",
    fatherName: "",
    husbandName: "",
    linkedContact: "",
    identityCardNumber: "",
  });

  const targetedSelectedValue = selectedValue;
  const { data } =
    targetedSelectedValue === "Spouse"
      ? useTable("http://localhost:8090/api/v1/spouses")
      : useTable("http://localhost:8090/api/v1/children");

  console.log(data);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "selectedId") {
      setSelectedUser(value);
      const selectedId =
        targetedSelectedValue === "Spouse" ? "spouseId" : "childId";
      setFormData({
        ...formData,
        [selectedId]: value,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
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
      "http://localhost:8090/api/v1/voter-detail",
      dataWithUserId,
      trimmedcardtitle
    );
  };

  return (
    <>
      <ToastContainer autoClose={3000} />
      <div className="electioniddetails">
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
            {selectedValue === "HeadofFamily" ||
            selectedValue === "Spouse" ||
            selectedValue === "Child" ? (
              <CommonElectionIdDetails
                selectedUser={selectedUser}
                targetedSelectedValue={targetedSelectedValue}
                data={data}
                handleChange={handleChange}
                validationErrors={validationErrors}
              />
            ) : null}

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

export default ElectionIdDetails;
