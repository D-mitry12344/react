import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function handlerClick(e) {
    if(e.target.className){
      e.target.className ='';
    }else{
       e.target.className ='completed';
    }
}


const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];



function DeleteClick(e){
  console.log(e.target.parentElement.firstChild);
}



const listItems = people.map(person =>
    <li onClick={handlerClick}>
        <p>{person}</p>
        <button onClick={DeleteClick}>X</button>
    </li>

  );

function App() {
  return (
    <div className="App">
      <div>
        <input type="text"/>
        <button>ADD</button>
      </div>
      <div>
        <ul >{listItems}</ul>;

      </div>
    </div>
  );
}

export default App;
