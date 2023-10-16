import { useState } from 'react';
import deleteBtn from './delete.png';

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


  function handlerClick(pers) {
    let array = people;
    
        if(pers.pick){
          array.forEach((item)=>{
            if(item.id === pers.id){
              item.pick=false;
            }
            props.setPeople([...array])
          })
          
        }else{

          array.forEach((item)=>{
            if(item.id === pers.id){
              item.pick= true;
            }
            props.setPeople([...array])
          })
        }

  }



  let listItems = people.map(person =>
    <li className={person.pick ? 'completed' : ''} key={person.id}  >
        <input type="checkbox" checked={person.pick} onClick={()=>handlerClick(person)}/>
        <p>{person.p}</p>
        <img src={deleteBtn} onClick={deleteClick(person.id)} />
    </li>
  );
  return <ul className="lists">{listItems}</ul>
}

export default List;