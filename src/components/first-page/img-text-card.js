import React from 'react';

const ImgTextCard = () => {
    return (
        <div className="bg-muted justify-end items-stretch bg-white flex max-w-[223px] flex-col p-4 rounded-lg absolute left-4 bottom-4">
      <div className="text-danger text-red-600 text-xs font-black leading-3 tracking-tight uppercase">
        New course
      </div>
      <div className="text-zinc-800 text-base font-bold leading-5 tracking-tight whitespace-nowrap mt-2">
        Social media strategy
      </div>
      <div className="text-zinc-800 text-sm font-medium leading-5 tracking-tight mt-2">
        Learn how to leverage your social media following to create a community
        and increase your reach.
      </div>
      <div className="text-slate-800 text-center text-sm font-semibold leading-4 tracking-tight justify-center items-stretch border border-[color:var(--Brand-Colours-Navy-blue-200,#273249)] mt-2 px-3 py-2.5 rounded-[70px] border-solid">
        Learn more
      </div>
    </div>
    );
}

export  {ImgTextCard};
