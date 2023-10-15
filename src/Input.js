import { useState } from 'react';

function Input(props){
	const people = props.people
	const [newList, setNewList] = useState('');
	function changeInput(e){
		setNewList(e.target.value);
	}

	function addClick(){
		
	    let obg = {
	       p: newList,
	       id: people.length+1,
	       check: false,
    	   class: ''
	    }
	    props.setPeople([...people, obg])
	  }

	return(
		<div>
			<input onChange={changeInput} type="text"/>
        	<button onClick={addClick}>ADD</button>
        </div>
      )
}

export default Input;