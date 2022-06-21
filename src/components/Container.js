import React, { useEffect, useState } from 'react';
import MoveToLeft from '../assets/hooks/MoveToLeft';
import classnames from 'classnames';
import '../assets/css/pages.css';

const Container = ({pageState, navList}) => { 
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            const screenWrap = document.querySelector('.screen-wrap');
            screenWrap.style.left = (-1) * width * pageState + 'px';
            setWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    },[width]);
    useEffect(()=> {
        const screens = document.querySelectorAll('.screen');
        const focusedNav = document.querySelector('.screen' + pageState);
        screens.forEach((el) => el.classList.remove('focused'));
        focusedNav.classList.add('focused');
        focusedNav.scrollTop = 0;
        MoveToLeft(pageState);
    },[pageState]);
    return (
        <>
            <div className="container">
                <ul className="screen-wrap">
                    {
                        navList.map((el) => <li className={classnames('screen', el.idxName, el.name)} key={el.idx}>{el.tag}</li>)
                    }
                </ul>
            </div>
        </>
    );
};

export default Container;