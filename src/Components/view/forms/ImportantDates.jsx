import React, { useState } from "react";
import Title from "../../UI/title/Title";
import validateInput from "../../regex/validateInput";

const ImportantDates = () => {
  const [validationErrors, setValidationErrors] = useState({
    name: "",
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
      <div className="importantdates">
        <div className="container my-5">
          <Title title="Important Dates" />
          <form>
            <div className="form-row row my-2 my-2">
              <div className="form-group col-md-6">
                <label htmlFor="month" className="form-label">
                  Month
                </label>
                <select
                  className="form-select"
                  type="text"
                  name="month"
                  //   onChange={handleChange}
                >
                  <option>select</option>
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>August</option>
                  <option>September</option>
                  <option>October</option>
                  <option>November</option>
                  <option>December</option>
                </select>
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="date" className="form-label">
                  Date
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
                <label htmlFor="eventtype" className="form-label">
                  Event
                </label>
                <select
                  className="form-select"
                  type="text"
                  name="eventtype"
                  //   onChange={handleChange}
                >
                  <option>select</option>
                  <option>Birthday</option>
                  <option>Marriage</option>
                  <option>Anniversary</option>
                </select>
              </div>
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

export default ImportantDates;
