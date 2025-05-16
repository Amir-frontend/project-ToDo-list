import React from 'react';
import Home from './pages/Home';
import TaskProvider from './context/TaskContext';

export default function App() {
  return (
    <div>
      <TaskProvider>
      <Home/>
      </TaskProvider>
    </div>
  )
}
