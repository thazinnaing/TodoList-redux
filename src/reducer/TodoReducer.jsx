import { createTodoType } from "../Actions";

const initialState={
    todos: [],
    filterTodos: [],
    filterStatus: "all",
}
const TodoReducer=(state=initialState, {type,payload})=>{
    // console.log("state", state);
    // console.log("type", type);
    // console.log("payload", payload);

    switch (type){
        case createTodoType:
            return{
                ...state,
                todos: [...state.todos, payload],
                filterTodos: todos,
            }
        }
           

 }


export default TodoReducer;