import React, { useEffect, useState } from "react";
import TableHeader from "./TableHeader";
import { useLocation, Outlet } from "react-router-dom";

const CommonRouteForm = () => {
  const location = useLocation();
  const { cardTitle } = location.state || {};

  const trimmedcardtitle = cardTitle
    ? cardTitle.trim()
    : null || location.state;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const formPageMap = {
    "Personal Information": "personalinformation",
    "Medical History": "medicalhistory",
    "Person Close to My Heart": "personsclose",
    "Ready Reference": "readyref",
    "Document Details": "documentdetail",
    "Insurence - LIC Policy Details": "insurancedetails",
    "Medi Claim Policy Details": "mediclaimpolicy",
    "Vehicle Insurance Policy Details": "vehicleinformation",
    "Fire/Burglary Insurance Detail": "firedetails",
    "Personal Accidental Insurance Details": "accidentdetail",
    "AMCs and Warranties": "amcwarranty",
    "Bank Accounts": "bankaccount",
    "ECS Mandates Table": "mandates",
    "Loan Account Details": "loandetail",
    "Fixed Deposit/ Recurring Deposit/ Company Deposit": "depositdetail",
    "Shares/ Units/ Debentures/ Bonds: Standing in own name or Jointly with":
      "share",
    "Online Trading Account Details": "onlinetrading",
    "Mutual Funds Details SIPs": "mutualfunds",
    "Creditor/ Debitor": "creditordebit",
    "My Debit/ Liabilities": "debtliability",
    "Wallet Details": "walletdetail",
    Lockers: "locker",
    "Public Provident Fund (PPF)": "providentfund",
    "Pension A/C": "pensiondetail",
    "ATM Debit Card Details": "atmdebitdetails",
    "Credit card Details": "creditdetails",
    "Pan Card Details": "pandetails",
    "Passport Details": "passportdetails",
    "Electricity/ Water Meter Details": "meterdetails",
    "Gas Pipe Line Details": "gaspipelinedetails",
    "Gas Cylinder Agency Service Details": "gasagencydetails",
    "Land Line Details": "landlinedetails",
    "Driving Licence Details": "drivinglicence",
    "Ration Card Details": "rationdetails",
    "Aadhar Card - UID Details": "aadhardetails",
    "House Property": "houseproperty",
    "Election Identity Card - Details": "electionid",
    "Income tax": "incometax",
    "Important dates": "importantdate",
    "Location of Important Documents": "locationdocs",
  };

  return (
    <>
      <TableHeader
        formPageMap={formPageMap}
        trimmedcardtitle={trimmedcardtitle}
      />
      <Outlet />
    </>
  );
};

export default CommonRouteForm;
