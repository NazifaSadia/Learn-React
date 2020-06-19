import React, { Component } from 'react';
import ReactTable from 'react-table';
// import 'react-table/react-table.css';


class MyTable extends Component {
    render() {
        const tableData=[{name:"Nahian", age:"27"}, {name:"Sadia", age:"27"}, {name:"Nazifa", age:"25"}];
        const col=[{Header:"Name",accessor: "name"}, {Header:"Age",accessor: "age"}];

        return (
            <div>
                <ReactTable>
                    data ={tableData}
                    columns ={col}
                    {/* koyta kore row show hobe */}
                    defaultPageSize={2} 
                    pageSizeOptions={[2,4,6,8,10]}
                </ReactTable>
                
            </div>
        );
    }
}

export default MyTable;