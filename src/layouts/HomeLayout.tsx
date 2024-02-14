import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';
import hamburger from '../assets/images/hamburger.svg'
import Logo from '../assets/images/logo.svg'
import SidebarClosed from '../components/sidebar/SidebarClosed';
import Header from '../components/Header';
import { useSelector, useDispatch } from 'react-redux';
import { setNavbarScroll, switchSidebar } from '../redux/features/sidebarSlice';

function HomeLayout() {
    const isMobile = window.innerWidth <= 768;
    const {isOpen, isScroll} = useSelector((state: any) => state.sidebar)
    const dispatch = useDispatch();

    window.addEventListener("scroll", () => {
        const isScrolled = window.scrollY >= 10;
        dispatch(setNavbarScroll(isScrolled));
      });

    const handleOpenSidebar = () => {
        dispatch(switchSidebar());
    }

    return (
        <div className='bg-gradient-to-br from-[#291317] via-transparent to-black'>
            <div className='flex items-start'>
                <div className={`w-[220px] z-10 ${!isOpen && 'bg-transparent'} h-[100vh] fixed overflow-auto bg-black text-white`}>
                    <div className={`pl-[30px] ${(!isOpen && isScroll) && 'bg-black'} ${isScroll && isMobile && !isOpen ? 'w-[80px]' : ''} pt-5 pb-[28px] flex items-center gap-4`}>
                        <img src={hamburger} alt="" className='w-[27px] h-[27px] cursor-pointer' onClick={handleOpenSidebar} />
                        <img src={Logo} alt="" className={`w-[110px] ${!isOpen && isMobile ? 'hidden' : ''}`} />
                    </div>
                    <div className={`${(!isOpen && !isScroll) ? 'bg-transparent' : ''}`}>
                        {
                            isOpen ? <Sidebar /> : <SidebarClosed />
                        }
                    </div>
                </div>


                <div className={`w-full overflow-x-hidden relative ${!isOpen && isMobile ? 'ml-[80px]' : (isOpen && isMobile) ? 'ml-[52px]' : 'ml-[220px]'} ${isOpen && 'pl-0'}`}>
                    <div className={`mb-4 ${isScroll && 'bg-black'} sticky top-[0px] pt-5 pb-5 w-full ${isOpen && 'pl-7'}`}>
                        <Header />
                    </div>
                    <div className={`h-[800px] ${isOpen && 'pl-7'} pr-7`}>
                      <Outlet />  
                    </div>
                    
                </div>
            </div>

        </div>

    )
}

export default HomeLayout