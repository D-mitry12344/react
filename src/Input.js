import { useState } from 'react';

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
		       check: false,
		       pick: false,
	    	   class: ''
		    }
		    props.setPeople([...people, obg])
		}
	  }

	return(
		<div className='add-new-item'>
			<input onChange={changeInput} type="text"/>
        	<button onClick={addClick}>ADD</button>
        </div>
      )
}

export default Input;