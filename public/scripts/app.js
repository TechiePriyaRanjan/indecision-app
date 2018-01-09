"use strict";

console.log("Wow! I'm learning React.js with Andrew Mead. 😉");

// JSX = Javascript XML

// Challenge Two
var app = {
    title: "Indecision App",
    subtitle: "This is some subtitle"
};

var studentInfo = React.createElement(
    "div",
    null,
    React.createElement(
        "h2",
        null,
        app.title
    ),
    React.createElement(
        "p",
        null,
        app.subtitle
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "List 1"
        ),
        React.createElement(
            "li",
            null,
            "List 2"
        )
    )
);

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

// Challange one
var user = {
    name: "Priya Ranjan Dubey",
    age: 25,
    location: "Patna, Bihar"
};

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name
    ),
    React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    React.createElement(
        "p",
        null,
        "Location: ",
        user.location
    )
);

// Getting the DOM element by its ID
var AppRoot = document.getElementById('app');

/*
ReactDOM.render() method takes two arguments, 1st the JSX
 and the second the DOM element we want to render
*/
ReactDOM.render(studentInfo, AppRoot);
