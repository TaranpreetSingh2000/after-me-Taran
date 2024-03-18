import React, { useState, useEffect } from "react";
import Table from "./Table";
import style from "./Table.module.css";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "../../UI";

const TableHeader = ({ formPageMap, trimmedcardtitle }) => {
  const navigate = useNavigate();

  const openForm = () => {
    if (trimmedcardtitle) {
      const navigatePage = formPageMap[trimmedcardtitle];
      if (navigatePage) {
        navigate("/commonroute/" + navigatePage, { state: trimmedcardtitle });
      }
    }
  };

  return (
    <>
      <div className="tableHeader">
        <div className={`entries my-4 px-4 ${style.entries}`}>
          <h5 className={style.cardHeadingTitle}>{trimmedcardtitle} Form</h5>

          <div className={`${style.btncontainers}`}>
            {location.pathname === "/commonroute" ? (
              <Button
                type="button"
                className="btn btn-success"
                onClick={openForm}
                title="Add more entries"
              />
            ) : (
              <Link to="/commonroute" state={trimmedcardtitle}>
                <Button
                  type="button"
                  className="btn btn-success"
                  title="Back to Table"
                />
              </Link>
            )}
          </div>
        </div>
      </div>

      {location.pathname === "/commonroute" && (
        <div className="tableMain">
          <Table trimmedcardtitle={trimmedcardtitle} />
        </div>
      )}
    </>
  );
};

export default TableHeader;
