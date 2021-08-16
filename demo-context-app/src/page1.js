import React, {Component} from 'react';
import Page2 from "./page2";

class Page1 extends Component {
    render() {
        return (
            <div>
                <Page2 name={this.props.name}/>
            </div>
        );
    }
}

export default Page1;