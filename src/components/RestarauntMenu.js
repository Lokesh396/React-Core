import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { RESTARANUT_MENU_API } from "../utils/constants";

const RestarauntMenu = () => {
  const { resId } = useParams();
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      console.log(RESTARANUT_MENU_API + resId);
      let result = await fetch(RESTARANUT_MENU_API + resId);
      result = await result.json();
      setMenuData(result);
    };
    fetchData();
  }, []);

  if (!menuData) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    menuData?.data?.cards?.[2]?.card?.card?.info;
  const { itemCards } =
    menuData?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[1].card
      .card;
  return (
    <>
      <div className="menu-container">
        <h5>{name}</h5>
        <p>
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        <legend>Recommended</legend>
        {itemCards?.map((item) => (
          <div key={item.card.info.id}>
            <h5>
              {item.card?.info?.name} -{" "}
              {item.card?.info?.ratings?.aggregatedRating?.rating} - Rs.
              {item.card?.info?.price / 100}
            </h5>
            <p>{item.card?.info?.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default RestarauntMenu;
