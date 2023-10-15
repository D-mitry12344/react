import { useState } from 'react';

function DeleteList(props){
	const people = props.people;

	function deleteItem(){
		let array = people
	
		
		for(let i = 0 ; i< array.length ; i++){
			if(array[i].check){
				let arrayOne = array.slice(0, i);
		        let arrayTwo = array.slice(i+1);
		         array[i].id = -1;
		        array=[...arrayOne, ...arrayTwo];
		        i--;
			}
		}
		for(let i = 0 ; i< array.length ; i++){
			array[i].id= i+1;
			array[i].check = false;
		}
		props.setPeople([...array])
	}

	function checkItem(){
		let array = people
		array.forEach((item)=>{
             item.class='completed';
             item.check= true;
            props.setPeople([...array])
         })
	}

	return(
		<div>
        	<button onClick={deleteItem}>Delete</button>
        	<button onClick={checkItem}>Check</button>
        </div>
      )
}

export default DeleteList;