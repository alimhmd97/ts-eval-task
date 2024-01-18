import React, { useEffect, useState } from 'react';
import { Snackbar } from '../../shared/UI/snackbar';

const Slider = () => {
    // --------------------------------------------------------------------------------------------
    const [posts, setPosts] = useState([]);
    const [snackbarMsg, setSnackbarMsg] = useState('');
    // --------------------------------------------------------------------------------------------
    const getPosts = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!response.ok) {
                throw new Error('Failed to fetch posts');
            }
            setPosts(await response.json())

        } catch (error) {
            setSnackbarMsg('Something went wrong, please try again');
        }
    };
    // --------------------------------------------------------------------------------------------
    useEffect(() => {
        getPosts()
    }, []);
    // --------------------------------------------------------------------------------------------
    return (
        <div className="justify-between self-stretch flex gap-5 items-start max-md:flex-wrap">
        <div className="text-zinc-800 text-2xl font-bold leading-6 tracking-tight">
          New courses
        </div>
        <div className="items-stretch self-stretch flex justify-between gap-4">
          <div className="justify-center items-center border border-[color:var(--Brand-Colours-Navy-blue-100,#BEC1C8)] flex aspect-[1.2857142857142858] flex-col px-3 py-2 rounded-[70px] border-solid">
            <img
            alt=''
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c7058113b83c0e184e9c948056970a75651d8ab4f90500f5b1bf2ddd97ef6f3?apiKey=854b1295ef754afa80d463882b8719fe&"
              className="aspect-square object-contain object-center w-3 justify-center items-center overflow-hidden"
            />
          </div>
          <div className="justify-center items-center border border-[color:var(--Brand-Colours-Navy-blue-200,#273249)] flex aspect-[1.2857142857142858] flex-col px-3 py-2 rounded-[70px] border-solid">
            <img
            alt=''
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3901e09e15b921286a9591e25fe9843bfd7a0fc12e654a4d4e4dba99182011c9?apiKey=854b1295ef754afa80d463882b8719fe&"
              className="aspect-square object-contain object-center w-3 justify-center items-center overflow-hidden"
            />
          </div>
        </div>
      </div>
    );
}

export { Slider };
