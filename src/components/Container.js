import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import '../assets/css/pages.css';

const Container = ({pageState, navList}) => { 
    const [scroll, setScroll] = useState(false);
    useEffect(()=> {
        const screens = document.querySelectorAll('.screen');
        const focusedNav = document.querySelector('.screen' + pageState);
        screens.forEach((el) => el.classList.remove('focused'));
        focusedNav.classList.add('focused');
        window.scrollTo(0,0);
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