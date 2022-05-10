import React, { useState } from 'react';
// so need to Get MERN black belt, add, check off, delete

const Todo = (props) => {
    const[taskInfo, setTaskInfo] = useState({
        task:'',
        taskCompleted: false
    })

    const [taskList, setTaskList] = useState([]);

    const changeHandler = (e) => {
        let {...copyInfo} = taskInfo;

        setTaskInfo({...copyInfo, [e.target.name]: e.target.value})
        console.log(taskInfo)
    }

    const submitHandler = (e) => {

        e.preventDefault();

        let newTask = taskInfo;
        setTaskList(taskList => [...taskList, newTask])

        setTaskInfo({
            task: '',
            taskCompleted: false
        })
    }

    // function to toggle if a given task has been completed from false --> true
    const toggleCompleted = (e, idx) => {
        let [...copyList] = taskList;
        copyList[idx].taskCompleted = e.target.checked;
        
        setTaskList(copyList);
        console.log(taskInfo.taskCompleted);
        console.log(taskList);
    }


    const deleteTask = (e, idx) => {
        let filteredList = taskList.filter((task, i) => {
            return i != idx;
        })

        setTaskList(filteredList);
    }

    return (
        <>  
            <h1>Your To-Do List</h1>
            <form action="" onSubmit={ submitHandler }>
                <div className="form-group mb-2">
                    <label htmlFor="">Task:</label>
                    <input onChange={ changeHandler } name="task" type="text" value={ taskInfo.task } className="form-control" />
                </div>
                <input type="submit" value="Add Task" className="btn btn-dark" />

            </form>
            <hr />
            <div className="task-list">
                {
                    
                    taskList.map((taskObj, idx)=>{
                        return(
                            <div key={idx} className="todo-item">
                                <h3 style={{textDecoration: taskObj.taskCompleted? "line-through": "none"}}>{ taskObj.task }</h3>
                                <h4>Complete Task <input type="checkbox" onChange={ (e)=>toggleCompleted(e, idx) } /></h4>
                                <button onClick={ (e) => deleteTask(e, idx) } className="btn btn-dark">Delete Task</button>

                            </div>
                        )
                    })
                }
            </div>
        </>
    )

}
export default Todo;