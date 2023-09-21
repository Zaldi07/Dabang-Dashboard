import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../asset/dummy logo(2).png";
import cardimg from "../asset/Get pro.png";
export const SideBar = () => {
  const links = [
    { id: 1, text: "Dashboard", path: "/", icon: <ion-icon name="pie-chart-outline"></ion-icon> },
    { id: 2, text: "LearderBoard", path: "all-jobs", icon: <ion-icon name="podium-outline"></ion-icon> },
    { id: 3, text: "Product", path: "add-job", icon: <ion-icon name="bag-handle-outline"></ion-icon> },
    { id: 4, text: "Sales Report", path: "profile", icon: <ion-icon name="stats-chart-outline"></ion-icon> },
    { id: 5, text: "Messages", path: "profile", icon: <ion-icon name="chatbox-ellipses-outline"></ion-icon> },
    { id: 6, text: "Setting", path: "profile", icon: <ion-icon name="settings-outline"></ion-icon> },
    { id: 7, text: "Sign Out", path: "profile", icon: <ion-icon name="log-out-outline"></ion-icon> },
  ];
  return (
    <div>
      <div className={" w-[280px] md:block hidden pl-10      "}>
        <div className=" h-screen top-0 fixed overflow-y-auto">
          <div>
            <div className="flex items-center py-10 gap-2">
              <img src={logo} alt="" className="w-10" />
              <h1 className="font-bold  text-2xl">Dabang</h1>
            </div>
            <button>
              <div className="flex flex-col items-start gap-6   ">
                {links.map((link) => {
                  const { text, path, id, icon } = link;
                  return (
                    <NavLink
                      to={path}
                      className={({ isActive }) => {
                        return isActive ? "nav-link active  hover:text-white" : "nav-link  ";
                      }}
                      key={id}
                      //   onClick={toggleSideBar}
                    >
                      <button className="flex  ] w-[170px] py-2  focus:bg-[#5D5FEF] focus:text-white item-center px-4 gap-5  text-[#737791]  rounded-2xl group duration-500">
                        <span className="text-2xl   ">{icon}</span>
                        <h1 className="font-lg   ">{text}</h1>
                      </button>
                    </NavLink>
                  );
                })}
              </div>
              <div className="mt-36">
                <img src={cardimg} alt="" className="w-[80%]" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
