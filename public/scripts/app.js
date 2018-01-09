"use strict";

console.log("Wow! I'm learning React.js with Andrew Mead. 😉");

// JSX = Javascript XML
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Wow! I'm learning React.js with Andrew Mead.\uD83D\uDE09"
    ),
    React.createElement(
        "p",
        null,
        "This  man is teaching step by step \uD83D\uDE1C."
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "React 1"
        ),
        React.createElement(
            "li",
            null,
            "React 2"
        )
    )
);

// Getting the DOM element by its ID
var AppRoot = document.getElementById('app');

/*
ReactDOM.render() method takes two arguments, 1st the JSX
 and the second the DOM element we want to render
*/
ReactDOM.render(template, AppRoot);
