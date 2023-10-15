import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import List from './List';
import Input from './Input';
import DeleteList from './DeleteList';
function App() {
  const [people, setPeople] = useState([{
    p:'123', id:1,
    check: false,
    class: ''
  },{
    p:'123', id:2 ,
    check: false,
    class: ''
  }]);
  return (
    <div className="App">
      <Input people={people} setPeople={setPeople} />
      <List people={people} setPeople={setPeople} />
      <DeleteList people={people} setPeople={setPeople} />
    </div>
  );
} 


export default App;
  