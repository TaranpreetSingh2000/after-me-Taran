import React, { useState } from "react";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { auth } from "./Firebase";
import { useNavigate } from "react-router-dom";

const Otplogin = () => {
  const navigate = useNavigate();

  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [isActive, setIsActive] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    name === "mobile" ? setMobile(value) : setOtp(value);
  };

  const configureCaptcha = () => {
    const auth = getAuth();

    window.recaptchaVerifier = new RecaptchaVerifier(auth, "sign-in-button", {
      size: "invisible",
      callback: (response) => {
        onSignInSubmit();
        console.log("Recaptcha Verified");
      },
      defaultCountry: "IN",
    });
  };

  const onSignInSubmit = (e) => {
    e.preventDefault();
    configureCaptcha();
    const phoneNumber = "+91" + mobile;
    console.log(phoneNumber);

    const appVerifier = window.recaptchaVerifier;

    const auth = getAuth();
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        console.log("OTP has been sent");
        alert("OTP has been sent to your mobile number");
        setIsActive(true);
      })
      .catch((error) => {
        console.log("SMS not sent");
      });
  };

  const onSubmitOTP = (e) => {
    e.preventDefault();
    const code = otp;
    console.log(code);
    window.confirmationResult
      .confirm(code)
      .then((result) => {
        const user = result.user;
        const userObject = user;
        console.log(userObject);
        const otpnumber = userObject.phoneNumber;
        alert("Login Successful");
        navigate("/strapidata", { state: { otpnumber } });
      })
      .catch((error) => {
        alert("Invalid OTP");
      });
  };

  return (
    <div className="loginModule d-flex justify-content-center align-items-center 100-w my-5 ">
      <div className="form_container otp p-5 rounded">
        <h5 className="text-center">Enter your mobile number</h5>

        <form onSubmit={onSignInSubmit}>
          <div id="sign-in-button"></div>
          <input
            type="number"
            name="mobile"
            placeholder="Enter your number"
            className="form-control"
            required
            value={mobile}
            onChange={handleChange}
          />
          <button type="submit" className="form-control my-2" id="mobilelogin">
            Submit
          </button>
        </form>

        {isActive && (
          <form onSubmit={onSubmitOTP}>
            <h5 className="text-center my-3">Enter OTP</h5>
            <input
              type="password"
              name="otp"
              placeholder="Enter the otp"
              className="form-control"
              required
              value={otp}
              onChange={handleChange}
            />
            <button type="submit" className="form-control my-2" id="otpverify">
              Verify
            </button>
            <p>
              If you didn't receive a code !!! <b>RESEND</b>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default Otplogin;
