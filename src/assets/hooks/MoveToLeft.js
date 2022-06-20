import { useEffect } from "react";

export default function MoveToLeft(pageState) {
    
    useEffect(() => {
        const screenWrap = document.querySelector('.screen-wrap');
        const screens = document.getElementsByClassName('screen');
        const screensArray = Array.from(screens);
        screenWrap.style.left = (-1) * pageState * screensArray[0].clientWidth + 'px';

    },[pageState]);
}