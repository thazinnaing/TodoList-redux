import React from 'react';
import "../css/list.css";
import ListItem from './listItem';
import Selectionbox from './selectionBox';

import { useSelector } from 'react-redux';



const ListTodo=()=>{
  const todos=useSelector(state=>state?.todos)

  console.log("todos", todos);

    return(
        <div className="todo-container">
        <div className="todo-content">
          {
            todos?.map(todo=>{
              return(<ListItem todo={todo} key={todo.id}/>)
            })
          }

        </div>
        <div className="selection">

          {todos && <Selectionbox/>}
         
        </div>
      </div>

    )
}

export default ListTodo;