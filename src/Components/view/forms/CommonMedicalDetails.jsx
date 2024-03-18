import React, { useState } from "react";
import { Label, Input, SelectField } from "../../UI/index";
import UserSelectionDropdown from "./UserSelectionDropdown";

const CommonMedicalDetails = ({
  selectedUser,
  targetedSelectedValue,
  data,
  handleChange,
  validationErrors,
}) => {
  const [vaccinatedval, setVaccinatedVal] = useState(false);

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
        <div className="form-group col-md-6 mt-1">
          <Label htmlFor="vaccinated" label="Vaccinated" />
          <span className="text-danger px-2">*</span>
          <div className="d-flex flex-row gap-3">
            <div class="form-check">
              <Input
                type="radio"
                name="vaccinated"
                value="yes"
                className="form-check-input"
                onChange={(e) => setVaccinatedVal(e.target.value)}
                required={true}
              />
              <Label htmlFor="yes" label="Yes" />
            </div>
            <div class="form-check">
              <Input
                type="radio"
                name="vaccinated"
                value="no"
                className="form-check-input"
                onChange={(e) => setVaccinatedVal(e.target.value)}
                required={true}
              />
              <Label htmlFor="no" label="No" />
            </div>
          </div>
        </div>
      </div>
      <div className="form-row row my-3">
        <div className="form-group col-md-6">
          <Label htmlFor="vaccinationname" label="Vaccination Name" />
          <Input
            type="text"
            name="vaccinationName"
            className="form-control"
            onChange={handleChange}
            errorMessage={validationErrors.vaccinationName}
            errorClassName="is-invalid"
            required={vaccinatedval !== "no"}
            disabled={vaccinatedval !== "yes"}
          />
        </div>
        <div className="form-group col-md-6">
          <Label htmlFor="vaccinationdate" label="Vaccination Date" />
          <Input
            type="date"
            name="vaccinationDate"
            className="form-control"
            onChange={handleChange}
            required={vaccinatedval !== "no"}
            disabled={vaccinatedval !== "yes"}
          />
        </div>
      </div>

      <div className="form-row row my-3">
        <div className="form-group col-md-6">
          <Label
            htmlFor="reactionOfMedicine"
            label="Allergic Reaction to Medicines"
          />
          <span className="text-danger px-2">*</span>
          <Input
            type="text"
            name="reactionOfMedicine"
            className="form-control"
            onChange={handleChange}
            errorMessage={validationErrors.reactionOfMedicine}
            errorClassName="is-invalid"
          />
        </div>
        <div className="form-group col-md-6">
          <Label htmlFor="metallicImpact" label="Metallic Implant (If any)" />
          <span className="text-danger px-2">*</span>
          <Input
            type="text"
            name="metallicImpact"
            className="form-control"
            onChange={handleChange}
            errorMessage={validationErrors.metallicImpact}
            errorClassName="is-invalid"
            required={true}
          />
        </div>
      </div>
      <div className="form-row row my-3">
        <div className="form-group col-md-6">
          <Label
            htmlFor="takingLifeSavingMedicine"
            label="Taking any life saving medicine"
          />
          <span className="text-danger px-2">*</span>
          <SelectField
            name="takingLifeSavingMedicine"
            onChange={handleChange}
            required={true}
            options={[
              { label: "Select", value: "" },
              { label: "Yes", value: "yes" },
              { label: "No", value: "no" },
            ]}
          />
        </div>
        <div className="form-group col-md-6">
          <Label htmlFor="dosage" label="Dosage" />
          <span className="text-danger px-2">*</span>
          <Input
            type="number"
            name="dosage"
            className="form-control"
            onChange={handleChange}
            required={true}
          />
        </div>
      </div>
      <div className="form-row row my-3">
        <div className="form-group col-md-6">
          <Label htmlFor="symptoms" label="Symptoms" />
          <span className="text-danger px-2">*</span>
          <Input
            type="text"
            name="symptoms"
            className="form-control"
            onChange={handleChange}
            errorMessage={validationErrors.symptoms}
            errorClassName="is-invalid"
            required={true}
          />
        </div>
        <div className="form-group col-md-6">
          <Label htmlFor="sos" label="SOS" />
          <span className="text-danger px-2">*</span>
          <Input
            type="text"
            name="sos"
            className="form-control"
            onChange={handleChange}
            errorMessage={validationErrors.sos}
            errorClassName="is-invalid"
            required={true}
          />
        </div>
      </div>
    </>
  );
};

export default CommonMedicalDetails;
