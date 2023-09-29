"use client"
import Image from 'next/image'


import classNames from "classnames";
import React, { PropsWithChildren, useEffect, useRef, useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import AppointmentCard from '@/components/AppointmentCard'; 
export default function Home(props: PropsWithChildren) {
  const [collapsed, setSidebarCollapsed] = useState(false);
  const tableRef = useRef<HTMLDivElement>();
  const [rowHeight, setRowHeight] = useState<string>();
  const time = [
    "1:00 AM",
    "2:00 AM",
    "3:00 AM",
    "4:00 AM",
    "5:00 AM",
    "6:00 AM",
    "7:00 AM",
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
    "9:00 PM",
    "10:00 PM",
    "11:00 PM",
    "12:00 AM", 
    
  ]

  useEffect(()=> {
     
    // scroll to 5am
    scrollToDefault();
    getTableHeight(); 
  }, [])

  const scrollToDefault = () => {
    const row4 = document.getElementById("timeslot-5");
    row4 && row4.scrollIntoView();
     
    document.body.scrollIntoView();
  }
   

  const getTableHeight = () => {
    const row4 = document.getElementById("timeslot-5") || 0;
    const height = row4 && row4?.clientHeight * 24; 
    setRowHeight(height.toString() + "px");
  }

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
      <div className="bg-black text-white">
        <button onClick={() => setSidebarCollapsed((prev) => !prev)}>
          <Bars3Icon className="w-10 h-10" />
        </button>
      </div>
      {/* content */}
      <div className="text-black h-screen"> 
         
        <div className='w-100 p-5 border-b border-gray-200 '>

          <form className="flex items-center">   
              <label htmlFor="voice-search" className="sr-only">Search</label>
              <div className="relative w-full  border-gray-300">
                  {/* <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z"/>
                      </svg>
                  </div> */}
                  <input type="text" id="search" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="Search" required/>
                  <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3">
                      <svg className="w-4 h-4 text-gray-400 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                      
                  </button>
              </div>
              <button type="submit" className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>Search
              </button>
              <button type="submit" className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>Search
              </button>
              <button type="submit" className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>Search
              </button>
          </form>


        </div>
        
        <div className=' border-b border-gray-200'>
          <div className='px-5 py-2'>
            <div className='text-sm text-gray-400'>Appointments</div>
              <div className='flex justify-between'>
                <div>June and Button</div>
                <div>
                  <button type="submit" className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                      </svg>New Appointment
                  </button>
                </div> 
              </div> 
              <div className='text-sm text-gray-400'>Date text</div>
            </div>
          </div>


        <div > 
        
          {/* Table */}
          <div ref = {tableRef as React.RefObject<HTMLDivElement>}  className='overflow-y-auto h-[36rem] relative'>
            {time.map((t, i) => {
              return (
                <div className="text-xs text-black-500 flex" key={i} id={`timeslot-${i + 1}`}>
                  <div className="border-r border-b   w-1/6 text-center flex justify-center items-center h-20">{t}</div> 
                  <div className="border-b w-full" id={`content-${i + 1}`}></div>
                </div>
              ) }  )
            }
        <div className='absolute rounded-sm top-0 left-100' style={{height: rowHeight, width: "100%", opacity: "0.5"}}>
          {time.map((t, i) => {
              return (
                // 
                <>
                  <AppointmentCard index={i} key={i}/> 
                </>
              ) }  )
            }
          
           
        </div>
          </div>
        </div> 
        
      </div>
       
        
       
    </div>
  );
}
