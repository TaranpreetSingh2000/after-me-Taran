import React, { useState } from "react";
import style from "../AuthStyle/Auth.module.css";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Icon } from "react-icons-kit";
import { eye } from "react-icons-kit/feather/eye";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { Label, Input } from "../../UI/index";

const Loginfile = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [passwordType, setPasswordType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const togglePassword = () => {
    if (passwordType === "password") {
      setIcon(eye);
      setPasswordType("text");
      return;
    }
    setIcon(eyeOff);
    setPasswordType("password");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "password") {
      setPassword(value);
      if (value === "") {
        setError(null);
      }
    } else if (name === "email") {
      setEmail(value);
    }
  };
  const handleLogin = async (e) => {
    e.preventDefault();

    const loginData = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch("http://localhost:8090/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const data = await response.json();
        const accessToken = data.accessToken;
        const userId = data.userId;
        sessionStorage.setItem("accessToken", accessToken);
        sessionStorage.setItem("userId", userId);
        toast.success("Login Successfully!!");
        setTimeout(() => {
          navigate("/strapidata", { state: { email } });
        }, 3000);
      } else {
        setError("Please enter valid user and password!");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <>
      <ToastContainer autoClose={3000} />
      <div className="login module d-flex justify-content-center align-items-center 100-w my-5">
        <div className={`${style.form_container} rounded `}>
          <form onSubmit={handleLogin} className="needs-validation">
            <div
              className={`${style.mainFormHeader} d-flex justify-content-between`}
            >
              <h3 className="header-title">Login In</h3>
              <span className={style.rightHeaderPanel}>
                "Don't have an account?"
                <Link to="/signup">Sign Up</Link>
              </span>
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
                value={email}
                required={true}
              />
            </div>

            <div className="mb-2">
              <Label htmlFor="password" label="Password" />
              <span className="text-danger px-1">*</span>
              <div className={style.inputWithIcon}>
                <Input
                  type={passwordType}
                  name="password"
                  placeholder="Password"
                  className="form-control"
                  onChange={handleChange}
                  value={password}
                  required={true}
                />
                <span className={style.icon} onClick={togglePassword}>
                  <Icon icon={icon} size={20} />
                </span>
              </div>
              {error && <p className="text-danger my-2">{error}</p>}
            </div>
            <div
              className={`mb-2 d-flex justify-content-between align-items-baseline ${style.remembercheck}`}
            >
              <div className="check">
                <input
                  type="checkbox"
                  className="custom-checkbox-label"
                  id="check"
                />
                <label htmlFor="check" className="form-label ms-2">
                  Remember me
                </label>
              </div>
              <p className="text-end mt-2">
                <Link to="/forgototp" className={style.forgotpwd}>
                  Forgot Password
                </Link>
              </p>
            </div>

            <div className="d-grid">
              <button className={`btn btn-primary p-2 ${style.signinbtn}`}>
                Sign In
              </button>
            </div>
            <p className="text-center my-3">
              <small
                className={`d-flex align-items-center ${style.choiceMark}`}
              >
                OR
              </small>
            </p>

            {/* <div className="text-center mb-2">
              <button type="button" className="form-control" id="otpbtn">
                <Link to="/otplogin">Login with OTP</Link>
              </button>
            </div>

            <p className="text-center my-2">OR</p> */}

            <div className="mb-2">
              <button
                type="button"
                className={`form-control d-flex align-items-center justify-content-center p-2 ${style.watsappbtn}`}
              >
                <img
                  src="https://otpless.com/sdk-assets/whatsapp-filled.svg"
                  loading="lazy"
                  className="mx-1"
                />
                <Link to="/otpwatsapp" className={style.watsappbtntext}>
                  Continue with WhatsApp
                  <span></span>
                </Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Loginfile;
