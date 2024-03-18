import React from "react";
import { Button, Label, SelectField, Input, Title } from "../../UI/index";

const CommonReadyRefDoctors = ({ handleChange, validationErrors }) => {
  debugger;
  return (
    <>
      <div className="form-row row my-3">
        <div className="form-group col-md-6">
          <Label htmlFor="Name" label="Name" />
          <span className="text-danger px-2">*</span>
          <Input
            type="text"
            name="name"
            className="form-control"
            onChange={handleChange}
            errorMessage={validationErrors.name}
            errorClassName="is-invalid"
            required={true}
          />
        </div>

        <div className="form-group col-md-6">
          <Label htmlFor="mobile" label="Mobile Number" />
          <span className="text-danger px-2">*</span>
          <Input
            type="text"
            name="contact"
            className="form-control"
            onChange={handleChange}
            errorMessage={validationErrors.contact}
            errorClassName="is-invalid"
            required={true}
          />
        </div>
      </div>
      <div className="form-row row my-3">
        <div className="form-group col-md-6">
          <Label htmlFor="Residence Address" label="Residence Address" />
          <span className="text-danger px-2">*</span>
          <Input
            type="text"
            className="form-control"
            name="residenceAddress"
            onChange={handleChange}
            required={true}
          />
        </div>

        <div className="form-group col-md-6">
          <Label htmlFor="Office Address" label="Office Address" />
          <span className="text-danger px-2">*</span>
          <Input
            type="text"
            className="form-control"
            name="officeAddress"
            onChange={handleChange}
            required={true}
          />
        </div>
      </div>
      <Button
        type="submit"
        className="btn btn-primary my-3 px-5 py-2"
        title="Submit"
      />
    </>
  );
};

export default CommonReadyRefDoctors;
