import React, { useState } from "react";
import validateInput from "../../regex/validateInput";
import { Button, Label, SelectField, Input, Title } from "../../UI/index";

const VehicleInformation = () => {
  const [isfilled, setIsFilled] = useState({
    name: false,
    insurancecompany: false,
    agentname: false,
    mobile: false,
    policystartdate: false,
  });
  const [validationErrors, setValidationErrors] = useState({
    name: "",
    insurancecompany: "",
    agentname: "",
    mobile: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    let error = validateInput(name, value);

    setValidationErrors({
      ...validationErrors,
      [name]: error,
    });
    setIsFilled({
      ...isfilled,
      [name]: !error,
    });
  };
  return (
    <>
      <div className="container my-5">
        <form>
          <div className="form-row row my-2 my-4">
            <div className="form-group col-md-6 d-none">
              <input type="hidden" name="name" />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="name" className="form-label">
                Vehicle Name<span className="text-danger px-2">*</span>
              </label>
              <input
                type="text"
                className={`form-control ${
                  validationErrors.name ? "is-invalid" : ""
                }`}
                name="name"
                onChange={handleChange}
                placeholder="Enter your vehicle name"
                required
              />
              {validationErrors.name && (
                <div className="invalid-feedback">{validationErrors.name}</div>
              )}
            </div>
            <div
              className={`form-group col-md-6 ${isfilled.name ? "" : "d-none"}`}
            >
              <label htmlFor="year" className="form-label">
                Year<span className="text-danger px-2">*</span>
              </label>
              <input
                type="number"
                className="form-control"
                name="year"
                placeholder="Enter your year"
                required
              />
            </div>
          </div>

          <div className="form-row row my-2">
            <div className="form-group col-md-6">
              <label htmlFor="insurancecompany" className="form-label">
                Insurance Company<span className="text-danger px-2">*</span>
              </label>
              <input
                type="text"
                className={`form-control ${
                  validationErrors.insurancecompany ? "is-invalid" : ""
                }`}
                name="insurancecompany"
                onChange={handleChange}
                placeholder="Enter your company name"
                required
              />
              {validationErrors.insurancecompany && (
                <div className="invalid-feedback">
                  {validationErrors.insurancecompany}
                </div>
              )}
            </div>

            <div
              className={`form-group col-md-6 ${
                isfilled.insurancecompany ? "" : "d-none"
              }`}
            >
              <label htmlFor="policynumber" className="form-label">
                Policy Number<span className="text-danger px-2">*</span>
              </label>
              <input
                type="number"
                className="form-control"
                name="policynumber"
                onChange={handleChange}
                placeholder="Enter your policy number"
                required
              />
            </div>
          </div>

          <div className="form-row row my-2 my-4">
            <div className="form-group col-md-6">
              <label htmlFor="agentname" className="form-label">
                Agent Name<span className="text-danger px-2">*</span>
              </label>
              <input
                type="text"
                className={`form-control ${
                  validationErrors.agentname ? "is-invalid" : ""
                }`}
                name="agentname"
                onChange={handleChange}
                placeholder="Enter you name"
                required
              />
              {validationErrors.agentname && (
                <div className="invalid-feedback">
                  {validationErrors.agentname}
                </div>
              )}
            </div>
            <div
              className={`form-group col-md-6 ${
                isfilled.agentname ? "" : "d-none"
              }`}
            >
              <label htmlFor="mobile" className="form-label">
                Agent Mobile Number<span className="text-danger px-2">*</span>
              </label>
              <input
                type="number"
                className={`form-control ${
                  validationErrors.mobile ? "is-invalid" : ""
                }`}
                name="mobile"
                placeholder="Enter your mobile number"
                onChange={handleChange}
                required
              />
              {validationErrors.mobile && (
                <div className="invalid-feedback">
                  {validationErrors.mobile}
                </div>
              )}
            </div>
          </div>

          <div className="form-row row my-2 my-4">
            <div className="form-group col-md-6">
              <label htmlFor="suminsured" className="form-label">
                Sum Insured<span className="text-danger px-2">*</span>
              </label>
              <input
                type="number"
                className="form-control"
                name="suminsured"
                onChange={handleChange}
                placeholder="Enter your amount"
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="noclaimbonus" className="form-label">
                No Claim Bonus<span className="text-danger px-2">*</span>
              </label>
              <select
                className="form-select"
                type="text"
                name="noclaimbonus"
                onChange={handleChange}
                required
              >
                <option>select</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
          </div>

          <div className="form-row row my-2 my-4">
            <div className="form-group col-md-6">
              <label htmlFor="policystartdate" className="form-label">
                Policy Start Date<span className="text-danger px-2">*</span>
              </label>
              <input
                type="date"
                className="form-control"
                name="policystartdate"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="policyenddate" className="form-label">
                Policy End Date<span className="text-danger px-2">*</span>
              </label>
              <input
                type="date"
                className="form-control"
                name="policyenddate"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row row my-2 my-4">
            <div className="form-group col-md-6">
              <label htmlFor="premium" className="form-label">
                Premium<span className="text-danger px-2">*</span>
              </label>
              <input
                type="number"
                className="form-control"
                name="premium"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="remarks" className="form-label">
                Remarks
              </label>
              <input
                type="text"
                className="form-control"
                name="remarks"
                onChange={handleChange}
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
    </>
  );
};

export default VehicleInformation;
