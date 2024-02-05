import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { SidebarContext } from '../context/sidebarContext';
import Sidebar from '../components/sidebar/Sidebar';
import hamburger from '../assets/images/hamburger.svg'
import Logo from '../assets/images/logo.svg'
import SidebarClosed from '../components/sidebar/SidebarClosed';
import Header from '../components/Header';

function HomeLayout() {
    const sidebarIsOpen = useContext(SidebarContext);
    const { switchSidebar, isOpen } = useContext(SidebarContext);

    const handleOpenSidebar = () => {
        switchSidebar();
    }

    return (
        <div className='bg-gradient-to-br from-[#291317] via-transparent to-black'>
            <div className='flex items-start'>
                <div className={`w-[220px] ${!sidebarIsOpen.isOpen && 'bg-transparent'} h-[100vh] fixed overflow-auto bg-black text-white`}>
                    <div className='pl-[30px] pt-2 flex items-center gap-4'>
                        <img src={hamburger} alt="" className='w-[27px] h-[27px] cursor-pointer' onClick={handleOpenSidebar} />
                        <img src={Logo} alt="" className='w-[110px] h-[50px]' />
                    </div>
                    <div className=''>
                        {
                            isOpen ? <Sidebar /> : <SidebarClosed />
                        }
                    </div>
                </div>


                <div className={`w-full h-screen ml-[220px] ${isOpen && 'pl-7'}`}>
                    <div className={`mt-5 mb-7`}>
                        <Header />
                    </div>

                    <Outlet />
                </div>
            </div>

        </div>

    )
}

export default HomeLayout