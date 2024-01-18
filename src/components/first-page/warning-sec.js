import React from 'react';

const WarningSec = () => {
    return (
        <span className="mb-[24px] bg-warning justify-between items-center bg-rose-200 flex gap-5 px-6 py-1.5 rounded-lg max-md:flex-wrap max-md:px-5">
      <div className="text-zinc-800 text-base font-bold leading-5 tracking-tight grow shrink basis-auto my-auto">
        Complete your Influence Readiness Test
      </div>
      <span className="justify-between items-stretch self-stretch flex gap-2.5 px-3 py-2 rounded-[70px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d00bbe96ad4e76f354569c466c6368fbe8a17c3f84b86728bc79450c9ffdd910?apiKey=854b1295ef754afa80d463882b8719fe&"
          className="aspect-square object-contain object-center w-3 justify-center items-center overflow-hidden shrink-0 max-w-full"
        />
        <div className="text-zinc-800 text-center text-sm font-semibold leading-4 tracking-tight grow whitespace-nowrap self-start">
          Readiness test
        </div>
      </span>
    </span>
    );
}

export  {WarningSec};
