import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class FindDOMNode extends Component {

    changeIMG= ()=> {
        var image = document.getElementById("imgID");
        ReactDOM.findDOMNode(image).src = "https://images.pexels.com/photos/697259/pexels-photo-697259.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
    }

    render() {
        return (
            <div>
                <button className="btn btn-primary" onClick={this.changeIMG}>Change Image</button><br/>
                <img id= "imgID" src="https://images.pexels.com/photos/4108125/pexels-photo-4108125.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
            </div>
        );
    }
}

export default FindDOMNode;