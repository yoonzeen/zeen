import gsap from 'gsap';
import React, { useEffect, useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';

const StyledProfileContent = styled.div`
    .content {height:300vh; background-color:#aaa; box-sizing: border-box; padding-top:50px;
        h2 {font-family:'Lobster'; color:#fff; text-shadow:-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000; font-size:80px;}
    }
`;

const Profile = () => {
    const profileContent = useRef();
    // const handleScroll = () => {
    //     const worksContent = document.querySelector('.works');
    //     const worksContentTop = worksContent.getBoundingClientRect().top;
    //     const profileContentTop = profileContent.current.getBoundingClientRect().top;
    //     console.log(profileContentTop);
    //     if (profileContentTop < 0) {
    //         profileContent.current.style.position = 'sticky';
    //     } else {
    //         profileContent.current.style.position = 'static';
    //     }
    // }
    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     }
    // }, []);

    useEffect(() => {
        console.log(profileContent.current)
        console.log(profileContent.current.offsetHeight)
        console.log(profileContent.current.querySelector('.content').offsetHeight)
    }, [])

    useLayoutEffect(() => {
        gsap.to(profileContent.current.querySelector('.content'), {
            ease: 'none',
            scrollTrigger: {
                trigger:profileContent.current.querySelector('.content'),
                pin: true,
                scrub: 1,
                markers: true,
            }
        })

    }, []);

    return (
        <StyledProfileContent ref={profileContent}>
            <div className="content">
                <h2>SECTION2</h2>
                {/* <div className="tbl">
                    <div className="tbl-title">
                        <span className="mid-strong lg">윤지은</span><br/><span className="normal">尹智恩&nbsp;&nbsp;|&nbsp;&nbsp;Yoon Ji-eun</span>
                    </div>
                    <div className="tbl-content">
                        <div className="bg-video">
                            <video muted="muted" autoPlay loop playsInline width="100%" type="video/mp4">
                                <source src="/assets/video/profile_zeen.mp4"  />
                            </video>
                        </div>
                        <table>
                            <colgroup> 
                                <col style={{width:'30%'}}/>
                                <col />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th>이름</th>
                                    <td>윤지은</td>
                                </tr>
                                <tr>
                                    <th>학력</th>
                                    <td>원곡고등학교 <span className="sm">(졸업)</span><br/>
                                    아주대학교 <span className="sm">(수학, 미디어학 복수전공)</span> <span className="tooltip-wrap">[2]<span className="tooltip">2012년 입학, <br/>2017년 2월 졸업</span></span>
                                    </td>
                                </tr>
                                <tr>
                                    <th>교육</th>
                                    <td>
                                        웹퍼블리셔/프론트엔드 개발자(Frontend, PHP) - 디지털컨버전스과정 <span className="sm">(2018.2 ~ 2018.07)</span> <span className="tooltip-wrap">[3]<span className="tooltip">취업을 위한 교육과정</span></span><br/>
                                        리액트(React JS) 자바스크립트 <span className="sm">(2021.11 ~ 2022.01) <span className="tooltip-wrap">[4]<span className="tooltip">자기개발을 위한 교육과정</span></span></span>
                                    </td>
                                </tr>
                                <tr>
                                    <th>자격증</th>
                                    <td>정보처리기사 - 한국산업인력공단 <span className="sm">(2021.08)</span></td>
                                </tr>
                                <tr>
                                    <th>경력</th>
                                    <td>
                                        (주)드래곤랩 <span className="sm">(2018.08 ~ 2019.06 약 10개월 <span className="tooltip-wrap">[5]<span className="tooltip"> HTML5, CSS3로 게임 제작 - 퍼블리싱<br/>경영악화로 인한 퇴사</span></span>)</span>
                                        <br/>
                                        (주)재능e아카데미 <span className="sm">(2019.06 ~ 재직중 <span className="tooltip-wrap">[6]<span className="tooltip">현재 직급은 대리.<br/>
                                        UX팀에서 대내외 사이트 운영 지원 및 앱 퍼블리싱했었고, 교육시스템팀에서 프론트엔드 개발 </span></span>)</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th>기술</th>
                                    <td>
                                        HTML5, CSS3 100%<br/>
                                        jQuery 99%<br/>
                                        Javascript 80%<br/>
                                        React js 80%<br/>
                                        그 외 - 간단한 CRUD SQL문 작성 가능
                                    </td>
                                </tr>
                                <tr>
                                    <th>SNS</th>
                                    <td><a href="https://www.instagram.com/zeen____________/" title="인스타그램" target="_blank" rel="noreferrer"><img src="/assets/images/instagram.svg" alt="인스타그램" width="16" height="16"/></a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div> */}
            </div>
        </StyledProfileContent>
    );
};

export default Profile;