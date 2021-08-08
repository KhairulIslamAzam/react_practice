import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import about from './pages/about'
import home from './pages/home'
import portfolio from './pages/portfolio'
import {Route, Link, BrowserRouter as Router} from '../node_modules/react-router-dom'
// import { Route } from 'react-router-dom/cjs/react-router-dom.min';


const myRouter = (
  
  <Router>
      <div>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          {/* <Link to="/contact">Contact</Link> */}
          <Link to="/portfolio">Portpolio</Link>
        </ul>
      </div>

      <Route exact path="/" component={App}/>
      <Route path="/about" component={about}/>
      {/* <Route path="/contact" component={contact}/> */}
      <Route path="/portfolio" component={portfolio}/>

  </Router>
)


ReactDOM.render(myRouter, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
