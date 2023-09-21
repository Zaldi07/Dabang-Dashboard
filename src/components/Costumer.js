import React from "react";
import { Customer } from "./Chart.js/CostumerService";

const Costumer = () => {
  return (
    <div className="p-4 rounded-2xl bg-white lg:col-span-3   ">
      <h1 className="text-xl font-semibold ">Customer Satisfaction</h1>
      <div className="pt-10">
        <Customer />
      </div>
    </div>
  );
};

export default Costumer;
