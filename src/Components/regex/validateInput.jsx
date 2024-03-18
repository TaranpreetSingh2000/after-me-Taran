const validateInput = (name, value) => {
  let error = "";

  switch (name) {
    case "name":
    case "gender":
    case "educationalQualification":
    case "insuranceCompany":
    case "agentname":
    case "familyMember":
    case "vaccinationName":
    case "allergicreaction":
    case "metallicImplant":
    case "lifeSavingMedicine":
    case "nomineeRelationship":
    case "reasonForClose":
    case "tableterm":
    case "namepolicy":
    case "productAndModel":
    case "nominee":
    case "bankName":
    case "branchName":
    case "holdername":
    case "ecsdetail":
    case "walletName":
    case "companyname":
    case "issuingAuthority":
    case "fatherName":
    case "husbandName":
    case "nameOfNominee":
    case "typeofPolicy":
    case "company":
    case "nameOfTheProperty":
    case "operatingInstructions":
    case "specimenSignature":
    case "nameOfInsured":
    case "risksCovered":
    case "companyName":
    case "nomineeName":
    case "fundName":
    case "typeOfLoan":
    case "nameOfTheBorrowers":
    case "ecsFavouring":
    case "inTheNameOf":
    case "nameOfCardHolder":
    case "reactionOfMedicine":
    case "metallicImpact":
    case "symptoms":
    case "sos":
      const nameRegex = /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/;
      error = !value.match(nameRegex)
        ? "This field must contain only alphabetic characters with no extra spaces"
        : "";
      break;

    case "mobile":
    case "emergencyContact":
    case "organizationContact":
    case "agentmobile":
    case "contact":
    case "consumernumber":
    case "attachedMobileNumber":
    case "phoneNum":
    case "phoneNumberForRefillBooking":
    case "linkedContact":
    case "linkedContactNumber":
      const mobileRegex = /^\d{10}$/;
      error = !value.match(mobileRegex) ? `Enter valid mobile number` : "";
      break;

    case "totalGrossIncome":
    case "refundAmountDueIfAny":
      const numberRegex = /^[0-9]*$/;
      error = !value.match(numberRegex) ? `Invalid ${name} value` : "";
      break;

    case "Pancard":
      const panregex = /[A-Z]{5}[0-9]{4}[A-Z]{1}/;
      error = !value.match(panregex) ? `Enter valid ${name} number` : "";
      break;

    case "email":
      const emailregex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
      error = !value.match(emailregex) ? `Enter valid ${name} address` : "";
      break;

    case "password":
    case "loginPassword":
      const passwordregex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.*\s).*$/;
      error = !value.match(passwordregex)
        ? `Your password must be atleast
      8 characters long
      1 uppercase & 1 lowercase character and
      1 number`
        : "";
      break;

    case "confirmpassword":
      const confirmpasswordregex =
        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.*\s).*$/;
      error = !value.match(confirmpasswordregex)
        ? `Your password must be atleast
      8 characters long
      1 uppercase & 1 lowercase character and
      1 number`
        : "";
      break;

    case "licence":
      const licenceregex = /^[A-Z]{2}\d{12}$/;
      error = !value.match(licenceregex) ? `Enter valid ${name} number` : "";
      break;

    case "accountNumber":
    case "lockerNo":
    case "previousPassportDetails":
      const accountregex = /^[a-zA-Z0-9.]*$/;
      error = !value.match(accountregex) ? `Enter valid ${name}` : "";
      break;

    case "passport":
      // case "documentNo":
      const passportregex = /^[A-PR-WY][1-9]\d\s?\d{4}[1-9]$/;
      error = !value.match(passportregex) ? `Enter valid ${name}` : "";
      break;

    case "aadhar":
      const aadharregex = /^[2-9][0-9]{3} [0-9]{4} [0-9]{4}$/;
      error = !value.match(aadharregex) ? `Enter valid ${name} number` : "";
      break;

    case "debitcard":
      const debitcardregex =
        /^((?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12})|(4[0-9]{12}(?:[0-9]{3})?)$/;
      error = !value.match(debitcardregex) ? `Enter valid ${name} number` : "";
      break;
    default:
      break;
  }

  return error;
};

export default validateInput;
