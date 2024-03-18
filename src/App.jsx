import React, { useEffect } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import Protected from "./Components/services/Protected.jsx";
import {
  Route,
  BrowserRouter as Router,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import {
  Signup,
  Login,
  ForgotOtp,
  UpdatePassword,
  OtpPage,
} from "../../afterme-frontend/src/Components/auth/index.js";
import {
  PersonalInformation,
  MedicalHistory,
  Personsclosetoheart,
  ReadyReference,
  DocumentDetails,
  InsuranceDetails,
  MediClaimPolicy,
  VehicleInformation,
  FireDetails,
  LoanDetails,
  DepositDetails,
  Shares,
  OnlineTradingDetails,
  MutualFundsDetails,
  CreditorDebit,
  DebtLiabilities,
  WalletDetails,
  AccidentInsuranceDetails,
  MeterDetails,
  AmcWarranty,
  BankAccounts,
  MandatesDetails,
  Lockers,
  ProvidentFund,
  PensionDetails,
  AtmDebitDetails,
  CreditDetails,
  PanDetails,
  PassportDetails,
  GasAgencyDetails,
  GasPipelineDetails,
  LandlineDetails,
  DrivingLicence,
  RationDetails,
  AadharDetails,
  ElectionIdDetails,
  HouseProperty,
  IncomeTax,
  ImportantDates,
  ClubMemberDetails, LocationOfDocuments, VehicleRCDetails
} from "../../afterme-frontend/src/Components/view/forms/index.js";
import Strapidata from "./Components/strapidata/Strapidata.jsx";
import Layout from "./Components/layout/Layout.jsx";
import Home from "./Components/view/home/Home.jsx";
import OTPWatsapp from "./Components/pages/OTPWatsapp.jsx";
import Profile from "./Components/view/profile/Profile.jsx";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import CommonRouteForm from "./Components/view/table/CommonRouteForm.jsx";

const App = () => {
  const client = new ApolloClient({
    uri: "http://localhost:1337/graphql",
    cache: new InMemoryCache(),
  });

  useEffect(() => {
    document.addEventListener("keydown", function (event) {
      if (event.key === "Enter" && event.target.nodeName === "INPUT") {
        var form = event.target.form;
        var index = Array.prototype.indexOf.call(form, event.target);
        if (form.elements[index + 1]) {
          form.elements[index + 1].focus();
          event.preventDefault();
        }
      }
    });
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="forgototp" element={<ForgotOtp />} />
        <Route path="otppage" element={<Protected Component={OtpPage} />} />
        <Route
          path="updatepassword"
          element={<Protected Component={UpdatePassword} />}
        />
        <Route path="profile" element={<Profile />} />
        <Route path="signup" element={<Signup />} />
        <Route path="otpwatsapp" element={<OTPWatsapp />} />
        <Route
          path="strapidata"
          element={<Protected Component={Strapidata} />}
        />
        <Route
          path="commonroute"
          element={<Protected Component={CommonRouteForm} />}
        >
          <Route path="personalinformation" element={<PersonalInformation />} />
          <Route path="medicalhistory" element={<MedicalHistory />} />
          <Route path="personsclose" element={<Personsclosetoheart />} />
          <Route path="readyref" element={<ReadyReference />} />
          <Route path="documentdetail" element={<DocumentDetails />} />
          <Route path="insurancedetails" element={<InsuranceDetails />} />
          <Route path="mediclaimpolicy" element={<MediClaimPolicy />} />
          <Route path="vehicleinformation" element={<VehicleInformation />} />
          <Route path="firedetails" element={<FireDetails />} />
          <Route path="accidentdetail" element={<AccidentInsuranceDetails />} />
          <Route path="amcwarranty" element={<AmcWarranty />} />
          <Route path="bankaccount" element={<BankAccounts />} />
          <Route path="mandates" element={<MandatesDetails />} />
          <Route path="loandetail" element={<LoanDetails />} />
          <Route path="depositdetail" element={<DepositDetails />} />
          <Route path="share" element={<Shares />} />
          <Route path="onlinetrading" element={<OnlineTradingDetails />} />
          <Route path="mutualfunds" element={<MutualFundsDetails />} />
          <Route path="creditordebit" element={<CreditorDebit />} />
          <Route path="debtliability" element={<DebtLiabilities />} />
          <Route path="walletdetail" element={<WalletDetails />} />
          <Route path="locker" element={<Lockers />} />
          <Route path="providentfund" element={<ProvidentFund />} />
          <Route path="pensiondetail" element={<PensionDetails />} />
          <Route path="atmdebitdetails" element={<AtmDebitDetails />} />
          <Route path="creditdetails" element={<CreditDetails />} />
          <Route path="pandetails" element={<PanDetails />} />
          <Route path="passportdetails" element={<PassportDetails />} />
          <Route path="meterdetails" element={<MeterDetails />} />
          <Route path="gaspipelinedetails" element={<GasPipelineDetails />} />
          <Route path="gasagencydetails" element={<GasAgencyDetails />} />
          <Route path="landlinedetails" element={<LandlineDetails />} />
          <Route path="drivinglicence" element={<DrivingLicence />} />
          <Route path="rationdetails" element={<RationDetails />} />
          <Route path="aadhardetails" element={<AadharDetails />} />
          <Route path="houseproperty" element={<HouseProperty />} />
          <Route path="electionid" element={<ElectionIdDetails />} />
          <Route path="incometax" element={<IncomeTax />} />
          <Route path="importantdate" element={<ImportantDates />} />
          <Route path="locationdocs" element={<LocationOfDocuments />} />
          <Route path="clubmemberdetails" element={<ClubMemberDetails />} />
          <Route path="vehiclercdetails" element={<VehicleRCDetails />} />
        </Route>
      </Route>
    )
  );
  return (
    <div>
      <ApolloProvider client={client}>
        <RouterProvider router={router} />
      </ApolloProvider>
    </div>
  );
};

export default App;
