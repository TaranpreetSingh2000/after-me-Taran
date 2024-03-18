import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = (props) => {
  const [isAuth, setIsAuth] = useState(false);
  const { Component } = props;
  const navigate = useNavigate();

  useEffect(() => {
    const isLogin = sessionStorage.getItem("accessToken");
    const fetchedForgetId = sessionStorage.getItem("forgetId");

    if (fetchedForgetId) {
      setIsAuth(true);
    } else if (isLogin) {
      setIsAuth(true);
    } else {
      navigate("/login");
      setIsAuth(false);
    }
  }, []);

  return (
    <>
      {isAuth && (
        <div>
          <Component />
        </div>
      )}
    </>
  );
};

export default Protected;
