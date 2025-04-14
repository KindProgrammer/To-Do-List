import React from 'react';
import './style.css';

type ToDoTitleProps = {
    title: string
}

const ToDoTitle: React.FC<ToDoTitleProps> = ({ title }) => {
    return (
        <div>
            <h1 className='title'>
                {title}
            </h1>
        </div>
    );
}

export default ToDoTitle;