import { useState } from 'react';
import flowers from './bottle.png';

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
			<h1>Список задач</h1>
			<div>
					<input placeholder='Написать задачу' onChange={changeInput} type="text"/>
					<img src={flowers} />
        			<button onClick={addClick}>Добавить</button>
        	</div>
        </div>
      )
}

export default Input;