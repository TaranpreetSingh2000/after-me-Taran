import React from "react";

const SelectField = ({ name, value, onChange, required, options }) => {
  return (
    <div>
      <select
        type="text"
        name={name}
        className="form-select"
        value={value}
        onChange={onChange}
        required={required}
      >
        {options.map((option, index) => {
          return (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectField;
