
import { updateTodos, updateFilterTodos, updateStatus, updateEditTodo, updateInputText, updateDeleteTodo } from "../Actions";

const initialState={
    todos : [],
    filterTodos: [],
    status: "",
    inputText: "",
    editTodo: "",
}

const TodoReducer=(state=initialState, action)=>{
    switch (action.type){
        case updateInputText:
            return{

            }
        case updateTodos:
            return{

            }
        case updateFilterTodos:
            return{

            }
        case updateStatus:
            return{

            }
        case updateEditTodo:
            return{

            }
        case updateDeleteTodo:
            return{

            }
    }


}

export default TodoReducer;