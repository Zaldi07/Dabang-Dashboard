import React from "react";
import icon from "../asset/Icon(1).png";
import icon2 from "../asset/Icon(2).png";
import icon3 from "../asset/Icon(3).png";
import icon4 from "../asset/Icon(4).png";
const TodaySales = () => {
  return (
    <div className="px-6 py-2 rounded-2xl bg-white flex flex-col gap-4  lg:col-span-6">
      <div className="flex items-start justify-between pt-2">
        <div>
          <h1 className="text-xl font-semibold">Today Sales</h1>
          <p className="pt-3 text-[#737791] text-base">Sales Summary</p>
        </div>
        <button className="flex items-center  border-2 p-1 rounded-lg">
          <span className="text-xl">
            <ion-icon name="download-outline"></ion-icon>
          </span>
          export
        </button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 ">
        <div className="bg-[#FFE2E5] rounded-2xl  p-3">
          <img src={icon} alt="" />
          <h1 className="text-2xl font-semibold pt-2">$1k</h1>
          <h1 className="text-base font-medium">Total Sales</h1>
          <h1 className="text-[#4079ED] text-xs pt-2">+8% from yesterday</h1>
        </div>
        <div className="bg-[#FFF4DE] rounded-2xl  p-3">
          <img src={icon2} alt="" />
          <h1 className="text-2xl font-semibold pt-2">300</h1>
          <h1 className="text-base font-medium">Total Order</h1>
          <h1 className="text-[#4079ED] text-xs pt-2">+5% from yesterday</h1>
        </div>
        <div className="bg-[#DCFCE7] rounded-2xl  p-3">
          <img src={icon3} alt="" />
          <h1 className="text-2xl font-semibold pt-2">8</h1>
          <h1 className="text-base font-medium">Product Sold</h1>
          <h1 className="text-[#4079ED] text-xs pt-2">+1,2% from yesterday</h1>
        </div>
        <div className="bg-[#F3E8FF]  rounded-2xl   p-3">
          <img src={icon4} alt="" />
          <h1 className="text-2xl font-semibold pt-2">5</h1>
          <h1 className="text-base font-medium">New Customers</h1>
          <h1 className="text-[#4079ED] text-xs pt-2">0,5% from yesterday</h1>
        </div>
      </div>
    </div>
  );
};

export default TodaySales;
