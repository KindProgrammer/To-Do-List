import React from 'react';
import { useState } from 'react';
import './style.css';

const defaultState = {
    task: ''
}

type ToDoPanelProps = {
    addTask: (task: string) => void
}

const ToDoPanel = ({ addTask }: ToDoPanelProps) => {
    const [todo, setTodo] = useState(defaultState)

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
       const { name, value } = event.target;
    
       setTodo({ ...todo, [name]: value.trim() })
    }

    const handleAdd = (): void => {
        if (todo.task !== '') {
            addTask(todo.task);
            setTodo({ task: '' });
        }
    }

    return (
        <div className='panel'>
            <input className='input' type="text" id='task' name='task' value={todo.task} onChange={onChange} placeholder='Введите текст задачи' />
            <button onClick={() => { handleAdd() }} className='submit-btn' type='submit' >Добавить</button>
        </div>
    );
}

export default ToDoPanel;