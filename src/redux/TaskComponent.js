import React ,{ useState } from 'react';
import {useDispatch}  from 'react-redux';
import {addTask} from '../action';
import {Button} from 'react-bootstrap';


function TaskComponent() {
   
const[input, setInput] = useState('');

const dispatch = useDispatch();

const handleChange =(e)=>{
    
     setInput(e.target.value)

}
   
const handleTasks = () => {
    
     console.log(input)
     dispatch(addTask(input))
     //setInput('')
}


  return (
        <div>
            <input onChange={handleChange}/>
            <Button className="ml-2" onClick={handleTasks}variant="outline-primary">Submit</Button>
        </div>
    )
}

export default TaskComponent

