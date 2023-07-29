export const updateTodos = "UPDATE_TODOS";
export const updateFilterTodos = "UPDATE_FILTER_TODOS";
export const updateStatus = "UPDATE_STATUS";
export const updateEditTodo = "EDIT_TODO";
export const updateInputText = "UPDATE_INPUT_TEXT";
export const updateDeleteTodo = "DELETE_TODO";

export const updateTodosAction=()=> ({type: updateTodos});
export const updateFilterTodosAction=()=> ({type: updateFilterTodos});
export const updateStatusAction=()=> ({type: updateStatus});
export const editTodoAction=()=> ({type: updateEditTodo});
export const updateInputTextAction=()=> ({type: updateInputText});
export const deleteTodoAction = () => ({type: updateDeleteTodo});
