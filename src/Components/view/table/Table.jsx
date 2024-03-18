import React, { useEffect, useState } from "react";
import useTable from "../../services/useTable";
import { SelectField } from "../../UI/index";
import TableHeaders from "./TableHeaders";
import * as api from "../../utils/api";
import { ClipLoader } from "react-spinners";

const Table = ({ trimmedcardtitle }) => {
  const [selectedValue, setSelectedValue] = useState("familyDoctors");
  const [fetchedData, setFetchedData] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = api.determineUrl(trimmedcardtitle);
  const { data: fetchedDataResponse } = useTable(url);

  debugger;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (fetchedDataResponse && fetchedDataResponse.length > 0) {
        setFetchedData(fetchedDataResponse);
        setLoading(false);
      } else {
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [fetchedDataResponse, trimmedcardtitle]);

  return (
    <>
      {trimmedcardtitle === "Ready Reference" && (
        <div className="form-group col-md-3 my-3 mx-4">
          <SelectField
            name="selectedfieldvalue"
            value={selectedValue}
            onChange={(e) => {
              setSelectedValue(e.target.value);
            }}
            required={true}
            options={[
              { label: "Family Doctor", value: "familyDoctors" },
              { label: "Special Doctor", value: "specialDoctors" },
              { label: "hospitals", value: "hospitals" },
              { label: "Tax Consultant", value: "taxConsultants" },
              { label: "Stock Broker", value: "stockBrokers" },
              { label: "Insurance Agent", value: "insuranceAgents" },
            ]}
          />
        </div>
      )}
      <div className={`table-container mb-3 px-4`}>
        {loading ? (
          <div className="text-center my-2">
            <ClipLoader color="#0F1BC5" size={60} />
          </div>
        ) : fetchedData.length > 0 ? (
          <>
            <TableHeaders
              trimmedcardtitle={trimmedcardtitle}
              fetchedData={fetchedData}
              selectedValue={selectedValue}
            />
          </>
        ) : (
          <p className="text-center my-2">No Data Available</p>
        )}
      </div>
    </>
  );
};

export default Table;
