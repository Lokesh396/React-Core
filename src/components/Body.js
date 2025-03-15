import React, { useEffect, useState } from "react";
import RestaruantCard from "./RestarauntCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaruantList, setRestarauntList] = useState([]);
  const [filteredRestaraunts, setFilteredRestaraunts] = useState([]);
  const [SearchText, setSearchText] = useState("");
  const fetchData = async () => {
    try {
      let body = {
        sortAttribute: "relevance",
        isFiltered: false,
        queryId: "seo-data-9a0f3712-f10d-4913-83b8-1eed2624ce05",
        seoParams: {
          apiName: "CityPage",
          brandId: "",
          seoUrl: "www.swiggy.com/city/hyderabad/order-online",
          pageType: "CITY_PAGE",
          businessLine: "FOOD",
        },
        widgetOffset: {
          NewListingView_category_bar_chicletranking_TwoRows: "",
          NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
          Restaurant_Group_WebView_SEO_PB_Theme: "",
          collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: "11",
          inlineFacetFilter: "",
          restaurantCountWidget: "",
        },
        nextOffset: "CJY7ELQ4KICw6OOAnKGiWDDUEDgC",
      };
      let jsonData = await fetch(
        "https://www.swiggy.com/api/seo/getListing?lat=17.425938120298223&lng=78.39342287825744&apiV2=true",
        { method: "POST", body: JSON.stringify(body) }
      );
      jsonData = await jsonData.json();
      setRestarauntList(
        jsonData.data?.success?.cards?.[0]?.card?.card?.gridElements
          ?.infoWithStyle?.restaurants || []
      );
      setFilteredRestaraunts(
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
  return restaruantList.length === 0 ? (
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
        {filteredRestaraunts.map((res) => (
          <Link to={"/restaraunt/" + res.info.id} key={res.info.id}>
            <RestaruantCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
