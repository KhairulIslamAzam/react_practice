import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Page2 extends Component {
    render() {
        return (
            <div>
               <h1>page 2</h1>
                <button><Link to="/page3/KhairulIslam">Pass my name</Link></button>
            </div>
        );
    }
}

export default Page2;