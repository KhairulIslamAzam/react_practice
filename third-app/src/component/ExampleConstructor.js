import React, {Component} from 'react';

class Welcome extends Component{

    constructor(){
        super()

        this.state={
            name: "khairul islam azam",
            age: "28",
            occupation: "Engineer"

        }
    }

    render(){
        return <div>

            <h1>{this.state.name}</h1>
            <h1>{this.state.age}</h1>
            <h1>{this.state.occupation}</h1>
        </div>
    }
}

export default Welcome