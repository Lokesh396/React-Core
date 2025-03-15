import React, { useState } from "react";
import RestaruantCard from "./RestarauntCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import useRestaranutList from "../utils/hooks/useRestaranutList";

const Body = () => {
  const restaruantList = useRestaranutList();
  const [filteredRestaraunts, setFilteredRestaraunts] = useState([]);
  const [SearchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();
  console.log(onlineStatus);

  return onlineStatus === false ? (
    <h1>Oops! Please check your internet connection</h1>
  ) : restaruantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="w-4/5 mx-auto">
      <div className="flex gap-2 my-3 w-8/12 items-center mx-auto">
        <div className="w-8/12">
          <input
            className="focus:ring-1 rounded-l-lg px-3 py-1  bg-slate-100 w-9/12"
            type="text"
            placeholder="Search"
            value={SearchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="cursor-pointer px-3 py-1 bg-orange-400 text-white rounded-r-lg"
            onClick={() => {
              let filtered = restaruantList.filter((res) =>
                res.info.name.toLowerCase().includes(SearchText.toLowerCase())
              );
              setFilteredRestaraunts(filtered);
            }}
          >
            Search
          </button>
        </div>
        <div className="w-4/12">
          <button
            className="cursor-pointer px-3 py-1 bg-orange-400 text-white rounded-lg"
            onClick={() => {
              let filtered = restaruantList.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaraunts(filtered);
            }}
          >
            Top Rated Restaraunts
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-5 items-stretch">
        {filteredRestaraunts.length > 0
          ? filteredRestaraunts.map((res) => (
              <Link to={"/restaraunt/" + res.info.id} key={res.info.id}>
                <RestaruantCard resData={res} />
              </Link>
            ))
          : restaruantList.map((res) => (
              <Link to={"/restaraunt/" + res.info.id} key={res.info.id}>
                <RestaruantCard resData={res} />
              </Link>
            ))}
      </div>
    </div>
  );
};

export default Body;
