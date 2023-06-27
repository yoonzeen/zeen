import React, { useLayoutEffect, useRef, useState } from 'react';
import worksList from '../../assets/data/worksList';
import WorksFrame from './WorksFrame';
import styled from 'styled-components';
import gsap from 'gsap';

const StyledWorksContent = styled.div`
    .works {
        width: ${(props)=> props.len ? props.len * 100 + '%' : '100%'};
        display: flex;
        flex-wrap: nowrap;
        clip-path: inset(0 0 0 0);
    }
    .work {
        width:100% !important;
        height:100vh;
        &:first-child {background-color:aquamarine;}
        &:nth-child(2) {background-color:yellowgreen;}
        &:nth-child(3) {background-color:blueviolet;}
        &:nth-child(4) {background-color:#ccc;}
        &:last-child {background-color:#ddd;}
    }
`;

const Works = () => {
    const worksArea = useRef();
    const [navState, setNavState] = useState(0);
    const changeNavState = (navState) => {
        setNavState(navState);
    };
    // useEffect(()=> {
    //     const worksNav = document.querySelectorAll('.works-nav');
    //     const focusedNav = document.querySelector('.work' + navState);
    //     const worksFrame = document.querySelector('.works-area').children;
    //     const worksFrameArray = Array.from(worksFrame);
    //     const focusedFrame = worksFrameArray[navState];

    //     worksNav.forEach((el) => el.classList.remove('focused'));
    //     focusedNav.classList.add('focused');
    //     worksFrameArray.forEach((el) => el.classList.remove('focused'));
    //     focusedFrame.classList.add('focused');
    //     window.scrollTo(0,0);
    // },[navState]);
    useLayoutEffect(() => {
        let works = gsap.utils.toArray('.work');
        gsap.to(works, {
            xPercent: -100 * (works.length - 1),
            ease: 'none',
            scrollTrigger: {
                trigger: worksArea.current,
                pin: true,
                scrub: 1,
                end: () => "+=" + worksArea.current.offsetWidth
            }
        });
    }, []);
    return (
        <StyledWorksContent len={worksList.length}>
            <ul className='works' ref={worksArea}>
                <li className='work content'>page1</li>    
                <li className='work content'>page2</li>
                <li className='work content'>page3</li>
                <li className='work content'>page4</li>
                <li className='work content'>page5</li>
            </ul>
            {/* <div className="small-nav">
                <ul>
                    {
                        worksList.map((el) => <li key={el.idx} onClick={() => changeNavState(el.idx)} className={classnames('works-nav',el.idxName)}></li>)
                    }
                </ul>
            </div>
            <div className="works-area">
                {
                    worksList.map((item) => <WorksFrame key={item.idx} item={item} />)
                }
            </div> */}
        </StyledWorksContent>
    );
};

export default Works;