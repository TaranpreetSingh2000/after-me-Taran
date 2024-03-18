import React, { useRef } from "react";
import Footer from "../view/footer/Footer";
import { Outlet } from "react-router-dom";
import Chatbot from "../chatbot/Chatbot";
import Header from "../view/navbar/Header";
import GoTop from "../UI/gotop/GoTop";

const Layout = () => {
  const refScrollUp = useRef();
  return (
    <>
      <Header />
      <div ref={refScrollUp}></div>
      <Outlet />
      <Chatbot />
      <GoTop />
      <Footer />
    </>
  );
};

export default Layout;
