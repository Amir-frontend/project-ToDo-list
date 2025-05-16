import React from 'react'
import TaskInput from '../components/TaskInput';
import '../styles/style.css';
import FilterButtons from '../components/FilterButtons';
import TaskList from '../components/TaskList';
import { TaskContext } from '../context/TaskContext';
import EditeData from '../components/EditeData';
import { useContext } from 'react';

export default function Home() {
  const { Edit, taskBeingEdited } = useContext(TaskContext);


  return (
    <div className='container'>
      <TaskInput/>
      <FilterButtons/>
      <TaskList/>
      {Edit && taskBeingEdited && <EditeData task={taskBeingEdited} />}

    </div>
  )
}
