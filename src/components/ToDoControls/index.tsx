import React from 'react';
import './style.css';

type ToDoControlsProps = {
    leftTasks: number
    delDoneTask: () => void
    showActive: () => void
    showComplited: () => void
    showAll: () => void
}

const ToDoControls = ({ leftTasks, delDoneTask, showActive, showComplited, showAll }:ToDoControlsProps) => {
    const [ activeBtn, setActiveBtn ] = React.useState('all');

    return (
        <div>
            <div className='info'>
                Оставшихся задач: {leftTasks}
            </div>
            <div className='controls-btns'>
                <button 
                    onClick={() => { showAll(); setActiveBtn('all') }}
                    className={`controls-btn all-tasks-btn ${activeBtn === 'all' ? 'active-btn' : ''}`}>
                        Все
                </button>

                <button 
                    onClick={() => { showActive(); setActiveBtn('active') }}
                    className={`controls-btn all-tasks-btn ${activeBtn === 'active' ? 'active-btn' : ''}`}>
                        Активные
                </button>

                <button 
                    onClick={() => { showComplited(); setActiveBtn('done') }}
                    className={`controls-btn all-tasks-btn ${activeBtn === 'done' ? 'active-btn' : ''}`}>
                        Выполненные
                </button>

                <button 
                    onClick={() => { delDoneTask() }} 
                    className='controls-btn del-done-task-btn'>
                        Удалить выполненные
                </button>
            </div>
        </div>
    );
}

export default ToDoControls;