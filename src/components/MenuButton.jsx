import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import { TaskContext } from '../context/TaskContext'; 
import { useContext } from 'react';
import '../styles/style.css';
import Buttondelete from './Buttondelete';


export default function MenuButton({ task }) {
  const { 
    setOpen,
    toggelopen,
    setToggelopen ,
    setEdit,
    setTaskBeingEdited

  } = useContext(TaskContext);

  
  
  return (
    <>
  
  
  {/* القائمة الجانبية */}
  { !toggelopen && (<><div onClick={() => {setOpen(false)}} className='Homemanu'></div>
    <div className='navmanu'>
        
    <button className='buttonA' onClick={() => {
  setEdit(true);
  setTaskBeingEdited(task); // ⬅️ هنا بتحدد أي مهمة بتعدلها
  setOpen(false);
}}>
  <EditIcon /> Edit
</button>


      <button className='buttonB' onClick={() =>setToggelopen(true)}>
        <DeleteOutlineIcon /> Delete
      </button>
    </div></>
  )}

  

  {/* نافذة التأكيد للحذف */}
  {toggelopen && (
    <Buttondelete task={task} />
  )}
   
</>

  );
}
