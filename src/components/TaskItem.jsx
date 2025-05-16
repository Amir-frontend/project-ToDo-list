import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import UndoIcon from '@mui/icons-material/Undo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import '../styles/style.css';
import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import MenuButton from './MenuButton';
export default function TaskItem({ task }) {

    const{toggleTaskStatus , open , setOpen} = useContext(TaskContext);
    

  return (
    <>
    <li className='task'>
      {task.completed ? (
        <p className='complet'>{task.completed === true ? (task.name):(<p>مفيش مهام</p>)}</p>
      ) : (
        <p style={{ margin: 0 }}>{task.name}</p>
      )}
      <div className='contenar-buttons'>
      <button onClick={()=>setOpen(true)} className='taskMinu'><MoreVertIcon /></button>
      
      <button onClick={() => toggleTaskStatus(task.id)} className='taskMinu'>
        {task.completed ? (
          <UndoIcon style={{ fontSize: "22px" }} />
        ) : (
          <CheckIcon style={{ fontSize: "23px" }} />
        )}
      </button>
      </div>
    </li>
        
        {open && <MenuButton task={task}/>}

    </>
  );
}
