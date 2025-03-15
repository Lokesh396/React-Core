import { useState, useEffect } from "react";

import { RESTARANUT_MENU_API } from "../constants";
const useRestaranutMenu = (resId) => {
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let result = await fetch(RESTARANUT_MENU_API + resId);
      result = await result.json();
      setMenuData(result);
    };
    fetchData();
  }, []);

  return menuData;
};

export default useRestaranutMenu;
