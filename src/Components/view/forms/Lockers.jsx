import React, { useState } from "react";
import validateInput from "../../regex/validateInput";
import { Button, Label, SelectField, Input, Title } from "../../UI/index";
import useForm from "../../services/useForm";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useTable from "../../services/useTable";

const Lockers = () => {
  const fetchData = useForm();
  const location = useLocation();
  const [selectedBankUser, setSelectedBankUser] = useState("");
  const userId = sessionStorage.getItem("userId");
  const trimmedcardtitle = location.state;
  const [formData, setFormData] = useState({
    lockerNo: "",
    inTheNameOf: "",
    code: "",
    rent: "",
    rentRenewalDate: "",
    nominee: "",
    contents: "",
    bankId: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    lockerNo: "",
    inTheNameOf: "",
    nominee: "",
  });

  const { data } = useTable("http://localhost:8090/api/v1/bankAccount/get");
  console.log(data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    if (name === "bankId") {
      setSelectedBankUser(value);
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
    const dataWithUserId = { ...formData };
    fetchData(
      "http://localhost:8090/api/v1/locker",
      dataWithUserId,
      trimmedcardtitle
    );
  };

  return (
    <>
      <ToastContainer autoClose={3000} />
      <div className="lockers">
        <div className="container my-5">
          <div className="form-group col-md-3 my-3">
            <select
              className="form-select"
              name="bankId"
              value={selectedBankUser}
              onChange={handleChange}
              required="true"
            >
              <option value="" disabled>
                Select the Bank
              </option>
              {data.map((bankdata, index) => {
                return (
                  <option key={index} value={bankdata.bankId}>
                    {bankdata.bankName}
                  </option>
                );
              })}
            </select>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-row row my-2 my-2">
              <div className="form-group col-md-6">
                <Label htmlFor="lockerno" label="Locker no" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="text"
                  name="lockerNo"
                  className="form-control"
                  onChange={handleChange}
                  errorMessage={validationErrors.lockerNo}
                  errorClassName="is-invalid"
                  required={true}
                />
              </div>

              <div className="form-group col-md-6">
                <Label htmlFor="nameof" label="Name" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="text"
                  name="inTheNameOf"
                  className="form-control"
                  onChange={handleChange}
                  errorMessage={validationErrors.inTheNameOf}
                  errorClassName="is-invalid"
                  required={true}
                />
              </div>
            </div>

            <div className="form-row row my-2 my-2">
              <div className="form-group col-md-6">
                <Label htmlFor="code" label="Code" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="text"
                  name="code"
                  className="form-control"
                  onChange={handleChange}
                  required={true}
                />
              </div>

              <div className="form-group col-md-6">
                <Label htmlFor="rent" label="Rent" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="number"
                  name="rent"
                  className="form-control"
                  onChange={handleChange}
                  required={true}
                />
              </div>
            </div>
            <div className="form-row row my-2">
              <div className="form-group col-md-6">
                <Label htmlFor="rentrenewaldate" label="Rent Renewal date" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="date"
                  name="rentRenewalDate"
                  className="form-control"
                  onChange={handleChange}
                  required={true}
                />
              </div>

              <div className="form-group col-md-6">
                <Label htmlFor="nominee" label="Nominee" />
                <span className="text-danger px-2">*</span>
                <Input
                  type="text"
                  name="nominee"
                  className="form-control"
                  onChange={handleChange}
                  errorMessage={validationErrors.nominee}
                  errorClassName="is-invalid"
                  required={true}
                />
              </div>
            </div>
            <div className="form-row row my-2">
              <div className="form-group col-md-6">
                <Label htmlFor="contents" label="Contents" />
                <Input
                  type="text"
                  name="contents"
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

export default Lockers;
