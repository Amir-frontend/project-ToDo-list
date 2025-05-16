import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import '../styles/style.css';

export default function ButtonDelete({ task }) {
  const { DeleteTask, setTogelopen, setOpen } = useContext(TaskContext);

  const cancel = () => {
    setTogelopen(false);
    setOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      DeleteTask(task.id);
    }
  };

  const handleDelete = () => {
    DeleteTask(task.id);
  };

  return (
    <div className='ButtonDelete' tabIndex={0} onKeyDown={handleKeyDown}>
      <p className='titel'>Are you sure you want to delete this</p>
      <div className='contaner'>
        <button className='Item' onClick={cancel}>Cancel</button>
        <button className='Item' onClick={handleDelete}>Ok</button>
      </div>
    </div>
  );
}
