import logo from './logo.svg';
import './App.css';
import List from './component/List';
import DropList from './component/DropList';
import JsonList from './component/JsonList';

function App() {
  return (
    <div className="App">

      {/* <DropList/> */}
      {/* <List/> */}
      <JsonList/>
    </div>
  );
}

export default App;
