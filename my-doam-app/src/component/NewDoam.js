import React, { Component } from 'react';
import  ReactDOM  from 'react-dom';

class NewDoam extends Component {

    changeName(){

        var container = document.getElementById("myId")
        var element = <h1>Khairul Islam Azam froam React doam</h1>
        var callback = function calFunct() {
            alert("changing to react dom")
        }

        ReactDOM.render(element, container, callback);

    }

    render() {
        return (
            <div>

                <button onClick={this.changeName}>change name</button>
                <h1 id="myId"> azam</h1>
            </div>
        );
    }
}

export default NewDoam;