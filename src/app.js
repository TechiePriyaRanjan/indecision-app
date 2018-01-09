console.log("Wow! I'm learning React.js with Andrew Mead. 😉");

// JSX = Javascript XML
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

// Getting the DOM element by its ID
var AppRoot = document.getElementById('app');

/*
ReactDOM.render() method takes two arguments, 1st the JSX
 and the second the DOM element we want to render
*/
ReactDOM.render(template, AppRoot);