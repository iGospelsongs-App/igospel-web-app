import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { sidebarMenuData } from "../../data";
import { MenuItem } from "../../types";

function SidebarClosed() {
  return (
    <div className="pt-20 w-[90px]">
      <ul className="">
        {sidebarMenuData.map((item: MenuItem, i: number) => (
          <div key={i} className="w-full">
            <NavLink
              to={item.src}
              className={`flex flex-col w-[90px] rounded-md py-2 pr-10 pl-[25px] items-center justify-center cursor-pointer text-white text-sm`}
            >
              <img alt="" src={item.icon} className="w-6 h-6" />
              <span className="flex-1 font-sf-reg text-[11px] text-center">{item.title}</span>
            </NavLink>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default SidebarClosed;
