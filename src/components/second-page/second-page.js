import React, { useCallback, useMemo, useState } from 'react';
import { InfluenceReadinessTestContent } from './Influence-readiness-test-content';
import Progressbar from '../../shared/progressbar/progressbar';

const SecondPage = () => {
const [currentProgress, setCurrentProgress] = useState(3);
const progressbarElements = useMemo(() => ["Synergy", "Sharing", "Credibility", "Plan Brand", "Expertise", "Audience", "Intro"], []);

const updateProgress = useCallback(() => {
    setCurrentProgress((prevProgress) => ((prevProgress < progressbarElements.length)?prevProgress+1:prevProgress))
  }, []);

    
    return (
        <div className='bg-[#EAF3F4] p-1 pr-2 pb-1 pl-1 max-md:pt-6'>
            <InfluenceReadinessTestContent updateProgress={updateProgress}/>
            <Progressbar currentProgress={currentProgress} progressbarElemnts={progressbarElements} />
        </div>
    );
}

export default SecondPage;
