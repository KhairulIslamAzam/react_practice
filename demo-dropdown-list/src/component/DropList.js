import React, { Component } from 'react';

class DropList extends Component {
    constructor(){
        super()

        this.state = {

            city1: "Chittagong",
            city2: "Dhaka",
            city3: "Barishal",
            city4: "Khulna",
            cityShow: " ",

            autoSelect: "Chittagong"
        }
    }

    onchangeHandler = (event)=>{
      
        var myValue = event.target.value;

        this.setState({
            cityShow: myValue,
            autoSelect: myValue
        })
    }

    render() {
        return (
            <div>

                <p>{this.state.cityShow}</p>
                <select value={this.state.autoSelect} onChange={this.onchangeHandler}>

                   <option>{this.state.city2}</option>
                   <option>{this.state.city3}</option>
                   <option>{this.state.city4}</option>
                </select>
            </div>
        );
    }
}

export default DropList;