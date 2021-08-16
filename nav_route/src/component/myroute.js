import React, {Component} from 'react';
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import Home from "./pages/home";
import Notfound from "./pages/notfound";
import {Route} from "react-router-dom";


class Myroute extends Component {
    render() {
        return (
            <div>
                <switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/page1" component={Page1}/>
                    <Route exact path="/page2" component={Page2}/>
                    <Route exact path="/page3/:username" component={Page3}/>
                    {/*<Route component={Notfound}/>*/}
                </switch>
            </div>
        );
    }
}

export default Myroute;