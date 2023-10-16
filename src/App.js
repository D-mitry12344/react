import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import List from './List';
import Input from './Input';
import DeleteList from './DeleteList';
function App() {
  const [people, setPeople] = useState([]);
  let listStorage=JSON.parse(localStorage.getItem("lists"))
  if(listStorage){
    setPeople(listStorage);
  }else{
    localStorage.setItem("lists",people)
    let array=[{
      p:'Написать декларацию независимости', id:1,
      pick: false,
      class: ''
    },{
      p:'Убрать за котом', id:2 ,
      pick: false,
      class: ''
    }];
    setPeople(array)
  }


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
  