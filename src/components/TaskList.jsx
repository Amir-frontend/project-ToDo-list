import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import TaskItem from './TaskItem';
import '../styles/style.css';

export default function TaskList() {
  const { tasks, filter } = useContext(TaskContext);

  const filteredTasks = tasks.filter(task => {
    if (filter === "all") return true;
    return task.completed === filter;
  });

  let message = "";
  if (tasks.length === 0) {
    message = "There are no tasks";
  } else if (filteredTasks.length === 0 && filter === true) {
    message = "No completed tasks";
  } else if (filteredTasks.length === 0 && filter === false) {
    message = "No uncompleted tasks";
  }

  return (
    <>
      {filteredTasks.length === 0 ? (
        <p className='NullTask'>{message}</p>
      ) : (
        <ul className='tasks'>
          {filteredTasks.map(task => (
            <TaskItem key={task.id} task={task} />
          ))}
        </ul>
      )}
    </>
  );
}
