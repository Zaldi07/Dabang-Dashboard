import React from "react";
import { NavLink } from "react-router-dom";
export const NavSmall = () => {
  const links = [
    { id: 1, text: "Dashboard", path: "/", icon: <ion-icon name="pie-chart-outline"></ion-icon> },
    { id: 2, text: "LearderBoard", path: "all-jobs", icon: <ion-icon name="podium-outline"></ion-icon> },
    { id: 3, text: "Product", path: "add-job", icon: <ion-icon name="podium-outline"></ion-icon> },
    { id: 4, text: "Sales Report", path: "profile", icon: <ion-icon name="podium-outline"></ion-icon> },
    { id: 5, text: "Messages", path: "profile", icon: <ion-icon name="podium-outline"></ion-icon> },
    { id: 6, text: "Setting", path: "profile", icon: <ion-icon name="settings-outline"></ion-icon> },
    { id: 7, text: "Sign Out", path: "profile", icon: <ion-icon name="log-out-outline"></ion-icon> },
  ];
  return (
    <div className={"h-full min-h-screen w-[250px] md:block hidden pl-10 ml-0 "}>
      <button>
        <div className="flex flex-col items-start gap-6 ">
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
                <div className="flex  ] w-[170px] py-2  item-center px-4 gap-5  hover:bg-[#5D5FEF] rounded-2xl group duration-500">
                  <span className="text-2xl text-[#737791]  group-hover:text-white">{icon}</span>
                  <h1 className="text-[#737791] font-lg group-hover:text-white">{text}</h1>
                </div>
              </NavLink>
            );
          })}
        </div>
      </button>
    </div>
  );
};
