/// <reference types="vite-plugin-svgr/client" />

import './style.css';
import React from 'react';
import Cross from '../../assets/Cross.svg?react';
import Check from '../../assets/Check.svg?react';

type ToDoItemProps = {
    isDone: boolean
    task: string
    id: number
    onDel: ( id: number ) => void
    onDone: ( id: number ) => void
}

const ToDoItem = ({ isDone, id, task, onDel, onDone }: ToDoItemProps) => {
    const hanleDel = (id: number): void => {
        onDel(id);
    }

    const hanleDone = (id: number): void => {
        onDone(id);
    }

    return (
        <div className='task' title={task}>
            <div className={`task-text ${isDone ? 'done' : ''}`}>{task}</div>
            <div className='task-control-btns'>
                <button className='task-control-btn check' onClick={() => { hanleDone(id) }} ><Check className='icon' /></button>
                <button className='task-control-btn cross' onClick={() => { hanleDel(id) }} ><Cross className='icon' /></button>
            </div>
        </div>
    );
}

export default ToDoItem;