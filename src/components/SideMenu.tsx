import { Bars3Icon } from '@heroicons/react/24/outline';
import React, { Component } from 'react';
interface ISideMenu {
    setSidebarCollapsed: (a:any)=>void;
}
const SideMenu = ({setSidebarCollapsed} : ISideMenu)=> {
    return (
        <div className="bg-black text-white relative">
            <button className="absolute bg-gray-600 rounded" style={{right: "-10px", top: "50%"}} onClick={() => setSidebarCollapsed((prev: any) => !prev)}>
                <Bars3Icon className="w-10 h-10" />
            
            </button>
        <div className='border-b' >Logo</div>
        <div>Home</div>
        <div>Appointment</div>
        <div>Messages</div>
        <div>Contacts</div>
        <div>Data Analytics</div>
        <div>Subscription</div>
        <div>Health Center</div>
        <div>Settings</div>

        <div className='border-t'>Footer</div>
      </div>
    );
}

export default SideMenu;