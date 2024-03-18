import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useForm = () => {
  const navigate = useNavigate();
  const fetchData = async (url, formdata, trimmedcardtitle) => {
    debugger;
    const token = sessionStorage.getItem("accessToken");
    try {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };

      const response = await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(formdata),
      });

      if (response.ok) {
        const data = await response.json();
        toast.success("Details added successfully!!");
        setTimeout(() => {
          navigate("/commonroute", {
            state: trimmedcardtitle,
          });
        }, 3000);
      } else {
        console.error("User information not added");
      }
    } catch (error) {
      console.error("Error during adding:", error);
    }
  };

  return fetchData;
};

export default useForm;
