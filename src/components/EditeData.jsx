import React, { useContext, useState } from 'react';
import { TaskContext } from '../context/TaskContext';
import '../styles/style.css';

export default function UpdateData({ task }) {
  const { EditTask, setEdit } = useContext(TaskContext);
  const [Newtask, setNewtask] = useState(task?.name || "");

  return (
    <div className='ButtonDelete'>
      <p className='titel'>Modify Task</p>
      <input 
        className='EditInput'
        type='text' 
        value={Newtask} 
        onChange={(e) => setNewtask(e.target.value)} 
        onKeyDown={(e) => {
          if (e.key === 'Enter') EditTask(task.id, Newtask);
        }}
      />
      <div className='contaner'>
        <button className='Item' onClick={() => setEdit(false)}>Cancel</button>
        <button className='Item' onClick={() => EditTask(task.id, Newtask)}>Save</button>
      </div>
    </div>
  );
}
