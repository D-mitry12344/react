import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import List from './List';
import Input from './Input';
import DeleteList from './DeleteList';
function App() {
  const [people, setPeople] = useState(JSON.parse(localStorage.getItem("lists")));
  /*[{
    p:'123', id:1,
    pick: false,
    class: ''
  },{
    p:'123', id:2 ,
    pick: false,
    class: ''
  }])*/ 



  localStorage.setItem("lists", JSON.stringify(people));

  return (
    <div className="App">
      <Input people={people} setPeople={setPeople} />
      <List  people={people} setPeople={setPeople} />
      <DeleteList people={people} setPeople={setPeople} />
    </div>
  );
} 


export default App;
  