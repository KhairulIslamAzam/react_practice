import React, {Component} from 'react';
import Page3 from "./page3";

class Page2 extends Component {
    render() {
        return (
            <div>
                <Page3 name={this.props.name}/>
            </div>
        );
    }
}

export default Page2;