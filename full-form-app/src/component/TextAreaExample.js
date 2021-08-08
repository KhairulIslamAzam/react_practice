import React, { Component } from 'react';

class TextAreaExample extends Component {
    
    constructor(){
        super()

        this.state = {

            textArea: " "
        }
    }

    onChange =(event)=>{

        var txtArea = event.target.value

        this.setState({
            textArea: txtArea
        })
    }
    render() {
        return (
            <div>
                <textarea placeholder="Your message" onChange={this.onChange}/>
                <p>{this.state.textArea}</p>
            </div>
        );
    }
}

export default TextAreaExample;