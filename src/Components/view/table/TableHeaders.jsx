import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { filterKeys } from "../../utils/utils";
import style from "./Table.module.css";
import tableHeadings from "./TableHeadings";
import { tableCustomStyles } from './tableStyle.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';


const TableHeaders = ({ trimmedcardtitle, fetchedData, selectedValue }) => {
  if (!Array.isArray(fetchedData)) {
    console.error("fetchedData is not an array:", fetchedData);
    return null;
  }

  if (!fetchedData.length) return null;

  console.log(fetchedData)
  let columns = [];
  if (
    trimmedcardtitle === "Personal Information" ||
    trimmedcardtitle === "Ready Reference"
  ) {
    const headings = tableHeadings[trimmedcardtitle];
    columns = headings.map((heading) => ({
      name: heading,
      selector: (row) => row[heading] || "-",
      sortable: true

    }));
  } else {
    const keys = filterKeys(fetchedData[0]);
    columns = keys.map((key) => ({
      name: key,
      selector: (row) => row[key] || "-",
      sortable: true

    }));
  }

  let flattenedData = [];
  let allDetailsData = [];
  if (trimmedcardtitle === 'Ready Reference') {
    flattenedData = fetchedData[0]?.[selectedValue];
  } else if (trimmedcardtitle === 'Personal Information') {
    const mapDetails = (details, prefix) =>
      details.map((item) => ({
        name: item[`${prefix}Name`],
        dateofbirth: item[`${prefix}DateOfbirth`],
        placeofbirth: item[`${prefix}PlaceOfBirth`],
        anniversary: item[`${prefix}Anniversary`],
        email: item[`${prefix}Email`],
        gender: item[`${prefix}Gender`],
        mobile: item[`${prefix}Mobile`],
        educationalQualifications: item[`${prefix}EducationalQualification`],
        emergencyContact: item[`${prefix}EmergencyContact`],
        organizationContact: item[`${prefix}OrganizationContact`],
        bloodgroup: item[`${prefix}BloodGroup`],
      }));

    const hofDetails = mapDetails(fetchedData[0]?.hof, 'hof');
    const spouseDetails = mapDetails(fetchedData[0]?.spouse, 'sp');
    const childDetails = mapDetails(fetchedData[0]?.children, 'ch');

    allDetailsData = [...hofDetails, ...spouseDetails, ...childDetails];
  }

  const ActionsCell = () => (
    <div className="actions d-flex justify-content-center align-items-center">
      <FontAwesomeIcon
        icon={faPenToSquare}
        className={`px-2 ${style.icon}`}
      />
      <FontAwesomeIcon icon={faTrash} className={style.icon} />
    </div>
  );

  columns.push({
    name: 'Actions',
    cell: ActionsCell,
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  });

  return (
    <>
      {trimmedcardtitle === 'Personal Information' && (
        <DataTable
          columns={columns}
          data={allDetailsData}
          pagination
          fixedHeader
          customStyles={tableCustomStyles}
          sort={true}
        />
      )}
      {trimmedcardtitle === 'Ready Reference' && (
        <DataTable
          columns={columns}
          data={flattenedData}
          pagination
          fixedHeader
          customStyles={tableCustomStyles}
          sort={true}
        />
      )}

      {trimmedcardtitle !== 'Personal Information' && trimmedcardtitle !== 'Ready Reference' && (
        <DataTable
          columns={columns}
          data={fetchedData}
          pagination
          fixedHeader
          customStyles={tableCustomStyles}
          sort={true}
        />
      )}
    </>
  );
}

export default TableHeaders;
