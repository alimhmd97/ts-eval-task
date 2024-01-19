import styles from './first-page.module.css';

const Header = () => {
    return (<>

        
        <div className=" mb-[8px] bg-primary justify-between items-stretch bg-slate-300 flex gap-5 p-6 rounded-lg max-lg:flex-wrap max-lg:px-5">
        <div className="items-center flex justify-between gap-3">
          <img
          alt=''
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/85d44d9210fd8298e058ca24b83b987fef648200ff76c29badeddd07068ad0c6?apiKey=854b1295ef754afa80d463882b8719fe&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/85d44d9210fd8298e058ca24b83b987fef648200ff76c29badeddd07068ad0c6?apiKey=854b1295ef754afa80d463882b8719fe&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/85d44d9210fd8298e058ca24b83b987fef648200ff76c29badeddd07068ad0c6?apiKey=854b1295ef754afa80d463882b8719fe&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/85d44d9210fd8298e058ca24b83b987fef648200ff76c29badeddd07068ad0c6?apiKey=854b1295ef754afa80d463882b8719fe&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/85d44d9210fd8298e058ca24b83b987fef648200ff76c29badeddd07068ad0c6?apiKey=854b1295ef754afa80d463882b8719fe&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/85d44d9210fd8298e058ca24b83b987fef648200ff76c29badeddd07068ad0c6?apiKey=854b1295ef754afa80d463882b8719fe&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/85d44d9210fd8298e058ca24b83b987fef648200ff76c29badeddd07068ad0c6?apiKey=854b1295ef754afa80d463882b8719fe&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/85d44d9210fd8298e058ca24b83b987fef648200ff76c29badeddd07068ad0c6?apiKey=854b1295ef754afa80d463882b8719fe&"
            className="aspect-square object-contain object-center w-[30px] justify-center items-center overflow-hidden shrink-0 max-w-full my-auto"
          />
          <span className="justify-center items-stretch self-stretch flex grow basis-[0%] flex-col">
            <div className="text-zinc-800 text-xl font-medium leading-7 tracking-tight">
              Hi, Craig
            </div>
            <div className="text-zinc-800 text-xs font-medium leading-4 tracking-tight whitespace-nowrap">
              ORGANIZATION NAME
            </div>
          </span>
        </div>
        <span className="items-stretch self-center flex justify-between gap-5 my-auto max-lg:max-w-full max-lg:flex-wrap">
          <div className="text-zinc-800 text-base font-medium leading-5 tracking-tight grow whitespace-nowrap">
            Influence Readiness Score: <span className="font-bold">76</span>
          </div>
          <div className="text-zinc-800 text-base font-medium leading-5 tracking-tight grow whitespace-nowrap">
            Your status: <span className="font-bold">Celebrity</span>
          </div>
        </span>
        <div className="items-stretch self-center flex justify-between gap-0 my-auto max-lg:max-w-full max-lg:flex-wrap">
          <span className="justify-between items-stretch flex gap-2.5 px-3 py-2 rounded-[70px]">
            <img
            alt=''
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/186b6c523b33c408294746a562b782d24a3e914cc3cec57e9e75e69488520168?apiKey=854b1295ef754afa80d463882b8719fe&"
              className="aspect-square object-contain object-center w-3 justify-center items-center overflow-hidden shrink-0 max-w-full"
            />
            <div className="text-slate-800 text-center text-sm font-semibold leading-4 tracking-tight grow whitespace-nowrap self-start">
              LaunchPad
            </div>
          </span>
          <span className="justify-between items-stretch flex gap-2.5 px-3 py-2 rounded-[70px]">
            <img
            alt=''
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/06eedf9b54462ce7035e94b321e719dcc3cddff795aaf515e62074e2780a802a?apiKey=854b1295ef754afa80d463882b8719fe&"
              className="aspect-square object-contain object-center w-3 justify-center items-center overflow-hidden shrink-0 max-w-full"
            />
            <div className="text-slate-800 text-center text-sm font-semibold leading-4 tracking-tight grow whitespace-nowrap self-start">
              Readiness test
            </div>
          </span>
        </div>
      </div>
        </>
    );
}

export { Header };
