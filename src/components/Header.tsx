import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setNavbarScroll, switchSidebar } from "../redux/features/sidebarSlice.ts";
import searchIcon from "../assets/images/search.svg";
import notifIcon from "../assets/images/notif.svg";
import dp from "../assets/images/dp.svg";
import hamburger from "../assets/images/hamburger.svg";
import Logo from "../assets/images/logo.svg";

function Header() {
  const isMobile = window.innerWidth <= 768;
  const { isOpen, isScroll } = useSelector((state: any) => state.sidebar);
  const dispatch = useDispatch();

  window.addEventListener("scroll", () => {
    const isScrolled = window.scrollY >= 10;
    dispatch(setNavbarScroll(isScrolled));
  });

  const handleOpenSidebar = () => {
    dispatch(switchSidebar());
  };

  return (
    <div>
      <div
        className={`flex items-center justify-between px-2 sm:px-5 gap-2  ${isScroll && "bg-black border-b-[1px] border-b-[#323232]"}`}
      >
        <div className={`flex flex-1 items-center ${isOpen && !isMobile ? "gap-14" : "gap-5"} `}>
          {/* header here  */}
          <div className={`min-w-[90px] z-10 ${!isOpen && "bg-transparent"} text-white`}>
            <div className="pt-5 pb-[28px] flex items-center space-x-3">
              <div onClick={handleOpenSidebar} role="presentation">
                <img src={hamburger} alt="" className="w-[27px] h-[27px] cursor-pointer" />
              </div>
              <img src={Logo} alt="" className="w-[110px]" />
            </div>
          </div>

          {/* search bar */}
          <div className={`flex-1 ml-3 ${isMobile && "hidden"}`}>
            <div className="flex max-w-[300px] items-center border-[1px] border-[#98A2B3] bg-white bg-opacity-5 px-2 py-[5px] rounded-lg">
              <img src={searchIcon} alt="" className="w-[14px] mr-1" />
              <input
                type="text"
                className="outline-none text-xs w-full font-sf-reg bg-transparent text-white py-1"
                placeholder="Search songs, albums, artists, sermons"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* search icon for mobile here   */}
          {isMobile && (
            <div>
              <img src={searchIcon} alt="" className="w-[20px] mr-1" />
            </div>
          )}
          {/* notification icon    */}
          <div>
            <img src={notifIcon} alt="" className="w-8" />
          </div>
          {/* profile icon  */}
          <div>
            <img src={dp} alt="" className="w-8" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
