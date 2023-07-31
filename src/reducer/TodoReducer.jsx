import { chooseSelectionType, completeTodoType, createTodoType, deleteTodoType } from "../Actions";

const initialState={
    todos: [],
    filterTodos: [],
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
            const newTodos= state.todos?.filter(todo=>{
                todo.id !== action.payload
            })
            return{
                ...state,
                todos: newTodos
            }
        case completeTodoType:
            return{
                ...state,
                todos:  (state.todos?.map(todo=>{
                            if(todo.id == action.payload){
                                !todo.completeTodo
                            }
                            return todo
                            })
                        )
            }
            

        }
    }    

export default TodoReducer;