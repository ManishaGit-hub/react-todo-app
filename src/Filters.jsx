import React from 'react'
import Styles from './todo.module.css'

const Filters = ({filter,setFilter}) => {
  return (
    <div className={Styles["filter-buttons"]} style={{marginTop:12}}>
        <button onClick={()=>setFilter("all")} className={filter === "all"? Styles["active-filter"]:""}>All</button>
        <button onClick={()=>setFilter("pending")} className={filter === "pending"? Styles["active-filter"]:""}>Pending</button>
        <button onClick={()=>setFilter("completed")} className={filter==="completed"? Styles["active-filter"]:""}>Completed</button>
    </div>                        
  )
}

export default Filters