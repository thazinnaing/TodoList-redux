import React from "react";
import '../css/selectionBox.css';
import { useDispatch } from "react-redux";


const Selectionbox=()=>{

    const dispatch=useDispatch();

    return(
        <select className="select"
            onClick={()=>{}}
        >
            <option>All</option>
            <option>Completed</option>
            <option>Uncompleted</option>
        </select>
    )
}

export default Selectionbox;