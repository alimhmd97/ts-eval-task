import React from 'react';
import { Header } from './header';
import { WarningSec } from './warning-sec';
import { NextStepsCard } from './next-steps-card';
import { ImgCard } from './img-card';
import { Slider } from './slider/slider';

const FirstPage = () => {
    return (
        <div className="p-4 pr-8 pb-4 pl-4 ">
            <Header />
             <WarningSec />
            <div className="flex flex-col md:flex-row gap-4">
                <ImgCard />
                <NextStepsCard />
            </div>
            <Slider/>
        </div>
    );
}

export default FirstPage;
