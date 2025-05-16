import React from 'react'
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import '../styles/style.css';

import { TaskContext } from '../context/TaskContext';
import { useContext , useState } from 'react';

export default function TaskInput() {

  const{ AddTask } = useContext(TaskContext)
  const[ Newtask , setNewtask ] = useState("")

  const handelclick = ()=>{
    if(Newtask.trim() !== ""){
      AddTask(Newtask)
      setNewtask("")
    }
  }

  return (
    <div>
      <h1 className='title'>To-Do list</h1>
            <hr className='hr'/>
            <div className='icons'>
            <PlaylistAddCheckIcon id="icon" fontSize="large" />
            </div>
            
      <div className='contenar-Add'>
        <div className='contenar'>
            <input onKeyDown={(e)=>{
        if(e.key === 'Enter')handelclick()}}  className='input'  type='text' value={Newtask} onChange={(e)=>setNewtask(e.target.value)} />
            <button className='button' onClick={handelclick} >Add task</button>
            </div></div>
    </div>
  )
}
