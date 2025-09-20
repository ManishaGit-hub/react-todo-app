import React from 'react'
import Styles from './todo.module.css'

const Actions = ({clearAll,clearCompleted}) => {
  return (
     <div className={Styles['action-buttons']} style={{marginTop:10}}>
        <button type="button" id="clearAll" onClick={clearAll}>Clear All</button>
        <button id="clearCompleted" onClick={clearCompleted}>Clear Completed</button>
    </div>                        
  )
}

export default Actions