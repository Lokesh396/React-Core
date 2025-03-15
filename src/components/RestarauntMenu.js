import React from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaranutMenu from "../utils/hooks/useRestarauntMenu";
import { Clock, Star } from "lucide-react";
import { RESTARAUNT_MEDIA_URL } from "../utils/constants";
const RestarauntMenu = () => {
  const { resId } = useParams();
  const menuData = useRestaranutMenu(resId);

  if (!menuData) return <Shimmer />;
  const {
    name,
    cuisines,
    costForTwoMessage,
    totalRatingsString,
    avgRating,
    sla,
    areaName,
  } = menuData?.data?.cards?.[2]?.card?.card?.info;
  const { itemCards } =
    menuData?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[1].card
      .card;
  return (
    <>
      <div className="w-1/2 mx-auto mt-5">
        <h1 className="font-bold text-2xl">{name}</h1>
        <div className="border rounded-lg p-4 my-4 shadow-2xl flex flex-col gap-3">
          <h4 className="flex items-center font-bold">
            <Star color="green" width={30} /> {avgRating}
            {`(${totalRatingsString})`} -{costForTwoMessage}
          </h4>
          <p className="text-orange-500 font-bold underline">
            {cuisines.join(", ")}
          </p>
          <p className="flex gap-1">
            <Clock color="black" width={16} />
            {sla?.deliveryTime}mns -{" "}
            <span className="text-slate-500">{areaName}</span>
          </p>
        </div>
        <legend className="text-2xl font-bold mt-10 mb-4">
          Recommended({itemCards.length})
        </legend>
        {itemCards?.map((item) => (
          <div key={item.card.info.id}>
            <div className="mb-5 flex gap-3 justify-between">
              <div className="flex flex-col gap-3">
                <h5 className="font-semibold">{item.card?.info?.name}</h5>
                <p>
                  Rs.
                  {item.card?.info?.price / 100}
                </p>
                <p className="flex">
                  <Star color="green" width={20}></Star>
                  {item.card?.info?.ratings?.aggregatedRating?.rating}
                </p>
                <p className="text-slate-500">{item.card?.info?.description}</p>
              </div>
              <div>
                <img
                  className="rounded-lg max-w-60"
                  src={RESTARAUNT_MEDIA_URL + item.card.info.imageId}
                  alt="dish"
                />
              </div>
            </div>
            <hr className="my-5 text-slate-300"></hr>
          </div>
        ))}
      </div>
    </>
  );
};

export default RestarauntMenu;
