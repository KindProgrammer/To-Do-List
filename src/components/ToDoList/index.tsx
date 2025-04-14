import './style.css';
import React from 'react';
import ToDoItem from '../ToDoItem';
import { ToDo } from '../../App';

type ToDoListProps = {
    items: Array<ToDo>
    onDel: (id: number) => void
    onDone: (id: number) => void
}

const ToDoList = ({ items, onDel, onDone }: ToDoListProps ) => {

    const displayedTasks = items
        .filter((item) => item.isDisplayed === true)
        .map((item) => {
            return (
                <li key={item.id}>
                    <ToDoItem isDone={item.isDone} id={item.id} task={item.task} onDel={onDel} onDone={onDone} />
                </li>
            );
    })

    return (
        <div>
            <ul className='tasks-list'>
                {displayedTasks.length === 0 ? 'Пусто': displayedTasks}
            </ul>
        </div>
    );
}

export default ToDoList;