import React, { useState, useEffect } from "react";
import style from "./Header.module.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../../../assets/logo-png.png";
const Header = () => {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(false);
  const [togglebtn, settogglebtn] = useState(false);

  useEffect(() => {
    const fetchedAccessToken = sessionStorage.getItem("accessToken");
    const storedToken = localStorage.getItem("token");

    if (fetchedAccessToken) {
      setIsAuth(!!fetchedAccessToken);
    } else if (storedToken) {
      setIsAuth(!!storedToken);
    }
  });

  const handleLogout = () => {
    debugger;
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("userId");
    localStorage.removeItem("token");
    setIsAuth(false);
    navigate("/login");
  };

  const handleLinkHome = (e) => {
    e.preventDefault();
    setIsAuth(true);
    navigate("/strapidata");
  };

  const handleLoginBtn = () => {
    navigate("/login");
  };

  const togglebtnhandler = () => {
    settogglebtn((prevToggle) => !prevToggle);
  };
  return (
    <>
      <header className="header pt-2">
        <div className="navbar px-3">
          <div className="logo">
            <a
              href="/"
              className="mb-2 mb-lg-0 text-white text-decoration-none"
            >
              {isAuth ? (
                isAuth && (
                  <img
                    src={logo}
                    className={style.logo}
                    onClick={handleLinkHome}
                    alt="Logo"
                    width="150px"
                  />
                )
              ) : (
                <img
                  src={logo}
                  alt="Logo"
                  className={style.logo}
                  width="150px"
                />
              )}
            </a>
          </div>

          <ul className="menu gap-5 pl-5">
            <li className="nav-item ">
              <a href="#" className="nav-link px-2 active">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 ">
                About us
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 ">
                Blogs
              </a>
            </li>
            <li className="dropdown nav-item dropdown">
              <a
                className="nav-link dropbtn"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul className="dropdown-content dropdown-menu p-3 mt-2">
                <li>
                  <a className="dropdown-item" href="#">
                    Track Personal Details
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Upload the details
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Fetch/Upload the documents
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 ">
                Contact-us
              </a>
            </li>
          </ul>

          {isAuth ? (
            <button className="button" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <button className="button" onClick={handleLoginBtn}>
              Login
            </button>
          )}

          <button onClick={togglebtnhandler} className="toggle_btn">
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>

        {togglebtn ? (
          <div className="dropdown_menu">
            <li className="nav-item ">
              <a href="#" className="nav-link px-2 active">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link px-2 ">
                About-us
              </a>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link px-2 ">
                Blogs
              </a>
            </li>

            <li className=" accordion-nav nav-item ">
              <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                  <h2
                    className="accordion-header"
                    id="panelsStayOpen-headingOne"
                  >
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOne"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseOne"
                    >
                      Services
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseOne"
                    className="accordion-collapse collapse "
                    aria-labelledby="panelsStayOpen-headingOne"
                  >
                    <div className="accordion-body">
                      <li>Track Personal Details</li>
                      <li>Upload the details</li>
                      <li>Upload the documents</li>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link px-2 ">
                Contact-us
              </a>
            </li>

            <li>
              {isAuth ? (
                <button className="button" onClick={handleLogout}>
                  Logout
                </button>
              ) : (
                <button className="button" onClick={handleLoginBtn}>
                  Login
                </button>
              )}
            </li>
          </div>
        ) : null}
      </header>
    </>
  );
};

export default Header;
