import React, { Component } from 'react';

class JsonList extends Component {
    render() {

       const myJsonList = [
            {
                city: "ctg",
                zip: "5000"
            },

            {
                city: "dhk",
                zip: "5090"
            },

            {
                city: "co",
                zip: "5320"
            }
        ]

        const myCity = myJsonList.map((myCityName) =>{
            return <option>{myCityName.city}</option>
        })
        const myCityZip = myJsonList.map((myCityZip) =>{
            return <option>{myCityZip.zip}</option>
        })

        return (
            <div>
                <select>{myCity}</select>
                <select>{myCityZip}</select>
            </div>
        );
    }
}

export default JsonList;