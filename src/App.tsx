import './App.css';
import React from 'react';

import getUniqueId from './utils';

import ToDoTitle from './components/ToDoTitle';
import ToDoList from './components/ToDoList';
import ToDoPanel from './components/ToDoPanel';
import ToDoControls from './components/ToDoControls';

const items: Array<ToDo> = [
  // { id: getUniqueId(), isDone: false, task: 'Приготовить пельмени', isDisplayed: true },
  // { id: getUniqueId(), isDone: false, task: 'Подмести полы', isDisplayed: true },
  // { id: getUniqueId(), isDone: false, task: 'Спрятать труп', isDisplayed: true }
]

export type ToDo = {
  id: number
  isDone: boolean
  task: string
  isDisplayed: boolean
}

function App() {
  const [todos, setTodos] = React.useState(items);
  const leftTasks = todos.length > 0 ? todos.filter((t) => t.isDone === false).length : 0;

  const showActive = () => {
    setTodos((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.isDone === false) {
          task.isDisplayed = true;
        } else {
          task.isDisplayed = false;
        }
  
        return task;
      })
    })
  }

  const showDone = () => {
    setTodos((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.isDone === true) {
          task.isDisplayed = true;
        } else {
          task.isDisplayed = false;
        }
  
        return task;
      })
    })
  }

  const showAll = () => {
    setTodos((prevTasks) => {
      return prevTasks.map((task) => {
        task.isDisplayed = true;
  
        return task;
      })
    })
  }
  
  const addNewTask = (task: string) => {
    setTodos((prevTasks) => {
      const newTask = {
        id: getUniqueId(),
        isDone: false,
        task: task,
        isDisplayed: true,
      };

      return [...prevTasks, newTask];
    })
  }

  const deleteTask = (id: number) => {
    setTodos((prevTasks) => { 
      return prevTasks.filter((task) => task.id !== id) 
    });
  }

  const setDone = (id: number) => {
    setTodos((prevTasks) => {
      return prevTasks.map((task) => {
        if ( task.id === id ) {
          return {...task, isDone: !task.isDone}
        }

        return task;
      })
    })
  }

  const delDoneTasks = () => {
    setTodos((prevTasks) => {
      return prevTasks.filter((task) => task.isDone !== true);
    })
  }

  return (
    <div className='container'>
      <ToDoTitle title='To-Do List' />
      <ToDoList 
        items={todos} 
        onDel={deleteTask} 
        onDone={setDone}
      />
      <ToDoControls
        leftTasks={leftTasks} 
        delDoneTask={delDoneTasks} 
        showActive={showActive} 
        showComplited={showDone} 
        showAll={showAll}
      />
      <ToDoPanel addTask={addNewTask} />
    </div>
  );
}

export default App;
