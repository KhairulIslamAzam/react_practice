import React, {Component} from 'react';
import {Link, NavLink} from "react-router-dom";

class Mynavigation extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink exact to="/page1">Page 1</NavLink></li>
                    <li><NavLink exact to="/page2">Page 2</NavLink></li>
                    <li><NavLink exact to="/page3">Page 3</NavLink></li>

                </ul>
            </div>
        );
    }
}

export default Mynavigation;