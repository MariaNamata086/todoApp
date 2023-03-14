const Updateform =({cancelUpdate,updateTasks,editTask,editData})=>{
    return(
        <>
         <div className="update-div" >
       <input type = 'text' value = {editData && editData.text} 
       onChange = {(event) => editTask(event)}/>
      <div>
  <button onClick={updateTasks}>Update
  </button>
  <button style={{backgroundColor:"orange"}}
   onClick = {cancelUpdate}>cancel
   </button>
</div>
</div>
        </>
    )
}
export default Updateform