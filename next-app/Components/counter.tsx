import React from "react";
import "98.css";

// find me!!!!

const Counter = () => {
    const [count, setCount] = React.useState(0);
    return (
        <div style={{ width: 300 }} className="window">
            <div className="title-bar">
                <div className="title-bar-text">Counter</div>
                <div className="title-bar-controls">
                    <button aria-label="Minimize" />
                    <button aria-label="Maximize" />
                    <button aria-label="Close" />
                </div>
            </div>

            <div className="window-body">
                <p style={{ textAlign: "center" }}>Current count: {count}</p>
                <div className="field-row" style={{ justifyContent: "center" }}>
                    <button onClick={() => setCount(count + 1)}>+</button>
                    <button onClick={() => setCount(count - 1)}>-</button>
                    <button onClick={() => setCount(0)}>0</button>
                </div>
            </div>
        </div>
    );
};

export default Counter;
