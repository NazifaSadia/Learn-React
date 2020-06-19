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
    onSubmitHandler = (event)=> {
        alert(this.state.username);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler} action="">
                    <p>My Name is: </p>
                    <p>{this.state.username}</p>
                    <input name="username" onChange={this.onChangeHandler} type="text" placeholder="Your Name" /><br/><br/>
                    <input type="submit" value="Submit Now" />
                </form>
            </div>
        );
    }
}

export default Form2;