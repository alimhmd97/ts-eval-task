
const InfluenceReadinessTestContent = ({updateProgress}) => {
    return (
        <div className="items-stretch bg-slate-100 flex flex-col  max-lg:pt-3">
      <div className="justify-center items-center flex flex-col  max-lg:max-w-full ">
        <span className="flex w-[860px] max-w-full flex-col">
          <div className="text-zinc-800 text-4xl max-lg:text-zinc-600 max-lg:text-2xl font-semibold tracking-tighter self-stretch max-lg:max-w-full">
            Influence Readiness Test
          </div>
          <div className="text-zinc-800 text-3xl max-lg:text-zinc-600 max-lg:text-xl font-semibold tracking-tighter self-stretch mt-8 max-lg:max-w-full">
            You are about to take your Influence Readiness Test.
          </div>
          <div className="self-stretch text-zinc-800 text-xl max-lg:text-zinc-600 max-lg:text-lg font-medium leading-7 tracking-tight mt-6 max-lg:max-w-full">
            This test will provide a comprehensive marketing assessment within
            for you to assess your marketing practices for an accurate look at
            your influence trajectory.
            <br />
            <br />
            This test includes 120 questions , split between multiple-choice
            questions and single-answer questions. It should take you
            approximately 30 minutes to complete and you can save your progress
            and pick it up at a later time.
          </div>
          <div className="self-stretch text-zinc-800 text-2xl max-lg:text-zinc-600 max-lg:text-xl font-bold leading-6 tracking-tight mt-6 max-lg:max-w-full">
            You can take the full test or select which booster you would like to
            do first.
          </div>
          <div className="self-stretch text-zinc-800 text-xl font-medium leading-7 tracking-tight mt-6 max-lg:max-w-full">
            Select how you want to start your test by clicking on the buttons or
            on the progress bar below. You can always save your progress and
            continue later.
          </div>
          <span className="cursor-pointer text-light text-center text-sm font-semibold leading-4 tracking-tight whitespace-nowrap justify-center items-center border border-[color:var(--Brand-Colours-Red-200,#EC202C)] bg-danger self-stretch mt-8 px-16 py-5 rounded-[70px] border-solid max-lg:max-w-full max-lg:px-5">
            Take Full test
          </span>
          <div className="self-stretch flex items-stretch justify-between gap-2.5 mt-2.5 max-lg:max-w-full max-lg:flex-wrap">
            <span className="text-slate-800 cursor-pointer text-center text-sm font-semibold leading-4 tracking-tight whitespace-nowrap justify-center items-center border border-[color:var(--Brand-Colours-Navy-blue-200,#273249)] grow px-16 py-5 rounded-[70px] border-solid max-lg:px-5">
              Booster: Expertise
            </span>
            <span className="text-slate-800 cursor-pointer text-center text-sm font-semibold leading-4 tracking-tight whitespace-nowrap justify-center items-center border border-[color:var(--Brand-Colours-Navy-blue-200,#273249)] grow px-16 py-5 rounded-[70px] border-solid max-lg:px-5">
              Booster: Brand
            </span>
            <span className="text-slate-800 cursor-pointer text-center text-sm font-semibold leading-4 tracking-tight whitespace-nowrap justify-center items-center border border-[color:var(--Brand-Colours-Navy-blue-200,#273249)] grow px-16 py-5 rounded-[70px] border-solid max-lg:px-5">
              Booster: Plan
            </span>
          </div>
          <div className="self-stretch flex items-stretch justify-between gap-2.5 mt-2.5 max-lg:max-w-full max-lg:flex-wrap">
            <span className="text-slate-800 cursor-pointer text-center text-sm font-semibold leading-4 tracking-tight whitespace-nowrap justify-center items-center border border-[color:var(--Brand-Colours-Navy-blue-200,#273249)] grow px-16 py-5 rounded-[70px] border-solid max-lg:px-5">
              Booster: Credibility
            </span>
            <span className="text-slate-800 cursor-pointer text-center text-sm font-semibold leading-4 tracking-tight whitespace-nowrap justify-center items-center border border-[color:var(--Brand-Colours-Navy-blue-200,#273249)] grow px-16 py-5 rounded-[70px] border-solid max-lg:px-5">
              Booster: Synergy
            </span>
            <span className="text-slate-800 cursor-pointer text-center text-sm font-semibold leading-4 tracking-tight whitespace-nowrap justify-center items-center border border-[color:var(--Brand-Colours-Navy-blue-200,#273249)] grow px-16 py-5 rounded-[70px] border-solid max-lg:px-5">
              Booster: Sharing
            </span>
          </div>
          <span className="text-slate-800 cursor-pointer text-center text-sm font-semibold leading-4 tracking-tight whitespace-nowrap justify-center items-center border border-[color:var(--Brand-Colours-Navy-blue-200,#273249)] w-[280px] max-w-full mt-2.5 px-16 py-5 rounded-[70px] border-solid self-start max-lg:px-5">
            Booster: Audience
          </span>
          <span  onClick={()=>{
              updateProgress()
            }} className="mb-6  justify-center items-center border border-[color:var(--Brand-Colours-Red-200,#EC202C)] bg-danger flex gap-2.5 mt-14 px-6 py-3.5 rounded-[70px] border-solid self-end max-lg:mt-10 max-lg:px-5">
            <div className="cursor-pointer text-light text-center text-sm font-semibold leading-4 tracking-tight my-auto">
              Start test
            </div>
            <img
            alt=''
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6611a3a45ae5f41c757395acf4bfc2379fd327f74a3375a34eb177caa271eec4?apiKey=854b1295ef754afa80d463882b8719fe&"
              className="aspect-square object-contain object-center w-4 justify-center items-center overflow-hidden self-stretch shrink-0 max-w-full"
            />
          </span>
        </span>
      </div>
    
    </div>
    );
}

export  {InfluenceReadinessTestContent};
