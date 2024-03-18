const baseUrl = "http://localhost:8090/api/v1/";

const urlMap = {
  "Personal Information": "user",
  "Medical History": "medicalHistoryOfHof/get",
  "Person Close to My Heart": "personclose/get",
  "Location of Important Documents": "location-of-imp-docs/get",
  "Ready Reference": "ready-reference/get",
  "Medi Claim Policy Details": "mediclaim-policy/get",
  "Fire/Burglary Insurance Detail": "fire-burglary-insurance/get",
  "Personal Accidental Insurance Details": "personal-accident-ins/get",
  "Bank Accounts": "bankAccount/get",
  "AMCs and Warranties": "amc-warranties/get",
  "Wallet Details": "wallet-details/get",
  "Loan Account Details": "loanAccountDetails/get",
  "Ration Card Details": "ration-card-details/get",
  "Income tax": "income-tax/get",
  "Mutual Funds Details SIPs": "mutualFundDetails/get",
  "ECS Mandates Table": "ecsMandateDetails/get",
  Lockers: "locker/get",
  "Credit card Details": "credit-card-details/get",
  "Pension A/C": "pension/get",
  "Electricity/ Water Meter Details": "electricity-water-meter/get",
  "Land Line Details": "landline/get",
  "Public Provident Fund (PPF)": "public-provident-fund/get",
  "ATM Debit Card Details": "atm-debit-card/get",
  "Gas Cylinder Agency Service Details": "gas-cylinder-agency/get",
  "Gas Pipe Line Details": "gas-pipeline/get",
  "Passport Details": "passport/get",
  "Driving Licence Details": "driving-licence/get",
  "Pan Card Details": "pan-detail/get",
  "Aadhar Card - UID Details": "adhaar-detail/get",
  "Election Identity Card - Details": "voter-detail/get",
  "Document Details": "document-details",
  "Creditor/ Debitor": "creditor-debitor/get",
};

export const determineUrl = (trimmedcardtitle) => {
  const urlPath = urlMap[trimmedcardtitle];
  return urlPath ? `${baseUrl}${urlPath}` : "";
};
