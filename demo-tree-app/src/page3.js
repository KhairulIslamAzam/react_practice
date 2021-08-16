import React, {Component} from 'react';
import Page4 from "./page4";

class Page3 extends Component {
    render() {
        return (
            <div>
                <Page4 name={this.props.name}/>
            </div>
        );
    }
}

export default Page3;