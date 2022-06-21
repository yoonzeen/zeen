export default function CalculateWidth() {
    const screens = document.getElementsByClassName('screen');
    const screensArray = Array.from(screens);
    screensArray.forEach((el) => el.style.width = window.innerWidth + 'px');

    const screenWrap = document.querySelector('.screen-wrap');
    screenWrap.style.width = screensArray[0].clientWidth * screensArray.length + 'px';
}