import React, { Component } from 'react';

class Form2 extends Component {
    constructor() {
        super();
        this.state = {
            username: ""
        }    
    }

    onChangeHandler = (event)=> {
       var myName = event.target.name;
       var myValue = event.target.value;
       this.setState({[myName]:myValue});
    }

    render() {
        return (
            <div>
                <form action="">
                    <p>My First Form: </p>
                     <p>{this.state.username}</p>
                    <input name="username" onChange={this.onChangeHandler} type="text" placeholder="Your Name" /><br/><br/>
                    <input type="submit" value="Submit Now" />
                </form>
            </div>
        );
    }
}

export default Form2;