import React from "react";
import { TargetChart } from "./Chart.js/TargetChart";

const Target = () => {
  return (
    <div className="p-4 rounded-2xl bg-white lg:col-span-3 ">
      <h1 className="text-xl font-semibold">Target vs Reality</h1>

      <div className="pt-10">
        <TargetChart />
      </div>
    </div>
  );
};

export default Target;
