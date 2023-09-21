import React from "react";
import { Volume } from "./Chart.js/Volume";

const ServiceLevel = () => {
  return (
    <div className="p-4 rounded-2xl bg-white lg:col-span-3">
      <h1 className="text-xl font-semibold">Volume vs Service Level</h1>
      <div className="pt-10">
        <Volume />
      </div>
    </div>
  );
};

export default ServiceLevel;
