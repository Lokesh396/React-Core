import React from "react";

const Shimmer = () => {
  return (
    <>
      <div className="flex gap-5 flex-wrap">
        {Array.from({ length: 15 }).map((_, index) => (
          <div className="bg-gray-100 h-[450px] w-50" key={index}></div>
        ))}
      </div>
    </>
  );
};

export default Shimmer;
