import React, { useEffect, useState } from "react";

const useTable = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    debugger;
    const fetchData = async () => {
      const getAccessToken = sessionStorage.getItem("accessToken");
      const getUserId = sessionStorage.getItem("userId");

      const FormData = {
        userId: getUserId,
      };

      try {
        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getAccessToken}`,
        };
        const response = await fetch(url, {
          method: "POST",
          headers,
          body: JSON.stringify(FormData),
        });

        if (response.ok) {
          let data = await response.json();
          setData(data);
        } else {
          console.log("Error in fetching the data");
        }
      } catch (error) {
        console.error("Error during fetching:", error);
      }
    };

    fetchData();
  }, [url]);

  return { data };
};

export default useTable;
