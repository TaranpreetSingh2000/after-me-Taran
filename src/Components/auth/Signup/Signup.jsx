import React, { useState } from "react";
import style from "../AuthStyle/Auth.module.css";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import validateInput from "../../regex/validateInput";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Label, SelectField, Input, Title } from "../../UI/index";

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [validationErrors, setValidationErrors] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
  });

  const [formData, setFormData] = useState({
    userName: "",
    name: "",
    email: "",
    dateOfBirth: "",
    password: "",
    mobile: "",
  });

  const handleChange = (e) => {
    debugger;
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    const { name, value } = e.target;
    let error = validateInput(name, value);
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value === "" ? "" : error,
    }));
  };

  const handleSignup = async (e) => {
    debugger;
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8090/api/v1/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Signup Successfully!!! Redirecting to Login page");
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } else {
        console.error("Signup failed");
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleGoogleLoginSuccess = (credentialResponse) => {
    const credentailResponseDecoded = jwtDecode(credentialResponse.credential);
    const givenName = credentailResponseDecoded.given_name;
    const picture = credentailResponseDecoded.picture;
    console.log(credentailResponseDecoded);

    navigate("/strapidata", { state: { picture, givenName } });
  };

  return (
    <>
      <ToastContainer autoClose={3000} />
      <div className="login module d-flex justify-content-center align-items-center 100-w my-5">
        <div className={`${style.form_container} rounded `}>
          <form onSubmit={handleSignup}>
            <div
              className={`${style.mainFormHeader} d-flex justify-content-between my-2`}
            >
              <h3 className="header-title">Create the Account</h3>
              <span className={style.rightHeaderPanel}>
                Already registered?
                <Link to="/login">Login In</Link>
              </span>
            </div>

            <div className="mb-2">
              <Label htmlFor="name" label="Username" />
              <span className="text-danger px-1">*</span>
              <Input
                type="text"
                name="userName"
                placeholder="Username"
                className="form-control"
                onChange={handleChange}
                required={true}
              />
            </div>

            <div className="mb-2">
              <Label htmlFor="name" label="Name" />
              <span className="text-danger px-1">*</span>
              <Input
                type="text"
                name="name"
                placeholder="Name"
                className="form-control"
                onChange={handleChange}
                errorMessage={validationErrors.name}
                errorClassName="is-invalid"
                required={true}
              />
            </div>

            <div className="mb-2">
              <Label htmlFor="dob" label="Date of Birth" />
              <span className="text-danger px-1">*</span>
              <Input
                type="date"
                className="form-control"
                name="dateOfBirth"
                onChange={handleChange}
                required={true}
              />
            </div>

            <div className="mb-2">
              <Label htmlFor="mobile" label="Mobile" />
              <span className="text-danger px-1">*</span>
              <Input
                type="text"
                name="mobile"
                placeholder="Mobile Number"
                className="form-control"
                onChange={handleChange}
                errorMessage={validationErrors.mobile}
                errorClassName="is-invalid"
                required={true}
              />
            </div>

            <div className="mb-2">
              <Label htmlFor="email" label="Email" />
              <span className="text-danger px-1">*</span>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                className="form-control"
                onChange={handleChange}
                errorMessage={validationErrors.email}
                errorClassName="is-invalid"
                required={true}
              />
            </div>

            <div className="mb-2">
              <Label htmlFor="password" label="Password" />
              <span className="text-danger px-1">*</span>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                className="form-control"
                onChange={handleChange}
                errorMessage={validationErrors.password}
                errorClassName="is-invalid"
                required={true}
              />
              <div className="input-group-btn my-2">
                <input
                  type="checkbox"
                  name="toggle"
                  className="custom-control custom-checkbox"
                  onChange={togglePassword}
                />
                <Label htmlFor="showpassword" label="Show Password" />
              </div>
            </div>

            <div className="d-grid">
              <button
                type="submit"
                className={`btn btn-primary ${style.signupbtn}`}
              >
                Sign Up
              </button>
            </div>

            <p className="text-center my-3">
              <small
                className={`d-flex align-items-center ${style.choiceMark}`}
              >
                OR
              </small>
            </p>
            <div className="d-flex flex-direction-column justify-content-center align-items-center">
              <GoogleLogin
                onSuccess={handleGoogleLoginSuccess}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
