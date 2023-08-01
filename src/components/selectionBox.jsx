import React from "react";
import '../css/selectionBox.css';
import { useDispatch } from "react-redux";
import { chooseStatusSelection } from "../Actions";


const Selectionbox=()=>{

    const dispatch=useDispatch();

    const chooseSelection=(e)=>{
        dispatch(chooseStatusSelection(e.target.value));

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