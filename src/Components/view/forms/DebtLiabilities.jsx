import React, { useState } from "react";
import validateInput from "../../regex/validateInput";
import Title from "../../UI/title/Title";

const DebtLiabilities = () => {
  const [validationErrors, setValidationErrors] = useState({
    name: "",
    bankname: "",
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
      <div className="debtliabilities">
        <div className="container my-5">
          <Title title="My Debt Liabilities" />
          <form>
            <div className="form-row row my-2 my-2">
              <div className="form-group col-md-6">
                <label htmlFor="name" className="form-label">
                  Name
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
                <label htmlFor="account" className="form-label">
                  Account No
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="account"
                  // onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row row my-2 my-2">
              <div className="form-group col-md-6">
                <label htmlFor="bankname" className="form-label">
                  Bank Name
                </label>
                <input
                  type="text"
                  name="bankname"
                  className={`form-control ${
                    validationErrors.bankname ? "is-invalid" : ""
                  }`}
                  onChange={handleChange}
                />
                {validationErrors.bankname && (
                  <div className="invalid-feedback">
                    {validationErrors.bankname}
                  </div>
                )}
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

export default DebtLiabilities;
