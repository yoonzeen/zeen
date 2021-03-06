import React, { useEffect, useState } from 'react';
import Container from './components/Container';
import Footer from './components/Footer';
import Header from './components/Header';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Works from './pages/works/Works';

const Wrapper = () => {
    const [pageState, setPageState] = useState(0);
    // const [loading, setLoading] = useState(true);
    const changePage = (num) => {
        setPageState(num);
    };
    // useEffect(() => {
    //     setLoading(false);
    // },[]);

    const navList = [
        {idx : 0, idxName:'screen0', name:'home', tag:<Home />},
        {idx : 1, idxName:'screen1', name: 'profile', tag:<Profile />},
        {idx : 2, idxName:'screen2', name:'works', tag:<Works />},
        {idx : 3, idxName:'screen3', name:'contact', tag:<Contact />}
    ];
    return (
        <>
            <div className="wrapper">
                <Header changePage={changePage} navList={navList} />
                <Container pageState={pageState} navList={navList} />
                <Footer />
            </div>  
            <div className="first-loading">
                <img src="/assets/images/loading.gif" alt="loading" />
            </div>
        </>
    );
};

export default Wrapper;