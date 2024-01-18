import React from 'react';

const NextStepsCard = () => {
    return (
      <div className="items-start self-stretch bg-white flex max-w-screen-sm flex-col gap-2 w-full md:w-1/2">
      <div className=" text-zinc-800 text-lg font-semibold leading-5 tracking-tight self-stretch w-full max-md:max-w-full">
        Next steps
      </div>
      <div className="bg-muted items-center bg-stone-50 self-stretch flex justify-between gap-2 mt-4 px-4 py-3 rounded-lg max-md:max-w-full max-md:flex-wrap">
        <div className="text-zinc-800 text-sm font-medium leading-5 tracking-tight grow my-auto max-md:max-w-full">
          Complete task________
        </div>
        <div className="text-slate-800 text-center text-sm font-semibold leading-4 tracking-tight whitespace-nowrap justify-center items-stretch border border-[color:var(--Brand-Colours-Navy-blue-200,#273249)] self-stretch px-3 py-2.5 rounded-[70px] border-solid">
          View action plan
        </div>
      </div>
      <div className="bg-muted items-center bg-stone-50 self-stretch flex justify-between gap-2 mt-2 px-4 py-3 rounded-lg max-md:max-w-full max-md:flex-wrap">
        <div className="text-zinc-800 text-sm font-medium leading-5 tracking-tight grow my-auto max-md:max-w-full">
          Start class Modules 2 of _____________
        </div>
        <div className="text-slate-800 text-center text-sm font-semibold leading-4 tracking-tight whitespace-nowrap justify-center items-stretch border border-[color:var(--Brand-Colours-Navy-blue-200,#273249)] self-stretch px-3 py-2.5 rounded-[70px] border-solid">
          Jump back in
        </div>
      </div>
      <div className="bg-muted items-center bg-stone-50 self-stretch flex justify-between gap-2 mt-2 px-4 py-3 rounded-lg max-md:max-w-full max-md:flex-wrap">
        <div className="text-zinc-800 text-sm font-medium leading-5 tracking-tight grow my-auto max-md:max-w-full">
          Attend office hours
        </div>
        <div className="justify-between border border-[color:var(--Brand-Colours-Navy-blue-200,#273249)] self-stretch flex gap-2.5 px-3 py-2 rounded-[70px] border-solid items-start">
          <div className="text-slate-800 text-center text-sm font-semibold leading-4 tracking-tight">
            Register
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e12e7e563ca76895f88d0306c4ce1070c64950bca726ed133a3b349519bd293?apiKey=854b1295ef754afa80d463882b8719fe&"
            className="aspect-square object-contain object-center w-3 justify-center items-center overflow-hidden self-stretch shrink-0 max-w-full"
          />
        </div>
      </div>
      <div className="bg-muted items-center bg-stone-50 self-stretch flex justify-between gap-2 mt-2 px-4 py-3 rounded-lg max-md:max-w-full max-md:flex-wrap">
        <div className="text-zinc-800 text-sm font-medium leading-5 tracking-tight grow my-auto max-md:max-w-full">
          Connect with a Vetted Expert
        </div>
        <div className="text-slate-800 text-center text-sm font-semibold leading-4 tracking-tight whitespace-nowrap justify-center items-stretch border border-[color:var(--Brand-Colours-Navy-blue-200,#273249)] self-stretch px-3 py-2.5 rounded-[70px] border-solid">
          Vetted experts
        </div>
      </div>
      <div className="bg-muted text-slate-800 text-center text-sm font-semibold leading-4 tracking-tight whitespace-nowrap justify-center items-stretch border border-[color:var(--Brand-Colours-Navy-blue-200,#273249)] mt-4 px-6 py-4 rounded-[70px] border-solid self-start max-md:px-5">
        View more
      </div>
    </div>
    );
}

export  {NextStepsCard};
