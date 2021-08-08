import logo from './logo.svg';
import './App.css';
import Welcome from './component/ExampleConstructor';
import Second1 from './component/Second';
import Condition1 from './component/condition1';
import Condition2 from './component/condition2';


function App() {
  return (
    <div className="App">
      
      <Welcome></Welcome>
      <Second1></Second1>
      <Condition1/>
      <Condition2/>
    </div>
  );
}

export default App;


