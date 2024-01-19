import React, { useCallback, useMemo, useState } from 'react';
import Progressbar from '../../shared/progressbar/progressbar';
import { RocketBooster } from './rocket-booster';

const ThirdPage = () => {
    const [currentProgress, setCurrentProgress] = useState(3);
    const progressbarElements = useMemo(() => ["Synergy", "Sharing", "Credibility", "Plan Brand", "Expertise", "Audience", "Intro"], []);

    const updateProgress = useCallback((type) => {
        if (type === 'forward') {
            setCurrentProgress((prevProgress) => ((prevProgress < progressbarElements.length) ? prevProgress + 1 : prevProgress))
        } else if (type === 'backward') {
            setCurrentProgress((prevProgress) => ((prevProgress >= 1) ? prevProgress - 1 : prevProgress))
        }
    }, []);
    return (
        <div className='bg-[#EAF3F4] p-1 pr-2 pb-1 pl-1 max-md:pt-6'>
                <RocketBooster updateProgress={updateProgress} />
                <Progressbar currentProgress={currentProgress} progressbarElemnts={progressbarElements} />
            </div>
    );
}

export default ThirdPage;
