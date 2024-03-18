import React from "react";
import image from "../../../assets/5220.jpg";
import style from "./Home.module.css";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <>
      <div className="row d-flex justify-content-center align-items-center m-4">
        <div className={`col-6 col-lg-6 ${style.columnwidthcontainer}`}>
          <div
            className={`pl-35 d-flex flex-column gap-3 ${style.bannerinnercontainer}`}
          >
            <h1 className={style.fontchangetext}>
              Explore your
              <span className={style.innerbannertext}> one Stop Solution </span>
              for your{" "}
              <Typewriter
                options={{
                  strings: ["Every Form Needs..."],
                  autoStart: true,
                  loop: true,
                }}
              />{" "}
            </h1>

            <a className={`btn-main ${style.button}`} id="main" href="">
              Know More
            </a>
          </div>
        </div>

        <div className="col-6">
          <img src={image} className={style.bannerimage} />
        </div>
      </div>
    </>
  );
};

export default Home;
