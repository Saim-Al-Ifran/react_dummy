import React, { useState } from 'react'

const CreateTask = ({addNewTask}) => {
  const [text,setText] = useState('');  
  return (
    <div>
          <input 
          type="text"
          value={text}
          placeholder='type your tasks'
          onChange={(e)=>{
              setText(e.target.value);
          }}
          /> 
           
          <button
           onClick={()=>{
            if(text){
                addNewTask(text); 
                setText('');
            }else{
                 alert("empty input field ")
            }

           }}
          >
            Create Task
          </button>       
    </div>
  )
}

export default CreateTask;