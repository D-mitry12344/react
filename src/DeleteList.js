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

	function checkItem(){
		if(check){
			let array = people
			array.forEach((item)=>{
				if(item.pick){item.check= false;
					setCheck(false)
				}
		        props.setPeople([...array])

		     })
		}else{
			let array = people
			array.forEach((item)=>{
				if(item.pick){
					item.check= true;
					setCheck(true)
				}
		        props.setPeople([...array])
		     })
		}
		
	}

	return(
			<div className='btns-global' >
	        	<button onClick={deleteItem}>Delete Pick</button>
	        	<button onClick={pickAllItem}>All Pick</button>
	        	<button onClick={checkItem}>Check Pick</button>
	        </div>
      )
}

export default DeleteList;