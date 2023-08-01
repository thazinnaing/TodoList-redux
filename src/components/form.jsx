import '../css/form.css';
import BanIcon from '../svg/ban.svg';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTodo } from '../Actions';

const todo={
    task : "",
    completeTodo : false,
    id: "",
}

const Form=()=>{
    const dispatch= useDispatch();
    const [taskTodo, setTaskTodo]=useState(todo);
    console.log("tasktodo",taskTodo);

    const onChangeText=(e)=>{
        const input=e.target;
        setTaskTodo({...todo, 
                    [input.name]: input.value,
                    id: Math.random()*100,
        })
        
    }

    const onAddButtonClick=(e)=>{
        e.preventDefault();
        console.log(taskTodo)
        dispatch(createTodo(taskTodo))
    }

    const onBanButtonClick=()=>{
        setTaskTodo({...todo})

    }
    
    return(
            <form>
                <div className="input-container">
                <div className="input-div">
                    <input type='text' value={taskTodo.task} name = "task" placeholder='make a task'
                        onChange={onChangeText} 
                    />
                </div>

                <div className='plus-btn'>
                    <button onClick={onAddButtonClick}> + </button>
                </div>

                <div className="ban">
                    <img src={BanIcon} alt="ban" onClick={onBanButtonClick} />
                </div>

                </div>
            </form>
    )
    
}

export default Form;