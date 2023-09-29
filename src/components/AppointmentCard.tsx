import React, { Component } from 'react';
interface IAppointment {
    index: number
}
const StartAppointment = ({index} : IAppointment) => {
    return (
        <>
            <div className="text-xs text-black-500 flex" key={index} >
                <div className="border-r border-b w-1/6 text-center flex justify-center items-center h-20"></div> 
                {/* 1 hour */}
                <div className='w-full '>
                    <div className="border-l border-t border-r border-indigo-800 bg-indigo-200  mt-3 mx-3 rounded-ss-md rounded-se-md " id={`contentLayer-${index + 1}`}>Start</div>
                   
                    <div className="border-l border-r border-indigo-800 bg-indigo-200   mx-3 h-5" id={`contentLayer-${index + 1}`}>Middle</div>
                   
                    <div className="border-l border-b border-r border-indigo-800 bg-indigo-200   mb-2 mx-3 rounded-es-md rounded-ee-md  " id={`contentLayer-${index + 1}`}>End</div>
                </div>
                {/* bottom half hour */}
                <div className='w-full pt-[2.11rem] hidden'>
                    <div className="border-l border-t border-r border-indigo-800 bg-indigo-200  mt-2 mx-3 rounded-ss-md rounded-se-md " id={`contentLayer-${index + 1}`}>Start</div>
                    
                    <div className="border-l border-r border-indigo-800 bg-indigo-200   mx-3 h-5" id={`contentLayer-${index + 1}`}>Middle</div>
                     
                </div>
                {/* upper half hour */}
                <div className='w-full hidden'>
                    <div className="border-l border-r border-indigo-800 bg-indigo-200  mx-3" id={`contentLayer-${index + 1}`}>Middle</div>
                     
                    <div className="border-l border-b border-r border-indigo-800 bg-indigo-200 mx-3 rounded-es-md rounded-ee-md" id={`contentLayer-${index + 1}`}>End</div>
                     
                </div>
                {/* whole middle hour */}
                <div className='w-full hidden'>
                    <div className="border-l border-r border-indigo-800 bg-indigo-200  mx-3 h-20" id={`contentLayer-${index + 1}`}>Middle</div>
                     
                     
                </div>
            </div>
             
        </> 
        
    );
}

export default StartAppointment;