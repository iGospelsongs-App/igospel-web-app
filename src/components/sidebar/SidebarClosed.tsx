import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { sidebarMenuData } from '../../data';
import { MenuItem } from '../../types';

function SidebarClosed() {

    return (
        <div className='pt-20'>
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

