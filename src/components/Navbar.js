import React from "react";
import profile from "../asset/profile.png";
import bahasa from "../asset/text.png";
import { useState } from "react";
import notif from "../asset/Notifications.png";
const Navbar = () => {
  const [open, setopen] = useState(false);
  return (
    <div className="sticky top-0 z-30">
      <div className="grid lg:grid-cols-7 grid-cols-3 justify-between   items-center md:px-4 py-3  px-4  bg-white  w-full">
        <div className="md:col-span-2 pl-2 hidden md:block">
          <h1 className=" hidden lg:block font-bold text-2xl ">
            <button>Dashboard</button>
          </h1>
        </div>

        <div className="lg:col-span-3 md:relative block  pr-3 md:pr-0 ">
          <span className="absolute left-7  top-5 md:top-1 md:left-4 text-[#5D5FEF] text-xl font-medium ">
            <ion-icon name="search-outline"></ion-icon>
          </span>
          <input type="text" className="bg-[#F9FAFB] w-24 md:w-96 rounded-2xl py-1" />
        </div>
        <div className="md:col-span-2 flex md:justify-evenly justify-between  gap-4   items-center ">
          <div className="md:flex items-center hidden">
            <img src={bahasa} alt="" className="w-16 h-6" />
            <select className="bg-white">
              <ion-icon name="chevron-down-outline"></ion-icon>
            </select>
          </div>

          <div className="flex gap-5 md:col-span-3 items-center ">
            <img src={notif} alt="" className="w-[20px] h-[20px] md:w-[40px] md:h-[40px]" />
            <img src={profile} alt="" className="w-[30px] h-[30px] md:w-[60px] md:h-[60px]" />
            <div className="">
              <h1 className="text-base">Musfik</h1>
              <h1 className="text-sm text-[#737791]">Admin</h1>
            </div>
          </div>
          <div className="">
            <ion-icon name="chevron-down-outline"></ion-icon>
          </div>
        </div>
        <div className="md:hidden flex justify-end pr-5 text-2xl">
          <button onClick={() => !open}>
            <ion-icon name="menu-outline"></ion-icon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
