import React, { Component } from 'react';

class SignUp extends Component {
    constructor(){
        super();
        this.state= {
            fname : "",
            lname : "",
            mobile : "",
            email : ""
        }
    }

    onChangeHandler = (e)=> {
        // name gulo ke dhorlam
        var inputName = e.target.name;
        // value gulo ke dhorlam
        var inputValue = e.target.value;

        // state e value set kora
        this.setState({[inputName]:inputValue});

        //Validation start
        if(inputName === "fname"){
            let namePattern = /^([a-zA-Z]){2,30}$/;
            if(!namePattern.test(inputValue)) {
                this.setState({fname: "First Name is not valid"});
            }
        }

        if(inputName === "lname"){
            let namePattern = /^([a-zA-Z]){2,30}$/;
            if(!namePattern.test(inputValue)) {
                this.setState({lname: "Last Name is not valid"});
            }
        }
        if(inputName === "email"){
            let emailPattern = /\S+@\S+\.\S+/;
            if(!emailPattern.test(inputValue)) {
                this.setState({email: "Email is not valid"});
            }
        }
        if(inputName === "mobile"){
            if(!Number(inputValue)) {
                this.setState({mobile: "Mobile no. is not valid"});
            }
        }
    }

    render() {
        return (
            <div>
                <p>First Name: {this.state.fname}</p>
                <p>Last Name: {this.state.lname}</p>
                <p>Mobile: {this.state.mobile}</p>
                <p>Email: {this.state.email}</p>

                <form action="">
                    <input onChange={this.onChangeHandler} name="fname" type="text" placeholder="First Name"/> <br/><br/>
                    <input onChange={this.onChangeHandler} name="lname" type="text" placeholder="Last Name"/> <br/><br/>
                    <input onChange={this.onChangeHandler} name="mobile" type="text" placeholder="Mobile no."/> <br/><br/>
                    <input onChange={this.onChangeHandler} name="email" type="text" placeholder="Email"/> <br/><br/>
                    <input name="submit" type="submit" value="Submit Now"/>
                </form>
            </div>
        );
    }
}

export default SignUp;