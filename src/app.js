console.log("Wow! I'm learning React.js with Andrew Mead. 😉");

// JSX = Javascript XML

// Challenge Two
var app = {
    title: "Indecision App",
    subtitle: "This is some subtitle"
};

var studentInfo = 
    <div>
        <h2>{app.title}</h2>
        <p>{app.subtitle}</p>
        <ol>
            <li>List 1</li>
            <li>List 2</li>
        </ol>
    </div>
;


var template =
    <div>
        <h1>Wow! I'm learning React.js with Andrew Mead.😉</h1>
        <p>This  man is teaching step by step 😜.</p>

        <ol>
            <li>React 1</li>
            <li>React 2</li>
        </ol>
    </div>
;

// Challange one
var user = {
        name : "Priya Ranjan Dubey",
        age : 25,
        location : "Patna, Bihar"
};

var templateTwo = 
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
;

// Getting the DOM element by its ID
var AppRoot = document.getElementById('app');

/*
ReactDOM.render() method takes two arguments, 1st the JSX
 and the second the DOM element we want to render
*/
ReactDOM.render(studentInfo, AppRoot);