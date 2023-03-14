import React, { useState } from "react";
import Task from './components/Task.jsx';
import Updateform from './components/Update.jsx';
import Inputform from './components/Input.jsx';

function App() {
  const idValue = Math.random();
  

  const[value,setValue] = useState('');
  const [tasks,setTasks] = useState([]);
  const [editData,setEditData] = useState('')

   const addTask = ()=>{
    if(value){
     const num = idValue+1
     const newEntry = {
      id:num,
      text:value,
      status: false,
     }
     setTasks([...tasks,newEntry]);    
     setValue('');
    }
   }

  const deleteTask = (id)=>{
   const filteredArray = tasks.filter((task)=>{
    return task.id !== id;});
   setTasks(filteredArray);
   setEditData('');
  }

  const editTask = (event)=>{
   let newEntry = {
    id: editData.id,
    text: event.currentTarget.value,
    status:false,
   }
   setEditData(newEntry);
  }

  const updateTasks = ()=>{
   let filteredArray = [...tasks].filter((task)=>task.id !== editData.id);
   const updatedTasks = [...filteredArray,editData];
   setTasks(updatedTasks);
   setEditData('');
  }

  const cancelUpdate = ()=>{
     setEditData('');
  }

  const checkOff = (id)=>{
    let doneTask = tasks.map((task)=>{if(task.id === id)
      { return({...task, status:!task.status})}
      return task;
    })  
    setTasks(doneTask);
   }
  return(
    <>
    <div className = 'component'>
    <h1>To-do list</h1>   
    {editData?(
     <Updateform
     cancelUpdate = {cancelUpdate}
     updateTasks = {updateTasks}
     editTask = {editTask}
     editData = {editData}
     />
     ):(<Inputform 
      value = {value}
      setValue = {setValue} 
      addTask = {addTask}  />)}  

     < Task tasks = {tasks}
      setEditData = {setEditData}
     deleteTask = {deleteTask}
     checkOff = {checkOff}/>
    </div>
   
    </>
    
  ) 
}

export default App;