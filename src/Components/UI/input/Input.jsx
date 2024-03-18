import React from "react";

const Input = ({
  type,
  name,
  className,
  placeholder,
  onChange,
  errorMessage,
  errorClassName,
  required,
  value,
  disabled,
  pattern,
}) => {
  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        className={`${className} ${errorMessage ? errorClassName : ""}`}
        onChange={onChange}
        required={required}
        disabled={disabled}
        pattern={pattern}
      />
      {errorMessage && <div className="invalid-feedback">{errorMessage}</div>}
    </>
  );
};

export default Input;
