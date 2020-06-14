import React, {Component} from 'react';

class Welcome extends Component {
    doThisFromClass(a) {
        // alert("Button is clicked from class");
        alert(a);
    }

    render () {
        return (
            <div>
                <button onClick={this.doThisFromClass.bind(this, "Button is clicked from class")}>Click Me from Class</button>
                <h1>Hello {this.props.name} & Age: {this.props.age}</h1>
            </div>
            
        );
    };
};

export default Welcome;