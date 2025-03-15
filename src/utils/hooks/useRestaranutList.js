import { useState, useEffect } from "react";
import { RES_BODY, RESTARAUNT_LIST_API } from "../constants";
const useRestaranutList = () => {
  const [restaruantList, setRestarauntList] = useState([]);
  const fetchData = async () => {
    try {
      let jsonData = await fetch(RESTARAUNT_LIST_API, {
        method: "POST",
        body: JSON.stringify(RES_BODY),
      });
      jsonData = await jsonData.json();
      setRestarauntList(
        jsonData.data?.success?.cards?.[0]?.card?.card?.gridElements
          ?.infoWithStyle?.restaurants || []
      );
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return restaruantList;
};

export default useRestaranutList;
