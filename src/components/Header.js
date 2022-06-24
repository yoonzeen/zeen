import React, { useState } from 'react';

const Header = ({navList, changePage}) => {
    return (
        <>
            <div className="header">
                <div className="content">
                    <h1><img src="/assets/images/logo_white_header.png" alt="logo" className="logo"/></h1>
                    <div className="nav">
                        <ul>
                            {
                                navList.map((el) => <li key={el.idx} onClick={() => changePage(el.idx)}>{el.name}</li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;