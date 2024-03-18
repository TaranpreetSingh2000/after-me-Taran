import { useEffect, useState } from "react";
import { initOTPless } from "../utils/initOtpless";
import { useNavigate } from "react-router-dom";

function OTPWatsapp() {
  useEffect(() => initOTPless(handleOtplessData), []);
  const navigate = useNavigate();
  const handleOtplessData = (otplessUser) => {
    localStorage.setItem("token", otplessUser.token);
    navigate("/strapidata");
  };

  return <div id="otpless-login-page"></div>;
}
export default OTPWatsapp;
