import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { SidebarContext } from '../context/sidebarContext';
import Sidebar from '../components/Sidebar';

function HomeLayout() {
    const sidebarIsOpen = useContext(SidebarContext);

    return (
        <div className=''>
            <div className='flex items-start'>
                <div className={`w-[213px] ${!sidebarIsOpen.isOpen && 'w-[60px]'} h-[100vh] fixed overflow-auto text-white`}>
                    <Sidebar />
                </div>
                <div className='bg-black w-full h-screen bg-gradient-to-br from-[#291317] via-transparent to-black ml-[270px]'>
                    {/* header here  */}
                    <Outlet />
                </div>
            </div>
            
        </div>

    )
}

export default HomeLayout