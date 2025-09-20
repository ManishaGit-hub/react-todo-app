import React from 'react'
import Styles from './todo.module.css'
import TaskItem from './TaskItem'

const TaskList = ({tasks,onToggle,onDelete,onEdit}) => {
    if(tasks.length === 0){
        return <p style={{marginTop:20}}>No Tasks yet!</p>
    }
  return (
    <>
        <ul id="taskList" className={Styles.taskList}>
            {tasks.map((task)=>(
                <TaskItem key={task.id}
                task={task}
                onToggle={onToggle}
                onDelete={onDelete}
                onEdit={onEdit}
                />
            ))}
        </ul>
    </>
  )
}

export default TaskList