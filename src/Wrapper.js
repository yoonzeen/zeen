import React from 'react';
import Container from './components/Container';
import Footer from './components/Footer';
import Header from './components/Header';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Wrapper = () => {
    return (
        <>
            <div className="wrapper">
                <Header />
                <Container />
                <Footer />
            </div>  
        </>
    );
};

export default Wrapper;