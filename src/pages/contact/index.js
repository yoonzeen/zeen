import React from 'react';
import styled from 'styled-components';

const StyledContactContent = styled.div`
    height:100vh; background-color:coral; display:flex;
    img {width:100px}
`;
const Contact = () => {
    return (
        <StyledContactContent>
            <div className="content">
                <p>
                    <img src="/assets/images/logo_white_header.png" alt="logo" className="logo" /><br />
                    윤지은(Yoon Ji-eun)<br />
                    <span className="email">yjieuno_o@naver.com</span>
                </p>
            </div>
        </StyledContactContent>
    );
};

export default Contact;