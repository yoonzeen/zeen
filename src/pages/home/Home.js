import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../../components/LoadingSpinner';

const Home = ({setPageState}) => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    },[]);
    return (
        <>
            {
                loading ? <LoadingSpinner /> :
                <div>
                    <video muted="muted" autoPlay loop playsInline type="video/mp4" poster="/assets/images/opening_poster.jpg">
                        <source src="/assets/video/opening.mp4" />
                    </video>
                    <div className="bg">
                        <div className="content">
                            <div>
                                <h2>It is Yoonzeen -</h2>
                                <p>Welcome to my Space.<br/>
                                This was started from 'Hello World'.</p>
                            </div>
                            <div className="floating-btn" onClick={() => setPageState(1)}>
                                Go To Profile
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default Home;