import React from 'react';

const RocketBooster = ({updateProgress}) => {
    return (
        <div className="items-stretch bg-slate-100 flex flex-col pl-5 pr-10 py-5 max-md:pr-5">
        <div className="justify-center items-center flex flex-col px-16 max-md:max-w-full max-md:px-5">
          <span className="flex w-[860px] max-w-full flex-col items-stretch">
            <span className="justify-between items-stretch flex gap-5 max-md:max-w-full max-md:flex-wrap">
              <div className="text-zinc-800 text-4xl font-semibold tracking-tighter grow shrink basis-auto">
                RocketBooster:
              </div>
              <div className="text-zinc-800 text-2xl font-semibold leading-7 tracking-tight self-start">
                4/7
              </div>
            </span>
            <div className="text-zinc-800 text-3xl font-semibold tracking-tighter mt-8 max-md:max-w-full">
              Credibility
            </div>
            <div className="text-zinc-800 text-xl font-bold leading-7 tracking-tight mt-8 max-md:max-w-full">
              Do you strategically scout your existing network for opportunities
              to connect with your audience's connections?This question is
              required.*
            </div>{" "}
            <span className="items-stretch border border-[color:var(--Brand-Colours-Navy-blue-200,#273249)] flex justify-between gap-2.5 mt-8 px-6 py-5 rounded-[70px] border-solid max-md:max-w-full max-md:flex-wrap max-md:px-5">
           <input id='yes' type='checkbox' style={{accentColor:'white',width:'1.1rem',height:'1.1rem'}}defaultChecked={false}/>
              
              <label  htmlFor='yes' className="text-slate-800 cursor-pointer text-center text-sm font-semibold leading-4 tracking-tight self-center grow whitespace-nowrap my-auto">
                Yes
              </label>
            </span>{" "}
            <span className="items-stretch border border-[color:var(--Brand-Colours-Navy-blue-200,#273249)] bg-slate-800 flex justify-between gap-2.5 mt-2.5 px-6 py-5 rounded-[70px] border-solid max-md:max-w-full max-md:flex-wrap max-md:px-5">
            <input id='no' type='checkbox' style={{accentColor:'white',width:'1.1rem',height:'1.1rem'}} defaultChecked={true}/>

              <label htmlFor='no' className="text-white text-center cursor-pointer text-sm font-semibold leading-4 tracking-tight self-center grow whitespace-nowrap my-auto">
                No
              </label>
            </span>{" "}
            <div className="justify-between items-stretch flex w-full gap-5 mt-10 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
              <span  onClick={()=>{
                    updateProgress('backward')
                }} className="justify-between items-stretch border border-[color:var(--Brand-Colours-Navy-blue-200,#273249)] flex gap-2.5 px-6 py-3.5 rounded-[70px] border-solid max-md:px-5">
                <img
                alt=''
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/36062481f3e78ad13758bbc6c531cf03175ebcfa9a99099e07dafd5a6024f80f?apiKey=854b1295ef754afa80d463882b8719fe&"
                  className="aspect-square object-contain object-center w-4 justify-center items-center overflow-hidden shrink-0 max-w-full"
                />{" "}
                <div className="text-slate-800 cursor-pointer text-center text-sm font-semibold leading-4 tracking-tight self-center my-auto">
                  Back
                </div>
              </span>{" "}
              <span className="text-slate-800 cursor-pointer text-center text-sm font-semibold leading-4 tracking-tight whitespace-nowrap justify-center items-stretch border border-[color:var(--Brand-Colours-Navy-blue-200,#273249)] px-6 py-4 rounded-[70px] border-solid max-md:px-5">
                Save and continue later
              </span>{" "}
              <span  onClick={()=>{
                    updateProgress('forward')
                }}className="justify-between items-center border border-[color:var(--Brand-Colours-Red-200,#EC202C)] bg-danger flex gap-2.5 px-6 py-3.5 rounded-[70px] border-solid max-md:px-5">
                <div   className="text-light cursor-pointer text-center text-sm font-semibold leading-4 tracking-tight my-auto">
                  Next
                </div>{" "}
                <img
                alt=''
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/72ec6ba94b84039f79afa820ddfed764358d6022e3dd6cd7ae8c6d773caed014?apiKey=854b1295ef754afa80d463882b8719fe&"
                  className="aspect-square object-contain object-center w-4 justify-center items-center overflow-hidden self-stretch shrink-0 max-w-full"
                />
              </span>
            </div>
          </span>
        </div>{" "}
       
      </div>
    );
}

export  {RocketBooster};
