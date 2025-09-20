import React from 'react'
import Styles from './todo.module.css'

const TaskItem = ({task,onToggle,onDelete,onEdit}) => {
  return (
    <>
    <li className={`${task.priority} ${task.completed? Styles["completed"]:""}`}>
      <span onClick={()=>onEdit(task.id)}>{task.text}</span>
        
    <div className={Styles["task-buttons"]}>
      <button aria-label={task.completed ? "Mark as not completed" : "Mark as completed"}
          onClick={() => onToggle(task.id)}>
        <i className="fa-solid fa-check" aria-hidden="true"></i>
      </button>
      <button aria-label="Delete task" onClick={() => onDelete(task.id)}>
          <i className="fa-solid fa-trash" aria-hidden="true"></i>
      </button>
    </div>
    </li>
    </>
  )
}

export default TaskItem