import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

let people = [{p:'123', id:1},{p:'123', id:2}]


function handlerClick(e) {
    if(e.target.className){
      e.target.className ='';
    }else{
       e.target.className ='completed';
    }
}


function DeleteClick(e){
  for ( let i=0 ; i < people.length; i++){
     if(people[i].p === e.target.parentElement.firstChild.textContent){
      people.splice(i,i)
      e.target.parentElement.remove()
      return people
    }
  }
}




function addClick(e){
  let obg = {
    p: String(e.target.parentElement.firstChild.value),
    id: people.length+1
  }
  people.push(obg);
  console.log(people)
  App()
}


function List(){
  let listItems = people.map(person =>
    <li key={person.id} onClick={handlerClick}>
        <p>{person.p}</p>
        <button onClick={DeleteClick}>X</button>
    </li>
  );
  return <ul>{listItems}</ul>
}




function App() {
  return (
    <div className="App">
      <div>
        <input type="text"/>
        <button onClick={addClick}>ADD</button>
      </div>
      <div>
        <List />
      </div>
    </div>
  );
}

export default App;
