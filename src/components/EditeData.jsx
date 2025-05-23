import React, { useContext, useState, useEffect } from 'react';
import { TaskContext } from '../context/TaskContext';

export default function EditeData() {
  const { EditTask, setEdit, taskBeingEdited, setTaskBeingEdited } = useContext(TaskContext);
  const [Newtask, setNewtask] = useState("");

  useEffect(() => {
    if (taskBeingEdited) {
      setNewtask(taskBeingEdited.name);
    }
  }, [taskBeingEdited]);

  const handleSave = () => {
    if (!taskBeingEdited) return;
    EditTask(taskBeingEdited.id, Newtask);
    setTaskBeingEdited(null);
    setEdit(false);
  };

  const handleCancel = () => {
    setTaskBeingEdited(null);
    setEdit(false);
  };

  return (
    <div className='ButtonDelete'>
      <p className='titel'>Modify Task</p>
      <input
        className='EditInput'
        type='text'
        value={Newtask}
        onChange={(e) => setNewtask(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleSave();
        }}
      />
      <div className='contaner'>
        <button className='Item' onClick={handleCancel}>Cancel</button>
        <button className='Item' onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}
