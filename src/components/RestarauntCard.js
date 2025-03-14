import { RESTARAUNT_MEDIA_URL } from "../utils/constants";

const RestaruantCard = (props) => {
  const propData = props.resData;
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo } =
    propData.info;
  return (
    <>
      <div className="res-card">
        <img src={RESTARAUNT_MEDIA_URL + cloudinaryImageId} alt="restaruant" />
        <h5>{name}</h5>
        <h6>{cuisines?.join(", ")}</h6>
        <h6>{avgRating}</h6>
        <h6>{costForTwo}</h6>
      </div>
    </>
  );
};

export default RestaruantCard;
