
export const ADD_TASK = 'ADD_TASK'

export const addTask = text => ({
    type: ADD_TASK,
    payload:{text} 
})


export const DELETE_TASK = 'DELETE_TASK'


export const deleteTask = taskid => ({
    type: DELETE_TASK,
    payload:taskid 
})


export const UPDATE_ISEDITED = 'UPDATE_ISEDITED'

export const updateIsEdited = taskId =>({
    type: UPDATE_ISEDITED,
    payload:taskId
})

export const UPDATE_TASK = 'UPDATE_TASK'

export const updateTask = task =>({
    type: UPDATE_TASK,
    payload:task
})