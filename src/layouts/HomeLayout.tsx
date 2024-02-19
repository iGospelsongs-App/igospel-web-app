import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import { useSelector, useDispatch } from 'react-redux';
import { setNavbarScroll, switchSidebar } from '../redux/features/sidebarSlice';
import Sidebar from '../components/sidebar/Sidebar';
import SidebarClosed from '../components/sidebar/SidebarClosed';

function HomeLayout() {
    const isMobile = window.innerWidth <= 768;
    const { isOpen, isScroll } = useSelector((state: any) => state.sidebar)
    const dispatch = useDispatch();

    return (
        <div className='bg-gradient-to-br from-[#291317] via-transparent to-black'>
            {/* <div className=''>
                <div className={`w-full overflow-x-hidden relative ${!isOpen && isMobile ? 'ml-[80px]' : (isOpen && isMobile) ? 'ml-[52px]' : 'ml-[220px]'} ${isOpen && 'pl-0'}`}>
                    <div className={`mb-4 ${isScroll && 'bg-black'} sticky top-[0px] pt-5 pb-5 w-full ${isOpen && 'pl-7'}`}>
                        <Header />
                    </div>
                    <div className={`h-[800px] ${isOpen && 'pl-7'} pr-7`}>
                      <Outlet />  
                    </div>
                </div>
            </div> */}

            <div>
                {/* header  */}
                <div className='fixed right-0 w-full top-0 z-10'>
                   <Header /> 
                </div>

                <div>
                    {/* sidbar here */}
                    <div className={`${(!isOpen && !isScroll) ? 'bg-transparent' : ''} h-[100vh] fixed overflow-auto bg-black`}>
                        {
                            isOpen ? <Sidebar /> : <SidebarClosed />
                        }
                    </div>

                    {/* outlet here  */}
                    <div className={`ml-[220px] px-5 pt-20 ${!isOpen && !isMobile ? 'ml-[180px]' : !isOpen && isMobile ? 'ml-[90px]' : (isOpen && isMobile) ? 'ml-[90px]' : 'ml-[220px]'}`}>
                        <Outlet />
                    </div>
                </div>

            </div>
        </div>

    )
}

export default HomeLayout