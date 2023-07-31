export const createTodoType = "CREATE-TODO";
export const chooseSelectionType = "chooseSelection"

export const createTodo=(todo)=>{
    return{
        type: createTodoType,
        payload: todo,
    }
    
}
export const chooseSelection =(chooseStatus)=>{
    return{
        type: chooseSelectionType,
        payload: chooseStatus
    }

}