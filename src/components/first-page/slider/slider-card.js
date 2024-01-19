import React from 'react';

const SliderCard = ({ post }) => {
    return (
        <div className="text-dark bg-light mx-2 ">
            <span className="max-w-[380px] items-stretch border border-[color:var(--Brand-Colours-Black-background,#ECECEC)] shadow-sm bg-white flex flex-col p-3 rounded-xl border-solid">
                <div className="flex-col overflow-hidden relative flex aspect-[1.8736842105263158] items-stretch pt-12">
                    <img
                        alt=""
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2b44a30ce849a63f3e9f85003054da53dcfd4c9c44149f81a7416ddb0febc262?apiKey=854b1295ef754afa80d463882b8719fe&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b44a30ce849a63f3e9f85003054da53dcfd4c9c44149f81a7416ddb0febc262?apiKey=854b1295ef754afa80d463882b8719fe&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b44a30ce849a63f3e9f85003054da53dcfd4c9c44149f81a7416ddb0febc262?apiKey=854b1295ef754afa80d463882b8719fe&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b44a30ce849a63f3e9f85003054da53dcfd4c9c44149f81a7416ddb0febc262?apiKey=854b1295ef754afa80d463882b8719fe&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b44a30ce849a63f3e9f85003054da53dcfd4c9c44149f81a7416ddb0febc262?apiKey=854b1295ef754afa80d463882b8719fe&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b44a30ce849a63f3e9f85003054da53dcfd4c9c44149f81a7416ddb0febc262?apiKey=854b1295ef754afa80d463882b8719fe&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b44a30ce849a63f3e9f85003054da53dcfd4c9c44149f81a7416ddb0febc262?apiKey=854b1295ef754afa80d463882b8719fe&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b44a30ce849a63f3e9f85003054da53dcfd4c9c44149f81a7416ddb0febc262?apiKey=854b1295ef754afa80d463882b8719fe&"
                        className="absolute h-full w-full object-cover object-center inset-0"
                    />
                    <div className="flex-col relative fill-slate-800 overflow-hidden flex aspect-[3.0427350427350426] w-full items-center mt-6 pt-11">
                        <img
                            alt=""
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/51221816-fc8d-4b28-a4a5-9393019eeee5?apiKey=854b1295ef754afa80d463882b8719fe&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/51221816-fc8d-4b28-a4a5-9393019eeee5?apiKey=854b1295ef754afa80d463882b8719fe&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/51221816-fc8d-4b28-a4a5-9393019eeee5?apiKey=854b1295ef754afa80d463882b8719fe&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/51221816-fc8d-4b28-a4a5-9393019eeee5?apiKey=854b1295ef754afa80d463882b8719fe&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/51221816-fc8d-4b28-a4a5-9393019eeee5?apiKey=854b1295ef754afa80d463882b8719fe&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/51221816-fc8d-4b28-a4a5-9393019eeee5?apiKey=854b1295ef754afa80d463882b8719fe&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/51221816-fc8d-4b28-a4a5-9393019eeee5?apiKey=854b1295ef754afa80d463882b8719fe&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/51221816-fc8d-4b28-a4a5-9393019eeee5?apiKey=854b1295ef754afa80d463882b8719fe&"
                            className="absolute h-full w-full object-cover object-center inset-0"
                        />
                        <img
                            alt=""
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/55479186e78bd26b6ea741900d07077be9614d46b9f74a3e2110e5a238da81e7?apiKey=854b1295ef754afa80d463882b8719fe&"
                            className="aspect-[4.88] object-contain object-center w-full fill-red-600 overflow-hidden"
                        />
                    </div>
                </div>
                <div className="text-zinc-800 text-sm font-bold leading-5 max-w-xs truncate tracking-tight mt-3">
                    {post?.title}
                </div>
                <div className="text-zinc-800 text-sm max-w-xs truncate font-medium leading-5 tracking-tight mt-2">
                    {post?.body}
                </div>{" "}
                <div className="items-stretch flex  gap-2.5 mt-3">
                    <span className="text-slate-800 text-center text-sm font-semibold leading-4 tracking-tight justify-center items-stretch border border-[color:var(--Brand-Colours-Navy-blue-200,#273249)]  px-3 py-2 rounded-[70px] border-solid">
                        Learn more
                    </span>{" "}
                    <span className="text-slate-800 text-center text-sm font-semibold leading-4 tracking-tight justify-center items-stretch border border-[color:var(--Brand-Colours-Navy-blue-200,#273249)]  px-3 py-2 rounded-[70px] border-solid">
                        Enrol
                    </span>
                </div>
            </span>
        </div>
    );
}

export { SliderCard };
