import React, {Component} from 'react';

class Condition1 extends Component {
    constructor(){
        super()
        this.state = {
            login: true
        }
    }

    render(){
        return (
            this.state.login ? <button>Log Out</button> : <button>Log In</button>
        );
    }
};

export default Condition1;