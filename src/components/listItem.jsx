import React from "react";
import "../css/list.css";

import TickIcon from "../svg/tick.svg";
import TrashIcon from "../svg/trash.svg";
import DoublecheckIcon from "../svg/double-check.svg";
import EditIcon from '../svg/edit.svg';
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../Actions";

const ListItem=({todo})=>{
    const dispatch=useDispatch();

    const deleteHandler=()=>{
        dispatch(deleteTodo(todo.id))
    }
  
    return(
        <div className="todo">
                <div className="text">{todo.task}</div>

                <div className="edit">
                    <img src={EditIcon} alt="edit"
                    onClick={()=>{}}
                    />
                </div>

                <div className="tick">
                    <img src={`${todo.completeTodo? DoublecheckIcon : TickIcon}`} alt="tick"
                    onClick={()=>{}}
                    />
                </div>
                <div className="trash">
                    <img src={TrashIcon} alt="Trash"
                    onClick={deleteHandler}
                    />
                </div>
            </div>
    )
}

export default ListItem;