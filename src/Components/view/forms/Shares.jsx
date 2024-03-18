import React, { useState } from "react";
import Title from "../../UI/title/Title";
import validateInput from "../../regex/validateInput";

const Shares = () => {
  const [validationErrors, setValidationErrors] = useState({
    name: "",
    companyname: "",
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
      <div className="shares">
        <div className="container my-5">
          <Title title="Shares/Bonds/Units/Debentures" />
          <form>
            <div className="form-row row my-2 my-2">
              <div className="form-group col-md-6">
                <label htmlFor="depository" className="form-label">
                  Depository Details
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
                <label htmlFor="demataccno" className="form-label">
                  Demat Account Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="demataccno"
                  // onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row row my-2">
              <div className="form-group col-md-6">
                <label htmlFor="operationmode" className="form-label">
                  Mode of Operation
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="operationmode"
                  // onChange={handleChange}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="nomineedetails" className="form-label">
                  Nominee Details
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
            </div>

            <div className="form-row row my-2">
              <div className="form-group col-md-6">
                <label htmlFor="company" className="form-label">
                  Company
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
                <label htmlFor="noofshares" className="form-label">
                  Number of Shares
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="noofshares"
                  //   onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row row my-2">
              <div className="form-group col-md-6">
                <label htmlFor="location" className="form-label">
                  Demat Statement Location
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="location"
                  //   onChange={handleChange}
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

export default Shares;
