import React,{useState} from 'react'
import Styles from './todo.module.css'

const InputSection = ({onAddTask}) => {

    const [text,setText]=useState("");
    const [priority,setPriority]=useState("low");

    const handleAdd=()=>{
        if(!text.trim()){
            alert("Please enter a task...");
            return;
        }
        onAddTask(text.trim(),priority);
        setText("");
        setPriority("low")
    }

  return (
    <>
        <div className={Styles["input-section"]}>
            <input type="text" id="textInput" placeholder='Enter a new task...' value={text} onChange={(e)=>{setText(e.target.value)}} onKeyDown={(e)=>{e.key === 'Enter' && handleAdd()}}/>
            <select id="priorityInput" value={priority} onChange={(e)=>{setPriority(e.target.value)}}>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            <button id="addBtn" onClick={handleAdd} title="Add task">Add</button>
        </div>
    </>
  )
}

export default InputSection