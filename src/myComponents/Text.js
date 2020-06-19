import React, { Component } from 'react';

class Text extends Component {
    constructor() {
        super();
        this.state= {
            desc : "",
            userInput : ""
        }
    }

    onChangeHandler =(e)=> {
        var myText = e.target.value;
        this.setState({userInput: myText});
    }
    render() {
        return (
            <div>
                <textarea onChange={this.onChangeHandler} />
                <p>{this.state.userInput}</p>
            </div>
        );
    }
}

export default Text;
// Hello! I am Nazifa Sadia. I am highly talent, experienced, professional and comparative Software Engineer. i am working in programming and web world for more than 2 years.