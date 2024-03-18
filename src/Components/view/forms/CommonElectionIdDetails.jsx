import React from "react";
import { Label, Input } from "../../UI/index";
import UserSelectionDropdown from "./UserSelectionDropdown";

const CommonElectionIdDetails = ({
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
          <Label htmlFor="name" label="Name (As mention in the VoterId card)" />
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
          <Label htmlFor="voterno" label="VoterId No" />
          <span className="text-danger px-2">*</span>
          <Input
            type="text"
            name="identityCardNumber"
            placeholder="Enter your pan number"
            className="form-control"
            onChange={handleChange}
            errorMessage={validationErrors.identityCardNumber}
            errorClassName="is-invalid"
            required={true}
          />
        </div>
      </div>

      <div className="form-row row my-2 my-2">
        <div className="form-group col-md-6">
          <Label htmlFor="fathername" label="Father's Name" />
          <span className="text-danger px-2">*</span>
          <Input
            type="text"
            name="fatherName"
            placeholder="Enter your Father Name"
            className="form-control"
            onChange={handleChange}
            errorMessage={validationErrors.fatherName}
            errorClassName="is-invalid"
            required={true}
          />
        </div>
        <div className="form-group col-md-6">
          <Label htmlFor="husbandname" label="Husband Name" />
          <Input
            type="text"
            name="husbandName"
            placeholder="Enter your Husband Name"
            className="form-control"
            onChange={handleChange}
            errorMessage={validationErrors.husbandName}
            errorClassName="is-invalid"
          />
        </div>
      </div>
      <div className="form-row row my-2">
        <div className="form-group col-md-6">
          <Label htmlFor="mobile" label="Mobile Number" />
          <span className="text-danger px-2">*</span>
          <Input
            type="text"
            name="linkedContact"
            placeholder="Enter your mobile number"
            className="form-control"
            onChange={handleChange}
            errorMessage={validationErrors.linkedContact}
            errorClassName="is-invalid"
            required={true}
          />
        </div>
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
      </div>
    </>
  );
};

export default CommonElectionIdDetails;
