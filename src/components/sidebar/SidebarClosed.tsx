import React, { useContext, useState } from 'react';
import { AiFillCaretRight } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { sidebarMenuData } from '../../data';
import { MenuItem, SubMenuItem } from '../../types';
import { SidebarContext } from '../../context/sidebarContext';

function SidebarClosed() {
    const [submenuStates, setSubmenuStates] = useState<Record<number, boolean>>({});
    const { isScroll } = useContext(SidebarContext);

    const toggleSubmenu = (index: number) => {
        setSubmenuStates((prev: any) => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <div className=''>
            <ul className="">
                {
                    sidebarMenuData.map((item: MenuItem, i: number) => (
                        <div key={i}>
                            <Link to={item.src} className={`flex flex-col w-[100px] rounded-md py-2 pr-10 pl-[25px] items-center cursor-pointer text-white text-sm`}>
                                <img alt="" src={item.icon} className='w-6 h-6' />
                                <span className="flex-1 font-sf-reg text-[11px] text-center">{item.title}</span>
                            </Link>
                        </div>
                    ))
                }
            </ul>
        </div>
    )
}

export default SidebarClosed