import React from 'react';
import { ProgressbarElement } from './progressbar-element';

const Progressbar = ({ progressbarElemnts, currentProgress }) => {
    return (
        <div className='flex w-full flex-wrap  pr-8  pl-4 pb-2 bg-light'>
            <div className='w-full mb-8 mt-2 font-bold'>Influence Readiness Test Progress</div>
            <div className='flex-1 flex flex-wrap mr-4 relative'>

                {
                    progressbarElemnts?.map((el, i) => {
                        return <ProgressbarElement key={i}
                         currentProgress={currentProgress} arrayLength={progressbarElemnts?.length} 
                          element={el} index={i} />
                    })
                }
                <div className=" h-[5px]  w-full  flex">
                    {progressbarElemnts?.map((el, i) => {
                        return <div key={i} className={` ${i > currentProgress - 1 ? 
                            'bg-[#BEC1C8]' :
                            'bg-dark'}  flex-1 h-[5px] ${i === 0 && 'rounded-l-xl'} 
                         ${(i === progressbarElemnts?.length - 1) && 'rounded-r-xl'}  
                          max-md:!hidden`}></div>
                    })}
                </div>
            </div>
            <div className="inline-block max-md:w-full ">
                {(currentProgress / progressbarElemnts?.length * 100).toFixed(0)}
                % completed</div>
        </div>
    );
}

export default Progressbar;
