import React, { useState } from "react";
import Title from "../../UI/title/Title";
import style from "./Forms.module.css";
import validateInput from "../../regex/validateInput";

const HouseProperty = () => {
  const [validationErrors, setValidationErrors] = useState({
    name: "",
    companyname: "",
    insurancecompany: "",
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
      <div className="houseproperty">
        <div className="container my-5">
          <Title title="House Property" />
          <form>
            <div className="form-row row my-2 my-2">
              <div className="form-group col-md-6">
                <label htmlFor="detail" className="form-label">
                  Property detail satnding in the name of
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
              <div className="form-group col-md-6">
                <label htmlFor="acquired" className="form-label">
                  How Acquired
                </label>
                <select
                  className="form-select"
                  type="text"
                  name="acquired"
                  //   onChange={handleChange}
                >
                  <option>select</option>
                  <option>Inherited</option>
                  <option>Loan</option>
                </select>
              </div>
            </div>

            <div className="form-row row my-2 my-2">
              <div className="form-group col-md-6">
                <label htmlFor="amount" className="form-label">
                  Loan Amount Rs.
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="amount"
                  // onChange={handleChange}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="installment" className="form-label">
                  Installment
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="installment"
                  // onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row row my-2 my-2">
              <div className="form-group col-md-6">
                <label htmlFor="number" className="form-label">
                  Registration Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="number"
                  // onChange={handleChange}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="number" className="form-label">
                  Property Card Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="number"
                  // onChange={handleChange}
                />
              </div>
            </div>

            <div
              className={`form-row row my-2 my-3 text-center ${style.houseProperty}`}
            >
              <h4>House Tax Details</h4>
            </div>

            <div className="form-row row my-2 my-2">
              <div className="form-group col-md-6">
                <label htmlFor="tax" className="form-label">
                  House tax payable
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="tax"
                  // onChange={handleChange}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="number" className="form-label">
                  Census No
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="number"
                  // onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row row my-2 my-2">
              <div className="form-group col-md-6">
                <label htmlFor="number" className="form-label">
                  Property Identification Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="number"
                  // onChange={handleChange}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="area" className="form-label">
                  Construction Area Sq. meters
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="area"
                  // onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row row my-2 my-2">
              <div className="form-group col-md-6">
                <label htmlFor="tax" className="form-label">
                  Due Date of House Tax
                </label>
                <input
                  type="date"
                  className="form-control"
                  name="tax"
                  // onChange={handleChange}
                />
              </div>
            </div>

            <div
              className={`form-row row my-2 my-3 text-center ${style.houseProperty}`}
            >
              <h4>House Insurance Property</h4>
            </div>

            <div className="form-row row my-2 my-2">
              <div className="form-group col-md-6">
                <label htmlFor="company" className="form-label">
                  Insurance Company
                </label>
                <input
                  type="text"
                  className={`form-control ${
                    validationErrors.companyname ? "is-invalid" : ""
                  }`}
                  name="companyname"
                  onChange={handleChange}
                />
                {validationErrors.companyname && (
                  <div className="invalid-feedback">
                    {validationErrors.companyname}
                  </div>
                )}
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="number" className="form-label">
                  Sum Insured
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="number"
                  // onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row row my-2 my-2">
              <div className="form-group col-md-6">
                <label htmlFor="number" className="form-label">
                  Premium Amount
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="number"
                  // onChange={handleChange}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="date" className="form-label">
                  Policy Renewal date
                </label>
                <input
                  type="date"
                  className="form-control"
                  name="date"
                  // onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row row my-2 my-2">
              <div className="form-group col-md-6">
                <label htmlFor="number" className="form-label">
                  Risk Covered
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="number"
                  // onChange={handleChange}
                />
              </div>
            </div>

            <div
              className={`form-row row my-2 my-3 text-center ${style.houseProperty}`}
            >
              <h4>House Insurance (Life of Borrower)</h4>
            </div>

            <div className="form-row row my-2 my-2">
              <div className="form-group col-md-6">
                <label htmlFor="company" className="form-label">
                  Insurance Company
                </label>
                <input
                  type="text"
                  className={`form-control ${
                    validationErrors.insurancecompany ? "is-invalid" : ""
                  }`}
                  name="insurancecompany"
                  onChange={handleChange}
                />
                {validationErrors.insurancecompany && (
                  <div className="invalid-feedback">
                    {validationErrors.insurancecompany}
                  </div>
                )}
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="number" className="form-label">
                  Sum Insured
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="number"
                  // onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row row my-2 my-2">
              <div className="form-group col-md-6">
                <label htmlFor="number" className="form-label">
                  Premium Amount
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="number"
                  // onChange={handleChange}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="date" className="form-label">
                  Policy Renewal date
                </label>
                <input
                  type="date"
                  className="form-control"
                  name="date"
                  // onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row row my-2 my-2">
              <div className="form-group col-md-6">
                <label htmlFor="number" className="form-label">
                  Risk Covered
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="number"
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

export default HouseProperty;
