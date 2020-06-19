import React, { Component } from 'react';

class List extends Component {
    
    render() {
        const country = ['Bangladesh', 'Canada', 'China', 'Australia'];
        const num = [1,2,3,4,5,6,7,8,9];
        const dataItems = num.map( (mydata) => {
            return <option>{mydata+10}</option>
        })
        return (
            <div>
                <select>{dataItems}</select>
            </div>
        );
    }
}

export default List;