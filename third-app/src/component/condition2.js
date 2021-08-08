import React, {Component} from 'react';

class Condition2 extends Component{

    constructor(){
        super()

        this.state={
            name:true
        }
    }

    render(){

        return(
            this.state.name?
            (
               <h1> condtion true</h1>
            ) :
            (
                <h1> condtion false</h1>
            )
        )

    }
}

export default Condition2