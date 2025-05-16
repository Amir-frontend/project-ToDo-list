
import { createContext, useState,useEffect }from "react";

export const TaskContext = createContext();

export default function TaskProvider({ children }) {

  const storedTasks = localStorage.getItem("tasks");

const [tasks, setTasks] = useState(storedTasks ? JSON.parse(storedTasks) : [
  { id: 1, name: "Amir mohammd", completed: false },
 
]);

useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);


  const [filter, setFilter] = useState("all"); 
  const [open,setOpen] = useState(false)
  const [toggelopen , setToggelopen] = useState(false);
  const [Edit,setEdit] = useState(false);
  const [taskBeingEdited, setTaskBeingEdited] = useState(null);
  

  const AddTask = (taskName) => {
    const newTask = {
      id: Date.now(),
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
    setToggelopen(false)
    setOpen(false)
  };


  const EditTask = (id, newName) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, name: newName } : task
      )
    );console.log(id)
    setEdit(false); // إغلاق نافذة التعديل بعد الحفظ
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
    toggelopen,
    setToggelopen,
    setEdit,
    Edit,
    EditTask,
    taskBeingEdited,
    setTaskBeingEdited
    

  }}
>

      {children}
    </TaskContext.Provider>
  );
}
