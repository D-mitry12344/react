import { useState } from 'react';

function List(props){
  const people = props.people;
  const flexPeople = [...people]
  
  function deleteClick(id){
          return ()=>{
            let arrayOne = flexPeople.slice(0,id-1);
             let arrayTwo = flexPeople.slice(id);
            props.setPeople([...arrayOne, ...arrayTwo])
          }
  }

  function handlerClick(e) {
      if(e.target.className){
        e.target.className ='';
      }else{
         e.target.className ='completed';
      }
  }

  let listItems = people.map(person =>
    <li key={person.id} onClick={handlerClick}>
        <p>{person.p}</p>
        <button onClick={deleteClick(person.id)}>X</button>
    </li>
  );
  return <ul>{listItems}</ul>
}

export default List;