export const createTodoType = "CREATE-TODO";

export const createTodo=(todo)=>{
    return{
        type: createTodoType,
        payload: todo,
    }
    
}