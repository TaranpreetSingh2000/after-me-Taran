import React, { useEffect, useState } from "react";
import style from "../AuthStyle/Auth.module.css";
import { useNavigate } from "react-router-dom";
import validateInput from "../../regex/validateInput";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Label, Input } from "../../UI/index";

const UpdatePassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [passwordType, setPasswordType] = useState("password");
  const [confirmpasswordType, setConfirmPasswordType] = useState("password");
  const [validationErrors, setValidationErrors] = useState({
    password: "",
    confirmpassword: "",
  });

  const togglePasswordVisibility = (inputName) => {
    if (inputName === "password") {
      setPasswordType((prevType) =>
        prevType === "password" ? "text" : "password"
      );
    } else if (inputName === "confirmpassword") {
      setConfirmPasswordType((prevType) =>
        prevType === "password" ? "text" : "password"
      );
    }
  };

  useEffect(() => {
    window.addEventListener("popstate", async () => {
      debugger;
      if (window.location.pathname !== "/updatepassword") {
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
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let error = validateInput(name, value);
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value === "" ? "" : error,
    }));

    if (name === "password") {
      setPassword(value);
    } else {
      setConfirmPassword(value);
    }
  };

  const handleSubmitCheck = async (e) => {
    e.preventDefault();
    if (password === confirmpassword) {
      const forgetId = sessionStorage.getItem("forgetId");

      const UpdateData = {
        userId: forgetId,
        password: password,
      };

      try {
        const response = await fetch(
          "http://localhost:8090/api/v1/user/updatePassword",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(UpdateData),
          }
        );

        if (response.ok) {
          debugger;
          toast.success("Password Updated Successfully");
          setTimeout(() => {
            sessionStorage.removeItem("forgetId");
            navigate("/login");
          }, 3000);
        } else {
          alert();
          console.log("Password not updated");
        }
      } catch (error) {
        console.error("Error during update the password:", error);
      }
    } else {
      setError("Passwords do not match");
    }
  };

  return (
    <>
      <ToastContainer autoClose={3000} />
      <div className="loginModule d-flex justify-content-center align-items-center 100-w my-5">
        <div className={`${style.form_container} otp p-5 rounded `}>
          <form onSubmit={handleSubmitCheck}>
            <div className="form-group">
              <Label htmlFor="password" label=" Enter your New Password" />
              <span className="text-danger px-1">*</span>
              <Input
                type={passwordType}
                placeholder="New Password"
                name="password"
                className="form-control"
                onChange={handleChange}
                value={password}
                errorMessage={validationErrors.password}
                errorClassName="is-invalid"
                required={true}
              />
              <div className="input-group-btn my-2">
                <input
                  type="checkbox"
                  name="toggle"
                  className="custom-control custom-checkbox"
                  id=""
                  onChange={() => togglePasswordVisibility("password")}
                />
                <Label htmlFor="showpassword" label="Show Password" />
              </div>
            </div>

            <div className="form-group my-3">
              <Label
                htmlFor="confirmpassword"
                label="Enter your Confirm Password"
              />
              <span className="text-danger px-1">*</span>
              <Input
                type={confirmpasswordType}
                placeholder="Confirm Password"
                name="confirmpassword"
                className="form-control"
                onChange={handleChange}
                value={confirmpassword}
                errorMessage={validationErrors.confirmpassword}
                errorClassName="is-invalid"
                required={true}
              />
              <div className="input-group-btn my-2">
                <input
                  type="checkbox"
                  name="toggle"
                  className="custom-control custom-checkbox"
                  id=""
                  onChange={() => togglePasswordVisibility("confirmpassword")}
                />
                <Label htmlFor="showpassword" label="Show Password" />
              </div>
            </div>
            {error && <p className="text-danger">{error}</p>}

            <button
              type="submit"
              className={`form-control my-2 ${style.mobilelogin}`}
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdatePassword;
