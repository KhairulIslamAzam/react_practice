import React, {Component} from 'react';

class Page3 extends Component {
    constructor({match}) {
        super();

        this.state = {

            myName: match.params.username
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.myName}</h1>
            </div>
        );
    }
}

export default Page3;