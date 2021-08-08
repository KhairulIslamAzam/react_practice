import React, {Component} from 'react';

class Condition1 extends Component{

    constructor(){
        super()

        this.state={
            name:true
        }
    }

    render(){

        if(this.state.name == true){
            return(<h1>hello true</h1>)
        }else{
            return(<h1>hello false</h1>)
        }

    }
}

export default Condition1