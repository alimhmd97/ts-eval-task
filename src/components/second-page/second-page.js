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
        <div className='bg-[#EAF3F4] p-4 pr-8 pb-4 pl-4 '>
            <InfluenceReadinessTestContent updateProgress={updateProgress}/>
            <Progressbar currentProgress={currentProgress} progressbarElemnts={progressbarElements} />
        </div>
    );
}

export default SecondPage;
