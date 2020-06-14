import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Hello = (props) => {
    const doThis = (a)=> {
        alert(a);
        // alert("Button Clicked");
    } 

    return (
        <div>
            <button className="btn btn-primary m-5" onClick={doThis.bind(this, "Hello I am from para")}>Click Me from Functional</button>
            <h1>Hello {props.name} & Age: {props.age}</h1>
        </div>
    );
};

export default Hello;