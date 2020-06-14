import React, {Component} from 'react';

class State extends Component  {
    constructor(){
        super();
        this.state = {
            name: 'Nahian',
            age: '25',
            email: 'nazifa@gmail.com'
        }
    }
    changeName = (a)=> {
        this.setState({name: a});
    }
    render(){
        return (
            <div>
                <h1>Name: {this.state.name}</h1>
                <h1>Age: {this.state.age}</h1>
                <h1>Email: {this.state.email}</h1>
                <button onClick={this.changeName.bind(this, "Rain")}>Change Name</button>
            </div>
        );
    }
};

export default State;