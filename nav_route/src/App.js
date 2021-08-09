import logo from './logo.svg';
import './App.css';
import Mynavigation from "./component/mynavigation";
import Myroute from "./component/myroute";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Mynavigation/>
            <Myroute/>
        </BrowserRouter>
    </div>
  );
}

export default App;
