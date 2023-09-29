import React, { Component } from 'react';

const InformationDetailsWrapper = () => {
    return (
        <div className='basis-1/4 border-l text-xs'>
          {/* client picture */}
          <div className='flex gap-5 p-5 border-b '>
            <div>
              Picture
            </div>
            <div>
              <div>
                Name
              </div>
              <div>
                Client
              </div>
            </div>
          </div>
          {/* Contact Information */}
          <div className='p-5 border-b'>
           
            <div>Contact Information</div>
            <div className='flex gap-4'>
              <div>Email</div>
              <div>chrissielee@gmail.com</div>
            </div>
           
           
            <div className='flex gap-4'>
              <div>Phone</div>
              <div>chrissielee@gmail.com</div>
            </div>
            
            <div className='flex gap-4'>
              <div>Address</div>
              <div>chrissielee@gmail.com</div>
            </div>
          </div>

           {/* Clinic Details*/}
           <div className='p-5 border-b'>
           
           <div>Clinic Details</div>
           <div className='flex gap-5'>
            <div>
              Picture
            </div>
            <div>
              <div>
                Name
              </div>
              <div>
                Client
              </div>
            </div>
          </div>
           <div className='flex gap-4'>
             <div>Email</div>
             <div>chrissielee@gmail.com</div>
           </div>
          
          
           <div className='flex gap-4'>
             <div>Phone</div>
             <div>chrissielee@gmail.com</div>
           </div>
           
           <div className='flex gap-4'>
             <div>Address</div>
             <div>chrissielee@gmail.com</div>
           </div>
         </div>

          {/* Pet Details*/}
          <div className='p-5 border-b'>
           
           <div>Pet Details</div>
           <div className='flex gap-5'>
            <div>
              Picture
            </div>
            <div>
              <div>
                Name
              </div>
              <div>
                Client
              </div>
            </div>
          </div>
           <div className='flex gap-4'>
             <div>Email</div>
             <div>chrissielee@gmail.com</div>
           </div>
          
          
           <div className='flex gap-4'>
             <div>Phone</div>
             <div>chrissielee@gmail.com</div>
           </div>
           
           <div className='flex gap-4'>
             <div>Address</div>
             <div>chrissielee@gmail.com</div>
           </div>
         </div>
         <div className='p-5'>
          <button type="submit" className="mb-3 inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>Reschedule Appointment
            </button>
            <button type="submit" className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>Cancel Appointment
            </button>
            </div>
        </div>
    );
}

export default InformationDetailsWrapper;