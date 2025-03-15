import { RESTARAUNT_MEDIA_URL } from "../utils/constants";

const RestaruantCard = (props) => {
  const propData = props.resData;
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo } =
    propData.info;
  return (
    <>
      <div className="w-70 bg-gray-100 p-2 rounded-md h-auto hover:scale-95">
        <img
          className="h-40 w-[272px] object-cover rounded-lg"
          src={RESTARAUNT_MEDIA_URL + cloudinaryImageId}
          alt="restaruant"
        />
        <h5 className="font-semibold">{name}</h5>
        <p className="text-slate-500">{cuisines?.join(", ")}</p>
        <h6>{avgRating}</h6>
        <h6>{costForTwo}</h6>
      </div>
    </>
  );
};

export default RestaruantCard;
