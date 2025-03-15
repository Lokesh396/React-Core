import React from "react";

const Shimmer = () => {
  return (
    <>
      <div className="flex gap-5 flex-wrap w-4/5 mx-auto mt-10">
        {Array.from({ length: 15 }).map((_, index) => (
          <div className="bg-gray-100 h-[300px] w-71" key={index}></div>
        ))}
      </div>
    </>
  );
};

export default Shimmer;
