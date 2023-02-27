import React from "react";

const CoolText = (props) => {
    // capitalize the text
    const text = props.text.toUpperCase();
    return (
        <div className="cool-text">
            <a id="cool-text" data-value={text} href={props.url} onMouseOver={(event) => coolEffect(event)}>
                {text}
            </a>
        </div>
    );
}

// letters to use in the effect
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// the interval
let interval = null;

// the cool effect function
const coolEffect = (event) => {
    // get the element
    const element = event.target as HTMLElement;
    // the iteration
    let iteration = 0;
    // clear the interval
    clearInterval(interval);
    // set the interval
    interval = setInterval(() => {
        // set the text to the current iteration
        element.innerText = element.innerText
            // split the text into an array of letters
            .split("")
            // map over the array of letters
            .map((letter, index) => {
                // if the index is less than the iteration, return the letter
                if (index < iteration) {
                    return element.dataset.value[index];
                }
                // otherwise, return a random letter
                return letters[Math.floor(Math.random() * 26)]
            })
            // join the array of letters back into a string
            .join("");
        // if the iteration is greater than the length of the text, clear the interval
        if (iteration >= element.dataset.value.length) {
            clearInterval(interval);
        }
        // increment the iteration
        iteration += 1 / 3;
    }, 30);
}


export default CoolText;
