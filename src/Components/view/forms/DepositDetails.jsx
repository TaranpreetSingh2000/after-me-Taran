import React, { useState } from "react";
import validateInput from "../../regex/validateInput";
import Title from "../../UI/title/Title";

const DepositDetails = () => {
  const [validationErrors, setValidationErrors] = useState({
    bankname: "",
    bankbranch: "",
    nominee: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let error = validateInput(name, value);
    setValidationErrors({
      ...validationErrors,
      [name]: error,
    });
  };
  return (
    <>
      <div className="depositdetails">
        <div className="container my-5">
          <Title title="Fixed Deposit/ Recurring Deposit/ Company Deposit" />
          <form>
            <div className="form-row row my-2 my-2">
              <div className="form-group col-md-6">
                <label htmlFor="name" className="form-label">
                  Bank Name
                </label>
                <input
                  type="text"
                  className={`form-control ${
                    validationErrors.bankname ? "is-invalid" : ""
                  }`}
                  name="bankname"
                  onChange={handleChange}
                />
                {validationErrors.bankname && (
                  <div className="invalid-feedback">
                    {validationErrors.bankname}
                  </div>
                )}
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="branch" className="form-label">
                  Branch
                </label>
                <input
                  type="text"
                  className={`form-control ${
                    validationErrors.bankbranch ? "is-invalid" : ""
                  }`}
                  name="bankbranch"
                  onChange={handleChange}
                />
                {validationErrors.bankbranch && (
                  <div className="invalid-feedback">
                    {validationErrors.bankbranch}
                  </div>
                )}
              </div>
            </div>

            <div className="form-row row my-2 my-2">
              <div className="form-group col-md-6">
                <label htmlFor="deposittype" className="form-label">
                  Type of Deposit
                </label>
                <select
                  className="form-select"
                  type="text"
                  name="deposittype"
                  //   onChange={handleChange}
                >
                  <option>select</option>
                  <option>Fixed</option>
                  <option>Recurring</option>
                  <option>Company</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="name" className="form-label">
                  Name of Account Holder
                </label>
                <input
                  type="text"
                  className={`form-control ${
                    validationErrors.name ? "is-invalid" : ""
                  }`}
                  name="name"
                  onChange={handleChange}
                />
                {validationErrors.name && (
                  <div className="invalid-feedback">
                    {validationErrors.name}
                  </div>
                )}
              </div>
            </div>
            <div className="form-row row my-2">
              <div className="form-group col-md-6">
                <label htmlFor="nomineename" className="form-label">
                  Name of Nominee
                </label>
                <input
                  type="text"
                  className={`form-control ${
                    validationErrors.nominee ? "is-invalid" : ""
                  }`}
                  name="nominee"
                  onChange={handleChange}
                />
                {validationErrors.nominee && (
                  <div className="invalid-feedback">
                    {validationErrors.nominee}
                  </div>
                )}
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="depositdate" className="form-label">
                  Date of Deposit
                </label>
                <input
                  type="date"
                  className="form-control"
                  name="depositdate"
                  // onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row row my-2">
              <div className="form-group col-md-6">
                <label htmlFor="depositamount" className="form-label">
                  Amount of Deposit
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="depositamount"
                  // onChange={handleChange}
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

export default DepositDetails;
