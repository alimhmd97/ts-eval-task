import React from 'react';
import { Header } from './header';
import { WarningSec } from './warning-sec';
import { NextStepsCard } from './next-steps-card';
import { ImgCard } from './img-card';
import { Slider } from './slider';

const FirstPage = () => {
    return (
        <div className="p-1 pr-2 pb-1 pl-1 max-md:pt-6">
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
