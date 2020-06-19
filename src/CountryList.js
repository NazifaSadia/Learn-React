import React, { Component } from 'react';
import axios from 'axios';

class CountryList extends Component {
    constructor() {
        super();
        this.state = {
            myData : []
        }
    }
    // To get data from server
    componentDidMount(){
        axios.get('https://restcountries.eu/rest/v2/all')
        .then(response => {
            // console.log(response.data);
            this.setState({myData:response.data});
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        const myList = this.state.myData;
        const countryName = myList.map(list => {
            return <li>{list.name}</li>
        })
        return (
            <div>
                <ul>
                    {countryName}
                </ul>
            </div>
        );
    }
}

export default CountryList;