import React from "react";
import world from "../asset/World.png";
const SalesMapping = () => {
  return (
    <div className="p-4 rounded-2xl bg-white lg:col-span-3">
      <h1 className="text-xl font-semibold">Sales Mapping</h1>
      <div className="pt-10">
        <img src={world} alt="" />
      </div>
    </div>
  );
};

export default SalesMapping;
