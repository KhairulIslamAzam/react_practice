import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Second1 extends Component{

    constructor(){
        super()

        this.state = {
        
            name : "Khairul Islam",
        }
    }

    nameChange(a){
        this.setState({name:a})
    }

    render(){

        return <div>

            <h1>{this.state.name}</h1>
            <button onClick={this.nameChange.bind(this, "rohim")}>name change</button>
        </div>
    }
}

export default Second1;