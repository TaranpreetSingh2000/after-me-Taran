import React from "react";
import { Label } from "../../UI/index";

const UserSelectionDropdown = ({
  selectedUser,
  handleChange,
  data,
  targetedSelectedValue,
}) => {
  return (
    <div className="form-group col-md-6">
      <Label htmlFor="name" label="Name" />
      <span className="text-danger px-2">*</span>

      <select
        className="form-select"
        name="selectedId"
        value={selectedUser}
        onChange={handleChange}
        required="true"
      >
        <option value="" disabled>
          Select the User
        </option>
        {data ? (
          data.map((userdata, index) => {
            return (
              <option
                key={index}
                value={`${
                  targetedSelectedValue === "Spouse"
                    ? userdata.spouseId
                    : userdata.childId
                }`}
              >
                {userdata.name}
              </option>
            );
          })
        ) : (
          <p>Data not found</p>
        )}
      </select>
    </div>
  );
};

export default UserSelectionDropdown;
