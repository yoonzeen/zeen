import gsap from 'gsap';
import React, { useEffect, useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';


const StyledHomeContent = styled.div`
    .content { 
        height:100vh; background-color:#ccc;
        h1 {font-family:'Lobster'; color:#fff; text-shadow:-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000; font-size:80px;}
    }
`

const Home = () => {
    const homeContent = useRef();
    useLayoutEffect(() => {
        gsap.to(homeContent.current.querySelector('.content'), {
            ease: 'none',
            scrollTrigger: {
                trigger:homeContent.current.querySelector('.content'),
                pin: true,
                scrub: 1,
                markers: true,
                end: () => "+=" + homeContent.current.offsetHeight
            }
        })

    }, []);
    return (
        <StyledHomeContent ref={homeContent}>
            <div className='content'>
                <h1>test</h1>    
            </div>
        </StyledHomeContent>
    );
};

export default Home;