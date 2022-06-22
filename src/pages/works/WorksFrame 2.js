import classnames from 'classnames';
import React, { useEffect } from 'react';

const WorksFrame = ({navState, item}) => {
    const {idx, idxName, title, date, content, link, desc} = item;
    return (
        <>
            <div className={classnames('work-frame', idxName)}>
                <div className="img-area">
                    <a href={link} target="_blank" rel="noreferrer" title={title}><img src={`/assets/images/${idxName}.png`} alt={title}/></a>
                    <div className="title">{title} <span className="sm">({date})</span></div>
                </div>
                <div className="desc-area">
                    <div className="img-area2">
                        <img src={`/assets/images/${idxName}_pic.jpg`} alt={title} />
                    </div>
                    <div className="txt-area-wrap">
                    <div className="txt-area">
                        <div className="row">
                            <span>Link</span>
                            <span>
                            <a href={link} title={title} target="_blank" rel="noreferrer">{link}</a>
                            </span>
                        </div>
                        <div className="row">
                            <span>Summary</span>
                            <span>
                            {content}
                            </span>
                        </div>
                        <div className="row">
                            <span>Description</span>
                            <span>
                            {desc}
                            </span>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WorksFrame;