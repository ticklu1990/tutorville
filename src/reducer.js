
import { ADD_TASK,DELETE_TASK,UPDATE_ISEDITED,UPDATE_TASK } from "./action";
import taskId from './util/taskId'
 
export const tasks = (state=[],action)=>{
    switch(action.type){

        case ADD_TASK: {
          
            const newTask = {
                text:action.payload.text,
                isCompleted:false,
                isEdited:false,
                taskId:taskId()
            } 

            return state.concat(newTask)
        }

        case DELETE_TASK: {
          
          return state.filter(task=>task.taskId !== action.payload)
        }
        

        case UPDATE_ISEDITED:{

            return state.map((task) => {
                if(task.taskId == action.payload){
                  return{
                      ...task,
                      isEdited:true
                  }      
                }

                return task
            })
        }

        case UPDATE_TASK:{

            return state.map((task) => {
                if(task.taskId == action.payload.taskId){
                  return{
                      ...task,
                      isEdited:false,
                      text:action.payload.task
                  }      
                }

                return task
            })

            
        }  

          
        
        default:
            return state 
        
        
    }
}