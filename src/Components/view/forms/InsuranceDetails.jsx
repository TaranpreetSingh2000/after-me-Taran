import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Title from "../../UI/title/Title";
import validateInput from "../../regex/validateInput";

const InsuranceDetails = () => {
  const [validationErrors, setValidationErrors] = useState({
    name: "",
    tableterm: "",
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
    <div className="insurancedetails">
      <div className="container my-5">
        <Title title="Insurance Details" />
        <form>
          <div className="form-row row my-2 my-2">
            <div className="form-group col-md-6">
              <label htmlFor="name" className="form-label">
                Name/Nominee
              </label>
              <input
                type="text"
                className={`form-control ${
                  validationErrors.name ? "is-invalid" : ""
                }`}
                name="name"
                onChange={handleChange}
                required
              />
              {validationErrors.name && (
                <div className="invalid-feedback">{validationErrors.name}</div>
              )}
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="policyoffice" className="form-label">
                Policy No./ Issuing Office
              </label>
              <input
                type="text"
                className="form-control"
                name="policyoffice"
                // onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-row row my-2">
            <div className="form-group col-md-6">
              <label htmlFor="amtinsured" className="form-label">
                Amt Insured
              </label>
              <input
                type="number"
                className="form-control"
                name="amtinsured"
                // onChange={handleChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="issuematurity" className="form-label">
                Issue Date/Maturity Date
              </label>
              <input
                type="date"
                className="form-control"
                name="issuematurity"
                // onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-row row my-2">
            <div className="form-group col-md-6">
              <label htmlFor="tableterm" className="form-label">
                Table & Term
              </label>
              <input
                type="text"
                className={`form-control ${
                  validationErrors.tableterm ? "is-invalid" : ""
                }`}
                name="tableterm"
                onChange={handleChange}
              />
              {validationErrors.tableterm && (
                <div className="invalid-feedback">
                  {validationErrors.tableterm}
                </div>
              )}
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="premiumamount" className="form-label">
                Premium Amount
              </label>
              <input
                type="number"
                className="form-control"
                name="premiumamount"
                // onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row row my-2">
            <div className="form-group col-md-6">
              <label htmlFor="premiumdate" className="form-label">
                Premium Due Date
              </label>
              <input
                type="date"
                className="form-control"
                name="premiumdate"
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
  );
};

export default InsuranceDetails;
