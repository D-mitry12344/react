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

  function handlerClick(pers) {
        let array = people;
        if(pers.class){

          array.forEach((item)=>{
            if(item.id === pers.id){
              item.class='';
              item.check=false;
            }
            props.setPeople([...array])
          })

        }else{

          array.forEach((item)=>{
            if(item.id === pers.id){
              item.class='completed';
              item.check= true;
            }
            props.setPeople([...array])
          })

        }

      
  }



  let listItems = people.map(person =>
    <li className={person.class} key={person.id}  >
        <input type="checkbox" checked={person.check} onClick={()=>handlerClick(person)}/>
        <p>{person.p}</p>
        <button onClick={deleteClick(person.id)}>X</button>
    </li>
  );
  return <ul>{listItems}</ul>
}

export default List;