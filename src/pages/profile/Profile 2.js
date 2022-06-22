import React from 'react';

const Profile = ({setPageState}) => {
    return (
        <>
            <div className="content">
                <div className="left-to-right bg-lg-text">
                    YOON
                </div>
                <div className="right-to-left bg-lg-text">
                    ZEEN
                </div>
                <div className="tbl">
                    <table>
                        <colgroup>
                            <col style={{width:'38%'}}/> 
                            <col style={{width:'12%'}}/>
                            <col />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th colSpan="3"><span className="mid-strong lg">윤지은</span><br/><span className="normal">尹智恩&nbsp;&nbsp;|&nbsp;&nbsp;Yoon Ji-eun</span></th>
                            </tr>
                            <tr>
                                <td rowSpan="9" className="bg-video">
                                    <video muted="muted" autoPlay loop width="100%" type="video/mp4">
                                        <source src="/assets/video/profile_zeen.mp4"  />
                                    </video>
                                </td>
                                <th>이름</th>
                                <td>윤지은</td>
                            </tr>
                            <tr>
                                <th>생일</th>
                                <td><a href="https://namu.wiki/w/9%EC%9B%94%2026%EC%9D%BC" title="9월 26일">9월 26일</a> <span className="tooltip-wrap">[1]<span className="tooltip">나이는 이력서에 기재</span></span></td>
                            </tr>
                            <tr>
                                <th>거주지</th>
                                <td><a href="https://namu.wiki/w/%EA%B2%BD%EA%B8%B0%EB%8F%84" title="경기도">경기도</a> <a href="https://namu.wiki/w/%EC%95%88%EC%82%B0%EC%8B%9C" title="안산시">안산시</a></td>
                            </tr>
                            <tr>
                                <th>학력</th>
                                <td><a href="https://namu.wiki/w/%EC%9B%90%EA%B3%A1%EA%B3%A0%EB%93%B1%ED%95%99%EA%B5%90" title="원곡고등학교">원곡고등학교</a> <span className="sm">(졸업)</span><br/>
                                <a href="https://namu.wiki/w/%EC%95%84%EC%A3%BC%EB%8C%80%ED%95%99%EA%B5%90" title="아주대학교">아주대학교</a> <span className="sm">(수학, 미디어학 복수전공)</span> <span className="tooltip-wrap">[2]<span className="tooltip">2012년 입학, <br/>2017년 2월 졸업</span></span>
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
                                    UX팀에서 대내외 사이트 운영 지원 및 앱 퍼블리싱했었고, 교육시스템팀에서 프론트엔드 개발 중</span></span>)</span>
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
                    <div className="floating-btn" onClick={() => setPageState(2)}>
                        Go To Works
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;