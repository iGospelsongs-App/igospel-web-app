import React, { useState } from "react";
import { AiFillCaretRight } from "react-icons/ai";
import { sidebarMenuData } from "../../data";
import { MenuItem, SubMenuItem } from "../../types";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const [submenuStates, setSubmenuStates] = useState<Record<number, boolean>>({});
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleSubmenu = (index: number) => {
    setSubmenuStates((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="pt-20 w-[220px] flex">
      <ul>
        {sidebarMenuData.map((item: MenuItem, i: number) => (
          <div key={i}>
            {item.subMenus ? (
              <li
                className={`flex rounded-md py-2 px-10 cursor-pointer text-black text-sm items-center gap-x-0 ${item.gap ? "mt-9" : "mt-2"}`}
                onClick={() => item.subMenus && toggleSubmenu(i)}
              >
                <img alt="" src={item.icon}/>
                <span className="flex-1 text-sm font-sf-reg">{item.title}</span>
                {item.subMenus && (
                  <AiFillCaretRight className={`${submenuStates[i] ? "rotate-90" : ""}`} />
                )}
              </li>
            ) : (
              <NavLink
                style={({ isActive }) => (isActive ? { backgroundColor: "#181818" } : {})}
                onClick={() => handleItemClick(i)}
                to={item.src}
                className={`flex rounded-md py-2 pr-10 pl-[20px] mx-3 hover:bg-[#2b2b2b] cursor-pointer text-white text-sm items-center justify-start gap-x-7 ${item.gap ? "mt-9" : "mt-2"}`}
              >
                <img alt="" src={item.icon} className="w-6 h-6" />
                <span className="flex-1 font-sf-reg text-sm">{item.title}</span>
              </NavLink>
            )}
            {item.subMenus && submenuStates[i] && (
              <ul>
                {item.subMenus.map((subItem: SubMenuItem, j: number) => (
                  <li
                    key={j}
                    className="flex cursor-pointer px-5 text-center text-sm text-gray-500 py-1 ml-14 font-sf-reg"
                  >
                    {subItem.title}
                  </li>
                ))}
              </ul>
            )}
            {item.iconP && (
              <div className="-mt-7 ml-[10.5rem] absolute underline">
                <img alt="" src={item.iconP} />
              </div>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
