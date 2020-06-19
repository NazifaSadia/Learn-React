import React, { Component } from 'react';

class JsonList extends Component {
    render() {
        const myList = [
            {
                city: "Dhaka",
                zip : 6000
            },
            {
                city: "Chittagong",
                zip : 2000
            },
            {
                city: "Barishal",
                zip : 4000
            }
        ]

        const dataItemsCity = myList.map(data => {
            return <option>{data.city}</option>
        })
        const dataItemsZip = myList.map(data => {
            return <option>{data.zip}</option>
        })
        return (
            <div>
                <select>{dataItemsCity}</select>
                <select>{dataItemsZip}</select>
            </div>
        );
    }
}

export default JsonList;