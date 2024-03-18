import React, { useEffect, useState } from "react";
import style from "../AuthStyle/Auth.module.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Label, SelectField, Input, Title } from "../../UI/index";

const OtpPage = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(null);
  const [counter, setCounter] = useState(300);
  const [redirectpage, setRedirdectPage] = useState(false);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    if (counter <= 0) {
      setRedirdectPage(true);
    } else {
      return () => clearInterval(timer);
    }
  }, [counter]);

  useEffect(() => {
    window.addEventListener("popstate", async () => {
      debugger;
      if (window.location.pathname !== "/otppage") {
        const forgetId = sessionStorage.getItem("forgetId");
        const DeleteOtpData = {
          userId: forgetId,
        };

        try {
          const response = await fetch(
            "http://localhost:8090/api/v1/user/delotp",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(DeleteOtpData),
            }
          );

          if (response.ok) {
            alert("Enter your mobile number again!!");
            sessionStorage.removeItem("forgetId");
            navigate("/forgototp");
          } else {
            setError("Error!!");
          }
        } catch (error) {
          console.error("Error:", error);
        }
      }
    });
  }, [otp]);

  useEffect(() => {
    const handleBeforeUnload = async (e) => {
      debugger;
      if (!otp) {
        e.preventDefault();
        const forgetId = sessionStorage.getItem("forgetId");
        const DeleteOtpData = {
          userId: forgetId,
        };

        try {
          const response = await fetch(
            "http://localhost:8090/api/v1/user/delotp",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(DeleteOtpData),
            }
          );

          if (response.ok) {
            alert("Enter your mobile number again!!");
            sessionStorage.removeItem("forgetId");
            navigate("/forgototp");
          } else {
            setError("Error!!");
          }
        } catch (error) {
          console.error("Error:", error);
        }
        e.returnValue = "";
        return "Redirecting back to forgot page";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [otp]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const handleDeleteOTP = async () => {
    debugger;
    const forgetId = sessionStorage.getItem("forgetId");
    const DeleteOtpData = {
      userId: forgetId,
    };

    try {
      const response = await fetch("http://localhost:8090/api/v1/user/delotp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(DeleteOtpData),
      });

      if (response.ok) {
        alert("Enter your mobile number again!!");
        sessionStorage.removeItem("forgetId");
        navigate("/forgototp");
      } else {
        setError("Error!!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();

    const forgetId = sessionStorage.getItem("forgetId");
    const VerifyOtpData = {
      userId: forgetId,
      otpValue: otp,
    };

    try {
      const response = await fetch(
        "http://localhost:8090/api/v1/user/otpverify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(VerifyOtpData),
        }
      );

      if (response.ok) {
        toast.success("OTP verified Successfully!!");
        setTimeout(() => {
          navigate("/updatepassword");
        }, 3000);
      } else {
        setError("Invalid OTP!!!");
      }
    } catch (error) {
      console.error("Error during otp verification:", error);
    }
  };
  return (
    <>
      <ToastContainer autoClose={3000} />
      <div className="loginModule d-flex justify-content-center align-items-center 100-w my-5">
        <div className={`${style.form_container} otp rounded `}>
          <h6 className={`${style.otpVerifier} my-3`}>
            Enter 6 digits OTP <span className="text-danger px-1">*</span>
          </h6>
          <form onSubmit={handleOtpSubmit}>
            <div id="sign-in-button"></div>
            <Input
              type="password"
              name="otp"
              placeholder="Enter OTP"
              className="form-control"
              onChange={(e) => setOtp(e.target.value)}
              value={otp}
              required={true}
            />
            {error && <p className="text-danger my-2">{error}</p>}

            <div className={`${style.expireotp} my-3`}>
              {redirectpage ? (
                <Link to="/forgototp" onClick={handleDeleteOTP}>
                  Resend OTP
                </Link>
              ) : (
                <p className={style.expireotp}>
                  Your OTP will Expire in {formatTime(counter)}
                </p>
              )}
            </div>
            <button
              type="submit"
              className={`form-control my-2 ${style.mobilelogin}`}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default OtpPage;
