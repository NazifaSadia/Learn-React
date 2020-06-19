import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
    constructor(){
        super();
        this.state ={
            postData : '',
            postResult : ''
        }
    }
    onChangeHandler = (e)=>{
        var myData = e.target.value;
        this.setState({postData:myData});
    }
    onClickHandler = (e)=>{
        axios.post('', this.state.postData)
        .then(res =>{
            this.setState({postResult:res.data})
        })
        .catch(error=> {
            alert("Something went wrong");
        })
    }
    render() {
        return (
            <div>
                <p>{this.state.postResult}</p>
                <input onChange={this.onChangeHandler} type="text"/>
                <button onClick={this.onClickHandler}>Send</button>
            </div>
        );
    }
}

export default Post;