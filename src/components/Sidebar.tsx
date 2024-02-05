import React, { useContext, useState } from 'react';
import { AiFillCaretRight } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { sidebarMenuData } from '../data/DummyData';
import { MenuItem, SubMenuItem } from '../types';
import hamburger from '../assets/images/hamburger.svg'
import Logo from '../assets/images/logo.svg'
import { SidebarContext } from '../context/sidebarContext';

function Sidebar() {
    const [submenuStates, setSubmenuStates] = useState<Record<number, boolean>>({});
    const {switchSidebar, isOpen} = useContext(SidebarContext);

    const toggleSubmenu = (index: number) => {
        setSubmenuStates((prev: any) => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const handleOpenSidebar = () => {
        switchSidebar();
    }

    return (
        <div className=''>
            <div className='pl-[30px] pt-5 flex items-center gap-4'>
                <img src={hamburger} alt="" className='w-[27px] h-[27px] cursor-pointer' onClick={handleOpenSidebar} />
                <img src={Logo} alt="" className='w-[110px] h-[50px]' />
            </div>
            <ul className="pt-6">
                {
                    sidebarMenuData.map((item: MenuItem, i: number) => (
                        <>
                            {item.subMenus ? (
                                <li
                                    className={`flex rounded-md py-2 px-10 cursor-pointer text-black text-sm items-center gap-x-4 ${item.gap ? 'mt-9' : 'mt-2'}`}
                                    onClick={() => item.subMenus && toggleSubmenu(i)}
                                >
                                    <img alt="" src={item.icon} />
                                    <span className="flex-1 text-sm font-sf-reg">{item.title}</span>
                                    {item.subMenus && (
                                        <AiFillCaretRight className={`${submenuStates[i] ? 'rotate-90' : ''}`} />
                                    )}
                                </li>
                            ) : (
                                <Link to={item.src} className={`flex rounded-md py-2 pr-10 pl-[30px] cursor-pointer text-white text-sm items-center gap-x-4 ${item.gap ? 'mt-9' : 'mt-2'}`}>
                                    <img alt="" src={item.icon} className='w-6 h-6' />
                                    <span className="flex-1 font-sf-reg text-sm">{item.title}</span>
                                </Link>
                            )}
                            {
                                item.subMenus && submenuStates[i] && (
                                    <ul>
                                        {item.subMenus.map((subItem: SubMenuItem, i: number) => (
                                            <li key={i} className='flex cursor-pointer px-5 text-center text-sm text-gray-500 py-1 ml-14 font-sf-reg'>
                                                {subItem.title}
                                            </li>
                                        ))}
                                    </ul>
                                )
                            }
                        </>
                    ))
                }
            </ul>
        </div>
    )
}

export default Sidebar