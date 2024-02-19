import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import { useSelector } from 'react-redux';
import Sidebar from '../components/sidebar/Sidebar';
import SidebarClosed from '../components/sidebar/SidebarClosed';

function HomeLayout() {
    const isMobile = window.innerWidth <= 768;
    const isSmallScreen = window.innerWidth <= 640;
    const { isOpen, isScroll } = useSelector((state: any) => state.sidebar)

    return (
        <div className='bg-gradient-to-br from-[#291317] via-transparent to-black'>
            <div>
                {/* header  */}
                <div className='fixed right-0 w-full top-0 z-10'>
                   <Header /> 
                </div>

                <div>
                    {/* sidbar here */}
                    <div className={`${(!isOpen && !isScroll) ? 'bg-transparent' : ''} h-[100vh] fixed overflow-auto bg-black`}>
                        {
                            isOpen ? <Sidebar /> : !isSmallScreen && <SidebarClosed />
                        }
                    </div>

                    {/* outlet here  */}
                    <div className={`ml-[220px] pl-5 pr-7 pt-20 ${isSmallScreen ? 'ml-0' : !isOpen && !isMobile ? 'ml-[180px]' : !isOpen && isMobile ? 'ml-[90px]' : (isOpen && isMobile) ? 'ml-[90px]' : 'ml-[220px]'}`}>
                        <Outlet />
                    </div>
                </div>

            </div>
        </div>

    )
}

export default HomeLayout