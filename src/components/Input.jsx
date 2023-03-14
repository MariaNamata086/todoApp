const Inputform =({value,setValue,addTask})=>{
    return(
        <>
         <div className="input-div">
      <input type= 'text'  value = {value}
       placeholder = 'Enter your task' 
       onChange = {(event) => setValue(event.currentTarget.value)}/>
      <button onClick={addTask} 
      disabled = {value.length < 1}>Add Task</button>
    </div>
        </>
    )
}
export default Inputform