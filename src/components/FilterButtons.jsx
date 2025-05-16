import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import '../styles/style.css';

export default function FilterButtons() {
  const { setFilter } = useContext(TaskContext);
  const [activeBtn, setActiveBtn] = useState("all");

  const handleClick = (filterValue) => {
    setFilter(filterValue);
    setActiveBtn(filterValue);
  };

  return (
    <div className='button-contenr'>

<button
        className={`Item ${activeBtn === true ? 'active' : ''}`}
        onClick={() => handleClick(true)}
      >
        ✅ Completed
      </button>

      <button
        className={`Item ${activeBtn === false ? 'active' : ''}`}
        onClick={() => handleClick(false)}
      >
        ⭕ Incomplete
      </button>

      <button
        className={`Item ${activeBtn === "all" ? 'active' : ''}`}
        onClick={() => handleClick("all")}
      >
        📋 All
      </button>

      <hr className='hr2' />
    </div>
  );
}
