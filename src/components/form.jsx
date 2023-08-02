import '../css/form.css';
import BanIcon from '../svg/ban.svg';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTodo } from '../Actions';

const todo={
    task : "",
    completeTodo : false,
    id: "",
}

const Form=()=>{
    const dispatch= useDispatch();
    const todos= useSelector(state=> state?.todos);
    const editTodoId = useSelector(state=> state?.editTodoId);

    const [taskTodo, setTaskTodo]=useState(todo);
    const [editTodoObj, setEditTodoObj]= useState(todo);

    
    useEffect(()=>{

        if (editTodoId !== 0){
            const etodo = (todos?.find(item=> item.id === editTodoId));
            setEditTodoObj({...todo,
                        task: etodo?.task,
                        id: etodo?.id});
            setTaskTodo({...todo,
                        task: etodo?.task,
                     })
        }
    },[])
    
    
    const onChangeText=(e)=>{
        const input=e.target;
        if(editTodoId !== 0){

        }
        setTaskTodo({...todo, 
                    [input.name]: input.value,
                    id: Math.random()*100,
        })
        
    }

    const onAddButtonClick=(e)=>{

        e.preventDefault();
        if (taskTodo?.task){
            dispatch(createTodo(taskTodo))
            setTaskTodo({...todo})
        }
        else{
            setTaskTodo({...todo})
        }
        

    }

    const onBanButtonClick=()=>{
        setTaskTodo({...todo})

    }
    console.log("editTodoId", editTodoId);
    console.log("tasktodo", taskTodo);
    console.log("edittodoobj", editTodoObj);

   
    
    return(
            <form>
                <div className="input-container">
                <div className="input-div">
                    <input type='text'value={taskTodo.task} name = "task" placeholder='make a task'
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