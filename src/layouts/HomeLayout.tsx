import React, { useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { SidebarContext } from '../context/sidebarContext';
import Sidebar from '../components/sidebar/Sidebar';
import hamburger from '../assets/images/hamburger.svg'
import Logo from '../assets/images/logo.svg'
import SidebarClosed from '../components/sidebar/SidebarClosed';
import Header from '../components/Header';

function HomeLayout() {
    const sidebarIsOpen = useContext(SidebarContext);
    const { switchSidebar, isOpen, isScroll } = useContext(SidebarContext);
    const isMobile = window.innerWidth <= 768;

    const handleOpenSidebar = () => {
        switchSidebar();
    }

    return (
        <div className='bg-gradient-to-br from-[#291317] via-transparent to-black'>
            <div className='flex items-start'>
                <div className={`w-[220px] ${!isOpen && 'bg-transparent'} h-[100vh] fixed overflow-auto bg-black text-white`}>
                    <div className={`pl-[30px] ${(!isOpen && isScroll) && 'bg-black'} pt-5 pb-[28px] flex items-center gap-4`}>
                        <img src={hamburger} alt="" className='w-[27px] h-[27px] cursor-pointer' onClick={handleOpenSidebar} />
                        <img src={Logo} alt="" className={`w-[110px] ${!isOpen && isMobile ? 'hidden' : ''}`} />
                    </div>
                    <div className={`${(!isOpen && !isScroll) ? 'bg-transparent' : ''}`}>
                        {
                            isOpen ? <Sidebar /> : <SidebarClosed />
                        }
                    </div>
                </div>


                <div className={`w-full relative ${!isOpen && isMobile ? 'ml-[80px]' : (isOpen && isMobile) ? 'ml-[52px]' : 'ml-[220px]'} ${isOpen && 'pl-0'}`}>
                    <div className={`mb-4 ${isScroll && 'bg-black'} sticky top-[0px] pt-5 pb-5 w-full ${isOpen && 'pl-7'}`}>
                        <Header />
                    </div>
                    <div className='h-[800px]'>
                      <Outlet />  
                    </div>
                    
                </div>
            </div>

        </div>

    )
}

export default HomeLayout