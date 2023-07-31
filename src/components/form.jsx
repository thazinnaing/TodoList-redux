import '../css/form.css';
import BanIcon from '../svg/ban.svg';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTodo } from '../Actions';

const todo={
    task : "",
    completeTodo : false,
    id: Math.random()*100,
}

const Form=()=>{
    const dispatch= useDispatch();
    const [taskTodo, setTaskTodo]=useState(todo);
    console.log("tasktodo",taskTodo);

    const onChangeText=(e)=>{
        const input=e.target;
        console.log(input.value);
        setTaskTodo({...todo, task: input.value})
        
    }

    const onAddButtonClick=()=>{
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