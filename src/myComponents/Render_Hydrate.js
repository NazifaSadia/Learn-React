import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Render_Hydrate extends Component {
    change() {
        var container = document.getElementById("myID");
        var element = <h1>My name is Sadia. I am from ReactDOM</h1>
        var callBack = function(){
            alert("Hi I am callBack");
        }

        //ReactDOM.render(element, container, callBack);
        ReactDOM.hydrate(element, container, callBack);
    }

    render() {
        return (
            <div>
                <button onClick={this.change}>Change</button>
                <h1 id="myID">Nahian</h1>
            </div>
        );
    }
}

export default Render_Hydrate;