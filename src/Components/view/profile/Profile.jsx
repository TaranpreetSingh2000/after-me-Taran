import React, { useEffect, useState } from "react";
import Title from "../../UI/title/Title";
import useTable from "../../services/useTable";
import style from "./Profile.module.css";
import profile from "../../../assets/profile.png";
import { SocialIcon } from "react-social-icons";

const Profile = () => {
  const [fetchedData, setFetchedData] = useState("");
  const [isAuth, setIsAuth] = useState(false);

  const { data } = useTable("http://localhost:8090/api/v1/user");
  debugger;

  useEffect(() => {
    const fetchedAccessToken = sessionStorage.getItem("accessToken");
    const storedToken = localStorage.getItem("token");

    if (fetchedAccessToken) {
      setIsAuth(!!fetchedAccessToken);
    } else if (storedToken) {
      setIsAuth(!!storedToken);
    } else {
      setIsAuth(false);
    }
  }, [isAuth]);
  useEffect(() => {
    setFetchedData(data);
  }, [data]);
  return (
    <>
      <div className="container my-5">
        <Title title="My Account Details" />
        {isAuth ? (
          isAuth && (
            <div className={`${style.accountdetails} my-3 col-md-8`}>
              <div className={`${style.leftsection}`}>
                <div className="logosection mb-3 p-3">
                  <img src={profile} className={style.profileimg} alt="" />
                </div>
                {/* <div className="socialshare">
                  <h6 className={`text-center ${style.socialheading}`}>
                    Profile Links
                  </h6>

                  <div className="socialicons">
                <SocialIcon url="https://facebook.com" />
                <SocialIcon url="https://instagram.com" />
                <SocialIcon url="https://whatsapp.com" />
                <SocialIcon url="https://linkedin.com" />
              </div> 
                </div> */}
              </div>

              <div className="profilesection ">
                {fetchedData &&
                  fetchedData.map((item, index) => (
                    <div className={`${style.card} mb-3`} key={index}>
                      <div className={`card-body ${style.cardBody}`}>
                        <p className={`card-text ${style.cardText}`}>
                          Name: {item.hofName}
                        </p>
                        <p className={`card-text ${style.cardText}`}>
                          Mobile: {item.hofMobile}
                        </p>
                        <p className={`card-text ${style.cardText}`}>
                          Email: {item.hofEmail}
                        </p>
                        <p className={`card-text ${style.cardText}`}>
                          DOB: {item.hofDateOfbirth}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )
        ) : (
          <p>No Information Found</p>
        )}
      </div>
    </>
  );
};

export default Profile;
