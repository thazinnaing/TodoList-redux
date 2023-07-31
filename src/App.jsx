import React from "react";
import './App.css';
import Form from './components/form.jsx';
import ListTodo from './components/listTodo.jsx';
import { useDispatch, useSelector } from "react-redux";



const App=()=>{
//   const dispatch = useDispatch();
//   const state = useSelector((state)=> state);

//   useEffect(() => {
//     if(localStorage.getItem('todos')){
//       const todosFromLocalStorage= JSON.parse(localStorage.getItem('todos'));
//       if(todosFromLocalStorage){
//         dispatch(updateTodosAction(todosFromLocalStorage))
//       }
//     }
//   },[])

//   useEffect(()=>{
//     if(todos.length>0){
//       localStorage.setItem('todos',JSON.stringify(todos));
//     }
//     else{
//       localStorage.removeItem("todos");
//     }
//   },[todos]);

//   useEffect(()=>{
//     switch(state.status){
//       case "Completed": 
//         setfiltertodos(todos.filter(todo=>todo.completeAction));
//         break;

//       case "Uncompleted":
//         setfiltertodos(todos.filter(todo=>!todo.completeAction));
//         break;

//       default:
//         setfiltertodos(todos);
//         break;
//   }

//  }, [state.status, state.todos])


  return(
    <div className="container">
      <h1>List for your daily routine</h1>
      <Form/>
      <ListTodo/>
    </div>

  )
}

export default App;