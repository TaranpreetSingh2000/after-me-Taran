import React from "react";
import Label from "../../UI/label/Label";
import Input from "../../UI/input/Input";
import SelectField from "../../UI/select/SelectField";

const CommonSpouseChildDetails = ({ handleChange, data, validationErrors }) => {
  return (
    <>
      <div className="form-row row my-2 my-4">
        <div className="form-group col-md-6">
          <Label htmlFor="name" label="Full Name" />
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
          <Label htmlFor="dateOfBirth" label="Date of Birth" />
          <span className="text-danger px-2">*</span>
          <Input
            type="date"
            className="form-control"
            name="dateOfBirth"
            onChange={handleChange}
            required={true}
          />
        </div>
      </div>

      <div className="form-row row my-2">
        <div className="form-group col-md-6">
          <Label htmlFor="placeOfBirth" label=" Place of Birth" />
          <span className="text-danger px-2">*</span>
          <SelectField
            name="placeOfBirth"
            onChange={handleChange}
            required={true}
            options={data.map((item) => ({
              label: item,
              value: item,
            }))}
          />
        </div>

        <div className="form-group col-md-6">
          <Label htmlFor="email" label="Email" />
          <span className="text-danger px-2">*</span>
          <Input
            type="email"
            name="email"
            className="form-control"
            onChange={handleChange}
            errorMessage={validationErrors.email}
            errorClassName="is-invalid"
            required={true}
          />
        </div>
      </div>

      <div className="form-row row my-2">
        <div className="form-group col-md-6">
          <Label htmlFor="anniversary" label="Anniversary" />

          <Input
            type="date"
            className="form-control"
            name="anniversary"
            onChange={handleChange}
          />
        </div>
        <div className="form-group col-md-6">
          <Label htmlFor="mobile" label="Mobile" />
          <span className="text-danger px-2">*</span>
          <Input
            type="text"
            name="mobile"
            placeholder="Enter your mobile number"
            className="form-control"
            onChange={handleChange}
            errorMessage={validationErrors.mobile}
            errorClassName="is-invalid"
            required={true}
          />
        </div>
      </div>
      <div className="form-row row my-2">
        <div className="form-group col-md-6">
          <Label htmlFor="gender" label="Gender" />
          <span className="text-danger px-2">*</span>
          <div className="d-flex flex-row gap-3">
            <div class="form-check">
              <Input
                type="radio"
                name="gender"
                value="male"
                className="form-check-input"
                onChange={handleChange}
                required={true}
              />
              <Label htmlFor="male" label="Male" />
            </div>
            <div class="form-check">
              <Input
                type="radio"
                name="gender"
                value="female"
                className="form-check-input"
                onChange={handleChange}
                required={true}
              />
              <Label htmlFor="female" label="Female" />
            </div>
            <div class="form-check">
              <Input
                type="radio"
                name="gender"
                value="other"
                className="form-check-input"
                onChange={handleChange}
                required={true}
              />
              <Label htmlFor="other" label="Other" />
            </div>
          </div>
        </div>
        <div className="form-group col-md-6">
          <Label htmlFor="bloodGroup" label="  Blood Group" />
          <span className="text-danger px-2">*</span>
          <SelectField
            name="bloodGroup"
            onChange={handleChange}
            required={true}
            options={[
              { label: "select", value: "select" },
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
      </div>
      <div className="form-row row my-2">
        <div className="form-group col-md-6">
          <Label htmlFor="emergencyContact" label=" Emergency Contact" />
          <span className="text-danger px-2">*</span>
          <Input
            type="text"
            name="emergencyContact"
            className="form-control"
            onChange={handleChange}
            errorMessage={validationErrors.emergencyContact}
            errorClassName="is-invalid"
            required={true}
          />
        </div>
        <div className="form-group col-md-6">
          <Label htmlFor="organizationContact" label=" Organization Contact" />
          <Input
            type="text"
            name="organizationContact"
            className="form-control"
            onChange={handleChange}
            errorMessage={validationErrors.organizationContact}
            errorClassName="is-invalid"
          />
        </div>
      </div>
      <div className="form-row row my-2">
        <div className="form-group col-md-6">
          <Label
            htmlFor="educationalQualification"
            label="Educational Qualification"
          />
          <Input
            type="text"
            name="educationalQualification"
            className="form-control"
            onChange={handleChange}
            errorMessage={validationErrors.educationalQualification}
            errorClassName="is-invalid"
          />
        </div>
      </div>
    </>
  );
};

export default CommonSpouseChildDetails;
