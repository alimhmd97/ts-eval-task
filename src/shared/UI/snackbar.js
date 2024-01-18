import { useEffect, useState } from 'react';

const Snackbar = ({ message, handleClose }) => {

    useEffect(() => {
        // close snack barafter 3 seconds
        if(message){
        setTimeout(() => {
            handleClose('')
        }, 3000);}
    }, [message]);
    // --------------------------------------------------------------------------------------------


  return (
    <div className={`text-light bg-dark fixed bottom-0 right-0 mb-4 mr-4 p-4 bg-gray-800 text-white rounded-md transition-opacity  'opacity-100' }`}>
      <div className="flex items-center justify-between">
        <div>{message}</div>
        <button onClick={handleClose} className="ml-4 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export  {Snackbar};
