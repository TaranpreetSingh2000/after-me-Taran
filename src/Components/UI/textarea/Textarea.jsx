import React from "react";

const Textarea = ({ name, onChange, placeholder }) => {
  return (
    <>
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      ></textarea>
    </>
  );
};

export default Textarea;
