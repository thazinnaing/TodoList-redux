import React from "react";
import '../css/selectionBox.css';
import { useDispatch } from "react-redux";


const Selectionbox=()=>{

    const dispatch=useDispatch();

    const chooseSelection=(e)=>{
        

    }

    return(
        <select className="select"
            onClick={chooseSelection}
        >
            <option>All</option>
            <option>Completed</option>
            <option>Uncompleted</option>
        </select>
    )
}

export default Selectionbox;