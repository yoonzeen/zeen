import React, { useEffect, useState } from 'react';
import worksList from '../../assets/data/worksList';
import WorksFrame from './WorksFrame';
import classnames from 'classnames';


const Works = ({setPageState}) => {
    const [navState, setNavState] = useState(0);
    const changeNavState = (navState) => {
        setNavState(navState);
    };
    useEffect(()=> {
        const worksNav = document.querySelectorAll('.works-nav');
        const focusedNav = document.querySelector('.work' + navState);
        const worksFrame = document.querySelector('.works-area').children;
        const worksFrameArray = Array.from(worksFrame);
        const focusedFrame = worksFrameArray[navState];

        worksNav.forEach((el) => el.classList.remove('focused'));
        focusedNav.classList.add('focused');
        worksFrameArray.forEach((el) => el.classList.remove('focused'));
        focusedFrame.classList.add('focused');
        focusedFrame.scrollTop = 0;
    },[navState]);
    return (
        <>
            <div className="content">
                <div className="small-nav">
                    <ul>
                        {
                            worksList.map((el) => <li key={el.idx} onClick={() => changeNavState(el.idx)} className={classnames('works-nav',el.idxName)}></li>)
                        }
                    </ul>
                </div>
                <div className="works-area">
                    {
                        worksList.map((item) => <WorksFrame key={item.idx} item={item} navState={navState} />)
                    }
                </div>
                
                <div className="floating-btn" onClick={() => setPageState(3)}>
                    Go To Contact
                </div>
            </div>
        </>
    );
};

export default Works;