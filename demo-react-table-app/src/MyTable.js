import React, {Component} from 'react';
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import axios from "axios";

class MyTable extends Component {

    constructor() {
        super();

        this.state = {

            tableInformation: []
        }
    }

    componentWillMount() {
        axios.get('https://restcountries.eu/rest/v2/all').then(response=>{
            this.setState({tableInformation: response.data})
        }).catch(error=>{
            alert("something went wrong");
        })
    }

    render() {

        // const tableData = [{name: "azam", age: "26"}, {name: "farok", age: "29"}, {name: "sakibb", age: "23"}]
        const tableData = this.state.tableInformation
        const col = [{Header:"Country Name", accessor: "name"}, {Header: "Capital", accessor: "capital"},
            {Header: "Population", accessor: "population"}]

        return (
            <div>
                <ReactTable
                    data={tableData}
                    columns={col}
                    defaultPageSize={10}
                    pageSizeOptions={[10,20,30,40,50]}
                />
            </div>
        );
    }
}

export default MyTable;