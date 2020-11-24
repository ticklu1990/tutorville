import React,{ useState } from 'react'

import {useDispatch,useSelector}  from 'react-redux';

import {deleteTask, updateIsEdited, updateTask} from '../action';

import {Button} from 'react-bootstrap';


function TaskList() {
    const tasks = useSelector(state =>state.tasks)
    
   const [isInput,setIsInput] = useState(false)
   const [taskId,setTaskId] = useState(0)
   const [updatedTask,setUpdatedTask]=useState('')



    const dispatch = useDispatch()


    console.log(tasks)


     const handleDelete = (taskId) =>{
     dispatch(deleteTask(taskId))

    }  


    const handleEdit = (task) => {
        console.log(isInput)
        setTaskId(task.taskId)
        setUpdatedTask(task.text)

        dispatch(updateIsEdited(task.taskId))

    } 


    const handleResubmit = (id) =>{
        //setUpdatedTask(task.text)

        let updatedTaskObj = {
           
           task:updatedTask,
           taskId:id
        }

        dispatch(updateTask(updatedTaskObj))
        setTaskId(0)
    } 
    
    const handleChange = (e) =>{
        console.log(e.target.value)
        setUpdatedTask(e.target.value)
    }


   

    return (
       
        <div className="todolist-cls">
             
            {(
                tasks.map((item,idx)=>
                <li key={idx}>

                { taskId == item.taskId ? 

                <input value={updatedTask} onChange={handleChange}/>: 
                <span>{item.text}</span>
                }


                 { item && item.isEdited == false?

                 <Button className="md-2 ml-4" variant="outline-info" 
                onClick={()=> handleEdit(item)}>EDIT</Button>:

                 <Button className="md-2 ml-4" variant="outline-info" 
                onClick={()=> handleResubmit(item.taskId)}>RESUBMIT</Button>
                 
                  
                 } 
                
               
                <Button className="md-2 ml-4" variant="outline-danger"
                onClick={()=> handleDelete(item.taskId)}>DELETE</Button>  
                </li>
                
                )
            )}
        </div>
    
    )
}

export default TaskList

