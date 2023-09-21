import React from "react";
import { Total } from "./Chart.js/ReveneuChart";

const Reveneu = () => {
  return (
    <div className="p-4 rounded-2xl bg-white lg:col-span-4 h-[300px]">
      <h1 className="text-xl font-semibold">Total Reveneu</h1>
      <Total />
    </div>
  );
};

export default Reveneu;
