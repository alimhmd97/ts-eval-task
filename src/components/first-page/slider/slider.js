import React, { useEffect, useRef, useState } from 'react';
import { Snackbar } from '../../../shared/UI/snackbar';
import { SliderCards } from './slider-cards';

const Slider = () => {
  const sliderRef = useRef(null);
  // --------------------------------------------------------------------------------------------
  const [posts, setPosts] = useState([]);
  const [snackbarMsg, setSnackbarMsg] = useState('');
  const [isloading, setIsloading] = useState(false);
  // --------------------------------------------------------------------------------------------
  const getPosts = async () => {
    setIsloading(true)
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      setPosts(await response.json())

    } catch (error) {
      setSnackbarMsg('Something went wrong, please try again');
    }
    setIsloading(false)

  };
  // --------------------------------------------------------------------------------------------
  useEffect(() => {
    getPosts()
  }, []);
  // --------------------------------------------------------------------------------------------
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4.5,
    swipeToSlide: true,
    arrows: false,
    dots: false,
    // afterChange: function (index) {
    //   // console.log(
    //   //     `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    //   // );
    // },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
         
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  };
  const handleNextButtonClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrevButtonClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  // --------------------------------------------------------------------------------------------
  return (<>{snackbarMsg && <Snackbar message={snackbarMsg} handleClose={setSnackbarMsg} />}
    <div className="justify-between self-stretch flex gap-5 items-start p-4 max-md:flex-wrap">
      <div className="text-zinc-800 text-2xl font-bold leading-6 tracking-tight">
        New courses
      </div>
      <div className="items-stretch self-stretch flex justify-between gap-4">
        <div onClick={() => {
          handlePrevButtonClick()
        }} className="justify-center items-center border border-[color:var(--Brand-Colours-Navy-blue-200,#273249)] flex aspect-[1.2857142857142858] flex-col px-3 py-2 rounded-[70px] border-solid">
          <img
            alt=''
            loading="lazy"
            src='/assets/back-arrow.png'
            // src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c7058113b83c0e184e9c948056970a75651d8ab4f90500f5b1bf2ddd97ef6f3?apiKey=854b1295ef754afa80d463882b8719fe&"
            className="aspect-square object-contain object-center w-3 justify-center items-center overflow-hidden"
          />
        </div>
        <div onClick={() => {
          handleNextButtonClick()
        }} className="justify-center items-center border border-[color:var(--Brand-Colours-Navy-blue-200,#273249)] flex aspect-[1.2857142857142858] flex-col px-3 py-2 rounded-[70px] border-solid">
          <img
            alt=''
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3901e09e15b921286a9591e25fe9843bfd7a0fc12e654a4d4e4dba99182011c9?apiKey=854b1295ef754afa80d463882b8719fe&"
            className="aspect-square object-contain object-center w-3 justify-center items-center overflow-hidden"
          />
        </div>
      </div>

    </div>
    <div className='w-full overflow-hidden'>
    {!isloading ? <SliderCards posts={posts} ref={sliderRef} settings={settings} />:
    <div class="spinner-container">
  <div class="spinner"></div>
</div>}
    </div>
  </>
  );
}

export { Slider };
