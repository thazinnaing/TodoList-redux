import { chooseSelectionType, createTodoType } from "../Actions";

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
                filterStatus: payload
            }
        }
        
           

 }


export default TodoReducer;