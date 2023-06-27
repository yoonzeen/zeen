import React from 'react';
import '../assets/css/pages.css';
import Home from '../pages/home';
import Profile from '../pages/profile';
import Works from '../pages/works';
import Contact from '../pages/contact';

const Container = () => {
    return (
        <>
            <Home />
            <Profile />
            <Works />
            <Contact />
        </>
    );
};

export default Container;