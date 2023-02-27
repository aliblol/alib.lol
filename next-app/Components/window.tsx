import React from 'react';
import '98.css';

const Window = (props: any) => {
    return (
        <div style={{ width: 300 }} className="window">
            <div className="title-bar">
                <div className="title-bar-text">{props.titlebar}</div>
                <div className="title-bar-controls">
                    <button aria-label="Minimize"></button>
                    <button aria-label="Maximize"></button>
                    <button aria-label="Close"></button>
                </div>
            </div>
            <div className="window-body">
                <p>This is a WIP site where I can put my projects and stuff</p>
            </div>
        </div>
    );
}

export default Window;
