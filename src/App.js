import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import List from './List';
import Input from './Input';

function App() {
  const [people, setPeople] = useState([{p:'123', id:1},{p:'123', id:2}]);
  return (
    <div className="App">
      <Input people={people} setPeople={setPeople} />
      <List people={people} setPeople={setPeople} />
    </div>
  );
} 


export default App;
  