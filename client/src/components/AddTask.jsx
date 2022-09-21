import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addTask, updateTask } from '../features/taskSlice';
import { v4 as uuid } from "uuid"
import {useNavigate, useParams} from 'react-router-dom'

const AddTask = () => {

  const [task, setTask] = useState({
    title: "",
    description: "",
  })

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const allTasks = useSelector((state) => state.tasks);

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if(params.id){
      dispatch(updateTask(task))
    }
    dispatch(addTask({
      ...task,
      id: uuid(),
    }))
    navigate('/')
  }

  useEffect(() => {
    if(params.id) {
      setTask(allTasks.find(task => task.id === params.id))
    }
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <label>Task:</label>
        <input
         type="text"
         name="title"
         value={task.title}
         placeholder="Title"
         onChange={handleChange}
          />

        <label>Description:</label>
        <textarea 
        type='text'
        name='description'
        value={task.description}
        placeholder="Description"
        onChange={handleChange}
         />

        <button type="submit">Add Task</button>
      </form>    
    </div>
  )
}

export default AddTask
