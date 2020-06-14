import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Arrow = () => {
    const AlertMe = (a)=> {
        alert(a);
    }

    return (
        <div>
            <button className="btn btn-danger" onClick={AlertMe.bind(this,"Hello from Arrow")}>Arrow Function Button </button>
        </div>
    );
};



export default Arrow;