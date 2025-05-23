// components/MenuButton.js
import React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import { TaskContext } from '../context/TaskContext';
import { useContext } from 'react';
import '../styles/style.css';
import Buttondelete from './Buttondelete';

export default function MenuButton({ task }) {
  const {
    toggleOpen,
    setToggleOpen,
    setEdit,
    setTaskBeingEdited,
    setTaskSelected
  } = useContext(TaskContext);

  return (
    <>
      {!toggleOpen && (
        <>
          <div onClick={() => setTaskSelected(null)} className='Homemanu'></div>
          <div className='navmanu'>
            <button className='buttonA' onClick={() => {
              setEdit(true);
              setTaskBeingEdited(task);
              setTaskSelected(null);
            }}>
              <EditIcon /> Edit
            </button>

            <button className='buttonB' onClick={() => setToggleOpen(true)}>
              <DeleteOutlineIcon /> Delete
            </button>
          </div>
        </>
      )}

      {toggleOpen && <Buttondelete task={task} />}
    </>
  );
}
