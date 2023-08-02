import { chooseSelectionType, completeTodoType, createTodoType, deleteTodoType, editTodoType } from "../Actions";

const initialState={
    todos: [],
    filterTodos: [],
    editTodoId: 0,
    filterStatus: "all",
}
const TodoReducer=(state=initialState, action)=>{
    // console.log("state", state);
    // console.log("type", type);
    // console.log("payload", payload);

    switch (action.type){
        case createTodoType:
            return{
                ...state,
                todos: [...state.todos, action.payload],
             
            }
        case chooseSelectionType:
            return{
                ...state,
                filterStatus: action.payload
            }
        case deleteTodoType:

            return{
                ...state,
                todos: state.todos?.filter(todo=>{
                    return(todo.id !== action.payload)
                })
                

            
            }
        case completeTodoType:
            return{
                ...state,
                todos:  (state.todos?.map(todo=>{
                            if(todo.id == action.payload){
                                todo.completeTodo = !todo.completeTodo
                            }
                            return todo
                            })
                        )
            }

        case editTodoType:
            return{
                ...state,
                editTodoId: action.payload
            }
            

        }
    }    

export default TodoReducer;