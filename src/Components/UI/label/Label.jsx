import React from "react";

const Label = ({ htmlFor, label }) => {
  return (
    <>
      <label className="form-label px-1" htmlFor={htmlFor}>
        {label}
      </label>
    </>
  );
};

export default Label;
