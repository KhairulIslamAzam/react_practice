import React, {Component} from 'react';
import {ChildConsumer} from "./MyContext";

class Page4 extends Component {
    render() {
        return (
            <div>
                <h1>
                    <ChildConsumer>
                        {
                            mssage =>{
                                return mssage;
                            }
                        }
                    </ChildConsumer>
                </h1>
            </div>
        );
    }
}

export default Page4;