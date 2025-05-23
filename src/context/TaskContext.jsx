// context/TaskContext.js
import { createContext, useState, useEffect, useRef } from "react";

export const TaskContext = createContext();

export default function TaskProvider({ children }) {
  const storedTasks = localStorage.getItem("tasks");

  const [tasks, setTasks] = useState(
    storedTasks ? JSON.parse(storedTasks) : [
      { id: 1, name: "Amir mohammd", completed: false },
    ]
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState(false);
  const [toggleOpen, setToggleOpen] = useState(false);
  const [Edit, setEdit] = useState(false);
  const [taskBeingEdited, setTaskBeingEdited] = useState(null);
  const [taskSelected, setTaskSelected] = useState(null);

  const idcontre = useRef(2);

  const AddTask = (taskName) => {
    const newTask = {
      id: idcontre.current++,
      name: taskName,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskStatus = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const DeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    setToggleOpen(false);
    setOpen(false);
    setTaskSelected(null);
  };

  const EditTask = (id, newName) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, name: newName } : task
      )
    );
    setEdit(false);
    setTaskSelected(null);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        AddTask,
        DeleteTask,
        toggleTaskStatus,
        filter,
        setFilter,
        setOpen,
        open,
        toggleOpen,
        setToggleOpen,
        setEdit,
        Edit,
        EditTask,
        taskBeingEdited,
        setTaskBeingEdited,
        taskSelected, // task object not just id
        setTaskSelected,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
