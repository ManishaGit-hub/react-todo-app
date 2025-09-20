import React,{useState,useEffect} from 'react'
import InputSection from './InputSection'
import TaskList from './TaskList'
import Styles from './todo.module.css'
import Actions from './Actions'
import Filters from './Filters'

const TodoApp = () => {
    const [tasks,setTasks]=useState(()=>{
        try{
            const raw = localStorage.getItem("tasks");
            return raw?JSON.parse(raw):[];
        }
        catch(err){
            console.error("failed to parse saved tasks:",err);
            return [];
        }
    });

    useEffect(()=>{
        if(tasks.length === 0){
            try{
                const raw = localStorage.getItem("tasks");
                if(raw) setTasks(JSON.parse(raw));
            }
            catch{}
        }
    },[]);
    const [filter,setFilter]=useState("all");
    const [darkMode,setDarkMode]=useState(
        localStorage.getItem("darkMode")==="enabled"
    );

    //save tasks when updated
    useEffect(()=>{
        try{
        localStorage.setItem("tasks",JSON.stringify(tasks));
        }catch(err){
            console.error("failed to save tasks:",err);
        }
    },[tasks]);

    //save dark mode+apply class
    useEffect(()=>{
        localStorage.setItem("darkMode",darkMode?"enabled":"disabled");
        document.body.classList.toggle("dark-mode",darkMode);
    },[darkMode]);

    //addtask
    const addTask=(text,priority)=>{
        const newTask={id:Date.now(),text,priority,completed:false};
        setTasks((t)=>[...t,newTask]);
    }

    //toggle complete
    const toggleComplete=(id)=>{
        setTasks((prev)=>
            prev.map((t)=>(t.id===id? {...t,completed:!t.completed}:t))
        );
    };

    //delete task
    const deleteTask=(id)=>{
        setTasks((prev)=>prev.filter((t)=> t.id !== id));
    };

    //clear actions
    const clearAll=()=>{
        if(window.confirm("clear all tasks?")) setTasks([]);
    };

    const clearCompleted=()=>{
        setTasks((p)=>p.filter((t) => !t.completed));
    };

    //visible tasks based on filter
    const visibleTasks = tasks.filter((t)=>{
        if(filter === "pending") return !t.completed;
        if(filter === "completed") return t.completed;
        return true;
    });

  return (
    <>
        <div className={Styles.container}>
            <h1>To-Do List</h1>
            <InputSection onAddTask={addTask}/>

            <TaskList tasks={visibleTasks}
            onToggle={toggleComplete}
            onDelete={deleteTask}
            onEdit={(id)=>console.log("edit placeholder",id)}/>
               
            <Filters filter={filter} setFilter={setFilter}/>

            <Actions clearAll={clearAll} clearCompleted={clearCompleted}/>

            <p id="taskCount">{tasks.length} tasks, {tasks.filter(t=>t.completed).length} completed</p>
            
            <button className={Styles.darkModeBtn} onClick={()=>setDarkMode(d => !d)} title='Toggle dark mode'>{darkMode?'🌞':'🌙'}</button>
        </div>
    </>
  )
}

export default TodoApp