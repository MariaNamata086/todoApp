import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPen,faTrashCan, faCircleCheck } from '@fortawesome/free-solid-svg-icons'

const Task =({tasks,setEditData,deleteTask,checkOff})=>{
  return(
    <>
    { tasks && tasks.map((task,index)=>{
        return(
          <>
          <div key = {task.id} 
          className = "container1">
           <div className="task">
            <span className="tasknumber">{index+1}</span>
            <span className = "tasktext" id = {task.status? 'done': ''}>{task.text}</span>
           </div>
          <div className = "icons">
              <span title = "ckeck-off" 
               onClick={()=>{checkOff(task.id)}}>
                <FontAwesomeIcon icon = {faCircleCheck}/></span>
          {task.status? null:(<span            
           title="Edit" onClick={()=>setEditData(
             {id:task.id,
             text:task.text,}
           )}><FontAwesomeIcon icon = {faPen}/></span>) }           
           <span title="Delete" 
           onClick = {()=>deleteTask(task.id)}><FontAwesomeIcon 
           icon = {faTrashCan}/></span>
          </div>
         </div>
         
       </>
          
        )
      })
    }

    </>
    
  )
   
  
}
export default Task