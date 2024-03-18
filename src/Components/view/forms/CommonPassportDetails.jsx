import React from "react";
import { Label, Input, SelectField } from "../../UI/index";
import UserSelectionDropdown from "./UserSelectionDropdown";

const CommonPassportDetails = ({
  selectedUser,
  targetedSelectedValue,
  data,
  handleChange,
  validationErrors,
}) => {
  return (
    <>
      <div className="form-row row my-4">
        {targetedSelectedValue === "Spouse" ||
        targetedSelectedValue === "Child" ? (
          <UserSelectionDropdown
            selectedUser={selectedUser}
            handleChange={handleChange}
            data={data}
            targetedSelectedValue={targetedSelectedValue}
          />
        ) : (
          ""
        )}
      </div>

      <div className="form-row row my-2 my-2">
        <div className="form-group col-md-6">
          <Label htmlFor="name" label="Name (As mention in the Passport)" />
          <span className="text-danger px-2">*</span>
          <Input
            type="text"
            name="name"
            placeholder="Enter your Full Name"
            className="form-control"
            onChange={handleChange}
            errorMessage={validationErrors.name}
            errorClassName="is-invalid"
            required={true}
          />
        </div>
        <div className="form-group col-md-6">
          <Label htmlFor="passportno" label="Passport Number" />
          <span className="text-danger px-2">*</span>
          <Input
            type="text"
            name="passportNumber"
            placeholder="Enter your passport number"
            className="form-control"
            onChange={handleChange}
            errorMessage={validationErrors.passportNumber}
            errorClassName="is-invalid"
            required={true}
          />
        </div>
      </div>

      <div className="form-row row my-2 my-2">
        <div className="form-group col-md-6">
          <Label htmlFor="issuedate" label="Issue Date" />
          <span className="text-danger px-2">*</span>
          <Input
            type="date"
            name="issueDate"
            className="form-control"
            onChange={handleChange}
            required={true}
          />
        </div>
        <div className="form-group col-md-6">
          <Label htmlFor="expirydate" label="Expiry Date" />
          <span className="text-danger px-2">*</span>
          <Input
            type="date"
            name="expiryDate"
            className="form-control"
            onChange={handleChange}
            required={true}
          />
        </div>
      </div>
      <div className="form-row row my-2">
        <div className="form-group col-md-6">
          <Label htmlFor="authority" label="Issuing Authority" />
          <span className="text-danger px-2">*</span>

          <Input
            type="text"
            name="issuingAuthority"
            className="form-control"
            onChange={handleChange}
            errorMessage={validationErrors.issuingAuthority}
            errorClassName="is-invalid"
            required={true}
          />
        </div>
        <div className="form-group col-md-6">
          <Label
            htmlFor="previousdetails"
            label="Previous Passport Details (Enter Name or Passport no)"
          />
          <Input
            type="text"
            name="previousPassportDetails"
            className="form-control"
            onChange={handleChange}
            errorMessage={validationErrors.previousPassportDetails}
            errorClassName="is-invalid"
          />
        </div>
      </div>
    </>
  );
};

export default CommonPassportDetails;
