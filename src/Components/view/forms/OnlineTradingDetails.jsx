import React, { useState } from "react";
import Title from "../../UI/title/Title";
import validateInput from "../../regex/validateInput";

const OnlineTradingDetails = () => {
  const [validationErrors, setValidationErrors] = useState({
    name: "",
    bankbranch: "",
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
      <div className="onlinetrading">
        <div className="container my-5">
          <Title title="Online Trading Account Details" />
          <form>
            <div className="form-row row my-2 my-2">
              <div className="form-group col-md-6">
                <label htmlFor="name" className="form-label">
                  Online Trading Vendor name
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
                <label htmlFor="sdlvalue" className="form-label">
                  NSDL/ CSDL
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="sdlvalue"
                  // onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row row my-2 my-2">
              <div className="form-group col-md-6">
                <label htmlFor="accnumber" className="form-label">
                  Account Number
                </label>
                <input type="text" name="bankname" className="form-control" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="branch" className="form-label">
                  Bank Branch Name
                </label>
                <input
                  type="number"
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
            <div className="form-row row my-2">
              <div className="form-group col-md-6">
                <label htmlFor="bankdetail" className="form-label">
                  Attached Bank Account Details
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="bankdetail"
                  // onChange={handleChange}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="depositordetail" className="form-label">
                  Attached Depository Participant Details
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="depositordetail"
                  // onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row row my-2">
              <div className="form-group col-md-6">
                <label htmlFor="userid" className="form-label">
                  User Id
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="userid"
                  // onChange={handleChange}
                />
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  // onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row row my-2">
              <div className="form-group col-md-6">
                <label htmlFor="remarks" className="form-label">
                  Remarks
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="remarks"
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

export default OnlineTradingDetails;
