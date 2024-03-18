import React, { useEffect, useState } from "react";
import style from "../AuthStyle/Auth.module.css";
import { useNavigate } from "react-router-dom";
import validateInput from "../../regex/validateInput";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Input } from "../../UI/index";
import { ClipLoader } from "react-spinners";

const ForgotOtp = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const [successmessage, setSuccessMessage] = useState("");
  const [alertmessage, setAlertMessage] = useState("");
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [validationErrors, setValidationErrors] = useState({
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    name === "mobile" ? setMobile(value) : setDateOfBirth(value);

    let error = validateInput(name, value);
    setAlertMessage("");
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value === "" ? "" : error,
    }));
  };

  const handleMobileSubmit = async (e) => {
    debugger;
    e.preventDefault();

    const MobileData = {
      mobile: mobile,
    };

    try {
      debugger;
      const response = await fetch("http://localhost:8090/api/v1/user/mobile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(MobileData),
      });

      if (response.ok) {
        debugger;
        console.log(response);
        setSuccessMessage("Success!! Your mobile number is verified");
        setIsActive(true);
      } else {
        setAlertMessage("Please enter a Valid Phone no");
        setIsActive(false);
        console.log("Please enter valid mobile number!");
      }
    } catch (error) {
      console.error("Error during entering mobile:", error);
    }
  };
  const handleOtpdataSubmit = async (e) => {
    debugger;
    e.preventDefault();

    const OTPData = {
      mobile: mobile,
      dateOfBirth: dateOfBirth,
    };

    setLoading(true);
    try {
      debugger;
      const response = await fetch(
        "http://localhost:8090/api/v1/user/emailotp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(OTPData),
        }
      );

      if (response.ok) {
        debugger;
        console.log(response);
        const data = await response.json();
        const forgetId = data.userId;
        sessionStorage.setItem("forgetId", forgetId);
        toast.success("OTP Sent to your Registered Email Id");
        setTimeout(() => {
          navigate("/otppage");
        }, 3000);
        setLoading(false);
      } else {
        setAlertMessage("Enter valid Date of Birth");
        console.log("Please enter valid date of birth");
        setLoading(false);
      }
    } catch (error) {
      console.error("Error during entering date of birth:", error);
    }
  };

  return (
    <>
      <ToastContainer autoClose={3000} />
      <div className="loginModule d-flex justify-content-center align-items-center 100-w my-5">
        <div className={`${style.form_container} otp rounded `}>
          <h6 className="my-3">
            Enter your mobile number for OTP verification
            <span className="text-danger px-2">*</span>
          </h6>
          <form onSubmit={handleMobileSubmit}>
            <Input
              type="text"
              name="mobile"
              placeholder="Enter your mobile number"
              className="form-control"
              onChange={handleChange}
              errorMessage={validationErrors.mobile}
              errorClassName="is-invalid"
              value={mobile}
              required={true}
              disabled={isActive}
            />
            {successmessage ? (
              successmessage && (
                <p className={`text-success my-2 ${style.successMessage}`}>
                  {successmessage}
                </p>
              )
            ) : (
              <p className={`text-danger my-2 ${style.alertMessage}`}>
                {alertmessage}
              </p>
            )}

            {!isActive && (
              <button
                type="submit"
                className={`form-control my-2 ${style.mobilelogin}`}
              >
                Submit
              </button>
            )}
          </form>
          {isActive && (
            <form onSubmit={handleOtpdataSubmit}>
              <h6 className="my-3">
                Enter your Date of Birth
                <span className="text-danger px-2">*</span>
              </h6>
              <Input
                type="date"
                name="dateOfBirth"
                className="form-control"
                onChange={handleChange}
                value={dateOfBirth}
                required={true}
              />
              {!alertmessage && loading && (
                <ClipLoader color="#36d7b7" className="my-2" />
              )}
              {alertmessage && (
                <p className={`text-danger my-2 ${style.alertMessage}`}>
                  {alertmessage}
                </p>
              )}

              <button
                type="submit"
                className={`form-control my-2 ${style.otpverify}`}
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default ForgotOtp;
