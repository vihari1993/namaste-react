/*
    <div id="parent">
        <div id="Child1">
            <h1>Heading1</h1>
            <h2>Heading1</h2>
        </div>
        <div id="Child2">
                <h1>Heading1</h1>
                <h2>Heading2</h2>
            </div>
    </div>
*/



const heading = React.createElement("div",{id:'parent'},[
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{},"Heading1"),
        React.createElement("h2",{},"Heading1")
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"Heading1"),
        React.createElement("h2",{},"Heading1")
    ])
]);
console.log(heading) //ReactElement which is object
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);