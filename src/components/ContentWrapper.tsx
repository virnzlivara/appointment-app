import React, { Component, useEffect, useRef, useState } from 'react';
import AppointmentCard from './AppointmentCard'; 
import veterinarians from '../data/veterinarians.json'
import time from '../data/timeslot.json'

const ContentWrapper = () => {
  const tableRef = useRef<HTMLDivElement>();
  const [rowHeight, setRowHeight] = useState<string>(); 
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
        <div > 
            <div className=' border-b border-gray-200'>
            <div className=''>
                <div className='flex-none'>
                    <div className='px-5 py-2 border-b'>
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
                                    
                                    <AppointmentCard index={i} key={i}/> 
                                    
                                ) }  )
                            }
                            
                            
                        </div> 
                    </div>
                 
            </div>
            </div>
        </div> 
    );
}

export default ContentWrapper;