import { useState } from 'react';
import flowers from './flowers.webp';

function Input(props){
	const people = props.people
	const [newList, setNewList] = useState('');
	function changeInput(e){
		setNewList(e.target.value);
	}

	function addClick(){
		if(newList !== '' && newList !== ' '){
			let obg = {
		       p: newList,
		       id: people.length+1,
		       pick: false,
	    	   class: ''
		    }
		    props.setPeople([...people, obg])
		}
	  }

	return(
		<div className='add-new-item'>
			<img src={flowers} />
			<input onChange={changeInput} type="text"/>
        	<button onClick={addClick}>Добавить задачу</button>
        	<img src={flowers} />
        </div>
      )
}

export default Input;