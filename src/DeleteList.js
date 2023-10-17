import { useState } from 'react';

function DeleteList(props){
	const people = props.people;
	const [pick, setPick] = useState(false);
	const [check, setCheck] = useState(false);
	function deleteItem(){
		let array = people
	
		
		for(let i = 0 ; i< array.length ; i++){
			if(array[i].pick){
				let arrayOne = array.slice(0, i);
		        let arrayTwo = array.slice(i+1);
		         array[i].id = -1;
		        array=[...arrayOne, ...arrayTwo];
		        i--;
			}
		}
		for(let i = 0 ; i< array.length ; i++){
			array[i].id= i+1;
			array[i].pick = false;
		}
		props.setPeople([...array])
	}

	function pickAllItem(){
		let array = people
		
		if(pick){
			array.forEach((item)=>{
	             item.pick= false;
	            props.setPeople([...array])
	         })
			setPick(false)
		}else{
			array.forEach((item)=>{
	             item.pick= true;
	            props.setPeople([...array])
	         })
			setPick(true)
		}
		
	}

	return(
			<div className='btns-global' >
	        	<button onClick={deleteItem}>Удалить выполненные</button>
	        	<button onClick={pickAllItem}>Все выполнить</button>
	        </div>	
      )
}

export default DeleteList;