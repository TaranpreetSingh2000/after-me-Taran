import React, { useState } from "react";
import { Label, SelectField } from "../../UI/index";
import { useNavigate } from "react-router-dom";

const DocumentDetails = () => {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState("");

  const documentDetails = {
    passport: { path: "passportdetails", title: "Passport Details" },
    pancard: { path: "pandetails", title: "Pan Card Details" },
    aadhar: { path: "aadhardetails", title: "Aadhar Card - UID Details" },
    voterid: { path: "electionid", title: "Election Identity Card - Details" },
    licence: { path: "drivinglicence", title: "Driving Licence Details" },
  };

  const navigatePage = documentDetails[selectedValue];
  if (navigatePage) {
    navigate("/commonroute/" + navigatePage.path, {
      state: navigatePage.title,
    });
  }

  return (
    <>
      <div className="documentdetails">
        <div className="container my-5">
          <div className="form-group col-md-3 my-3">
            <Label htmlFor="documenttype" label="Select the Document type" />
            <span className="text-danger px-2">*</span>{" "}
            <SelectField
              name="user"
              value={selectedValue}
              onChange={(e) => {
                setSelectedValue(e.target.value);
              }}
              required={true}
              options={[
                { label: "Select", value: "" },
                { label: "Passport", value: "passport" },
                { label: "Pan card", value: "pancard" },
                { label: "Aadhar card", value: "aadhar" },
                { label: "Voter Id", value: "voterid" },
                { label: "Driving Licence", value: "licence" },
                { label: "Club Membership", value: "clubmembership" },
                { label: "Vehicle RC", value: "vehiclerc" },
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DocumentDetails;
