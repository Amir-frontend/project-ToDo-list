// components/TaskItem.js
import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import UndoIcon from '@mui/icons-material/Undo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import '../styles/style.css';
import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import MenuButton from './MenuButton';

export default function TaskItem({ task }) {
  const {
    toggleTaskStatus,
    taskSelected,
    setTaskSelected
  } = useContext(TaskContext);

  return (
    <>
      <li className='task'>
        {task.completed ? (
          <p className='complet'>{task.name}</p>
        ) : (
          <p style={{ margin: 0 }}>{task.name}</p>
        )}
        <div className='contenar-buttons'>
          <button onClick={() => toggleTaskStatus(task.id)} className='taskMinu'>
            {task.completed ? (
              <UndoIcon style={{ fontSize: "22px" }} />
            ) : (
              <CheckIcon style={{ fontSize: "23px" }} />
            )}
          </button>

          <button onClick={() => setTaskSelected(task)} className='taskMinu'>
            <MoreVertIcon />
          </button>
        </div>
      </li>

      {taskSelected?.id === task.id && <MenuButton task={task} />}
    </>
  );
}
