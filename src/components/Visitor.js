import React from "react";
import { Visitor } from "./Chart.js/VisitorChart";

const VisitorPage = () => {
  return (
    <div className="p-4 rounded-2xl bg-white lg:col-span-4">
      <h1 className="text-xl font-semibold">Visitor</h1>
      <Visitor />
    </div>
  );
};

export default VisitorPage;
