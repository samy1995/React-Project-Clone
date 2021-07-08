import React from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState } from "react"

function App () {
  const [tasks, setTasks] = useState([
    {
         id: 1,
         text:'Doctors Appointment',
         day:'July 10th 2021 at 2:30 PM',
         reminder:true,
    },
    {
         id: 2,
         text:'Meeting at School',
         day:'July 8th 2021 at 8:30 AM',
         reminder:true,
    },
    {
         id: 3,
         text:'Grocery Shopping',
         day:'July 12th 2021 at 6:30 PM',
         reminder:false,
    }
]
)
//Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1 ;
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}
//Delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle reminder
const toggleReminder = (id) => {
 setTasks(tasks.map((task) => 
 task.id === id ? { ...task, reminder: 
  !task.reminder} : task
  )
  )
}
 return (
    <div className = 'container'>
      <Header  />
      <AddTask onAdd={addTask}/>
      {tasks.length > 0 ? ( 
      <Tasks tasks = {tasks} 
      onDelete={deleteTask} onToggle={toggleReminder} /> ) : 
      ( 'No Tasks To Show' ) }
    </div>
  )
}

export default App;
