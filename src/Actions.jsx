export const createTodoType = "CREATE-TODO";
export const chooseSelectionType = "CHOOSE_SELECTION";
export const deleteTodoType ="DELETE_TODO";
export const completeTodoType = "COMPLETE_TODO";

export const createTodo=(todo)=>{
    return{
        type: createTodoType,
        payload: todo,
    }
}

export const chooseStatusSelection =(chooseStatus)=>{
    return{
        type: chooseSelectionType,
        payload: chooseStatus
    }
}

export const deleteTodo = (id)=>{
   
    return{
        type: deleteTodoType,
        payload: id
    }
}

export const completeTodo=(id)=>{
    return{
        type: completeTodoType,
        payload: id
    }
}