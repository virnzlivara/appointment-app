"use client"
import Image from 'next/image'


import classNames from "classnames";
import React, {  useEffect, useRef, useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import ContentWrapper from '@/components/ContentWrapper';
import Header from '@/components/Header';
import InformationDetailsWrapper from '@/components/InformationDetailsWrapper';
import SideMenu from '@/components/SideMenu';

export default function Home() {
  const [collapsed, setSidebarCollapsed] = useState(false);
  

  return (
    <div
      className={classNames({
        // 👇 use grid layout
        "grid min-h-screen": true,
        // 👇 toggle the width of the sidebar depending on the state
        "grid-cols-sidebar": !collapsed,
        "grid-cols-sidebar-collapsed": collapsed,
        // 👇 transition animation classes
        "transition-[grid-template-columns] duration-300 ease-in-out": true,
      })}
    >
      {/* sidebar */}
      <SideMenu setSidebarCollapsed={setSidebarCollapsed}/> 
      {/* content */}
      <div className="text-black h-screen"> 
        <Header/> 
        <div className='flex'>
          <div className='grow'>
          <ContentWrapper /> 
        </div>
        <div className='overflow-y-auto h-[42rem] basis-1/4 border-l'>
          <InformationDetailsWrapper/>
        </div>
        </div>
      </div>
       
        
       
    </div>
  )
}
