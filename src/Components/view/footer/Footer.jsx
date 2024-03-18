import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faYoutube,
  faGooglePlus,
} from "@fortawesome/free-brands-svg-icons";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-white pt-5 pb-4">
        <div className="container text text-md-left">
          <div className="row text-center text-md-left">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                Company Name
              </h5>
              <p>
                Ayasya is a very strong player in a vibrant Information
                Technology Arena with continuous changes and challenges. Ayasya
                Digital Solutions has been one company which always has absorbed
                all the shifting requirements in the market and has come up with
                corresponding solutions right from the year 2010.
              </p>
            </div>
            <div
              className={`col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 ${style.links}`}
            >
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                Products
              </h5>
              <p>
                <a href="#" className="text-white">
                  The providers
                </a>
              </p>
              <p>
                <a href="#" className="text-white">
                  Creativity
                </a>
              </p>

              <p>
                <a href="#" className="text-white">
                  SourceFiles
                </a>
              </p>

              <p>
                <a href="#" className="text-white">
                  Bootstrap 5
                </a>
              </p>
            </div>

            <div
              className={`col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 ${style.links}`}
            >
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                Useful links
              </h5>
              <p>
                <a href="#" className="text-white">
                  Your Account
                </a>
              </p>
              <p>
                <a href="#" className="text-white">
                  Become an Affiliates
                </a>
              </p>

              <p>
                <a href="#" className="text-white">
                  Shipping Rates
                </a>
              </p>

              <p>
                <a href="#" className="text-white">
                  Help
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                Contact-us
              </h5>
              <p>
                <i className="fas fa-home mr-3"></i> New Yourk, NY 2333.US
              </p>
              <p>
                <i className="fas fa-envelope mr-3"></i> providers@gmail.com
              </p>

              <p>
                <i className="fas fa-phone mr-3"></i> +92 90234887471
              </p>

              <p>
                <i className="fas fa-print mr-3"></i> +01 355 6557
              </p>
            </div>
          </div>

          <hr className="row align-items-center" />
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 text-center">
                <p>Copyright @ 2024 After Me All Right Reserved.</p>
              </div>
            </div>
          </div>

          <div className="container-fluid">
            <div className="row">
              <div className="col-12 text-center">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <a href="#" className="btn-floating btn-sm text-white">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </li>

                  <li className="list-inline-item">
                    <a href="#" className="btn-floating btn-sm text-white">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </li>

                  <li className="list-inline-item">
                    <a href="#" className="btn-floating btn-sm text-white">
                      <FontAwesomeIcon icon={faGooglePlus} />
                    </a>
                  </li>

                  <li className="list-inline-item">
                    <a href="#" className="btn-floating btn-sm text-white">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </li>

                  <li className="list-inline-item">
                    <a href="#" className="btn-floating btn-sm text-white">
                      <FontAwesomeIcon icon={faYoutube} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
