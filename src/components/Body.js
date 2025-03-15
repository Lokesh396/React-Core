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
    <div className="body">
      <div className="filter">
        <div>
          <input
            type="text"
            placeholder="Search"
            value={SearchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              let filtered = restaruantList.filter((res) =>
                res.info.name.toLowerCase().includes(SearchText.toLowerCase())
              );
              setFilteredRestaraunts(filtered);
            }}
            className="search-btn"
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="filter-btn"
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

      <div className="res-container">
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
