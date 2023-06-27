import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import LoadingSpinner from '../../components/LoadingSpinner';

const StyledHomeContent = styled.div`
    .content { 
        height:100vh; background-color:#ccc;
        h1 {font-family:'Lobster'; color:#fff; text-shadow:-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000; font-size:80px;}
    }
`

const Home = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    },[]);
    return (
        <StyledHomeContent>
            {
                loading ? <LoadingSpinner /> :
                <div className='content'>
                    <h1>test</h1>    
                </div>
            }
        </StyledHomeContent>
    );
};

export default Home;