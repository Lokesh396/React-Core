import React, { useEffect, useState } from "react";
import RestaruantCard from "./RestarauntCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaruantList, setRestarauntList] = useState([]);

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
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (restaruantList.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        {restaruantList.map((res) => (
          <RestaruantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
