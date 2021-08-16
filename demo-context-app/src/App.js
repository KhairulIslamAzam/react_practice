import logo from './logo.svg';
import './App.css';
import Page1 from "./page1";
import {RootProvider} from "./MyContext";
function App() {
  return (
    <div className="App">
        <RootProvider value="from context">
            <Page1 />
        </RootProvider>
    </div>
  );
}

export default App;
