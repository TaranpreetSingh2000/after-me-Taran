import React from "react";
import { Button, Label, SelectField, Input, Textarea } from "../../UI/index";
import UserSelectionDropdown from "./UserSelectionDropdown";

const CommonDrivingLicenceDetails = ({
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
          <Label
            htmlFor="name"
            label="Name (As mention in the Driving Licence)"
          />
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
          <Label htmlFor="licenceno" label="Driving Licence No" />
          <span className="text-danger px-2">*</span>
          <Input
            type="text"
            name="drivingLicenceNumber"
            placeholder="Enter your licence number"
            className="form-control"
            onChange={handleChange}
            errorMessage={validationErrors.drivingLicenceNumber}
            errorClassName="is-invalid"
            required={true}
          />
        </div>
      </div>

      <div className="form-row row my-2 my-2">
        <div className="form-group col-md-6">
          <Label htmlFor="authority" label="Licencing Authority" />
          <span className="text-danger px-2">*</span>
          <Input
            type="text"
            name="licencingAuthority"
            className="form-control"
            onChange={handleChange}
            errorMessage={validationErrors.licencingAuthority}
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
      <div className="form-row row my-2">
        <div className="form-group col-md-6">
          <Label htmlFor="validfrom" label="Valid From" />
          <span className="text-danger px-2">*</span>
          <Input
            type="date"
            name="validFrom"
            className="form-control"
            onChange={handleChange}
            required={true}
          />
        </div>
        <div className="form-group col-md-6">
          <Label htmlFor="validtill" label="Valid Till" />
          <span className="text-danger px-2">*</span>
          <Input
            type="date"
            name="validTill"
            className="form-control"
            onChange={handleChange}
            required={true}
          />
        </div>
      </div>
      <div className="form-row row my-2">
        <div className="form-group col-md-6">
          <Label htmlFor="bloodGroup" label="Blood Group" />
          <span className="text-danger px-2">*</span>
          <SelectField
            name="bloodGroup"
            onChange={handleChange}
            required={true}
            options={[
              { label: "select", value: "" },
              { label: "A+", value: "A+" },
              { label: "A-", value: "A-" },
              { label: "B+", value: "B+" },
              { label: "B-", value: "B-" },
              { label: "O+", value: "O+" },
              { label: "O-", value: "O-" },
              { label: "AB+", value: "AB+" },
              { label: "AB-", value: "AB-" },
            ]}
          />
        </div>

        <div className="form-group col-md-6">
          <Label htmlFor="remarks" label="Remarks" />
          <Textarea
            name="remarks"
            onChange={handleChange}
            placeholder="Enter your additional comments"
          />
        </div>
      </div>
    </>
  );
};

export default CommonDrivingLicenceDetails;
