import { useState, useEffect } from 'react'
import './ToDoList.css'
import TaskItem from '../components/TaskItem'

function ToDoList() {
    const [input, setInput] = useState("")
    const [field, setField] = useState([])
    const [error, setError] = useState(0)

    function handleTaskAdd() {
        if (input != "" && !field.includes(input)) {
            setField((tasks) => [...tasks, input]);
        }
    }

    function handleTaskDelete(taskToDelete) {
        setField((tasks) => tasks.filter((task) => task !== taskToDelete))
    }

    function checkError() {
        if (input.match(/^[a-zA-Z]+$/) || input === "") {
            setError(0);
        }
        else {
            setError(1)
        }
    }

    useEffect(() => { checkError() }, [input]);

    return (
        <div className="container">
        <h1>To-Do List</h1>
        <div className="input-area">
          <input onChange={(e) => {setInput(e.target.value)}} className={(error) ? 'error' : ''} />
          {(error) 
            ? <p className=''>No Special Characters or Numbers Allowed</p>
            : <button onClick={handleTaskAdd}>Add</button> 
            }
        </div>
  
        <div className="task-container">
          {field.map((task, index) =>
            <TaskItem key={index} task={task} onDelete={handleTaskDelete} />
          )}
        </div>
      </div>
    )
}

export default ToDoList