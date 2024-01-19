import { forwardRef } from "react";
import Slider from "react-slick";
import { SliderCard } from "./slider-card";
const SliderCards = forwardRef(({ settings, posts }, ref) => {

    return (
        <div >
            <Slider ref={ref} className="" {...settings}>

                {posts?.map((post,i) => {
                    return <SliderCard key={i} post={post} />
                })}

            </Slider>
        </div>
    );
});

export { SliderCards };


