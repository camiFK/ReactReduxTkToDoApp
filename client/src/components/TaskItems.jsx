import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../features/taskSlice";
import { Link } from "react-router-dom";

const TaskItems = () => {
  const allTasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div>
      <header>
        <h1>My To Do App</h1>
        <Link to="/create">Create task</Link>
      </header>
      {allTasks.map((task) => (
        <div key={task.id}>
          <h1>{task.title}</h1>
          {/* <p>{task.id}</p> */}
          <p>{task.description}</p>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
          <Link to={`/edit/${task.id}`}>Edit</Link>
        </div>
      ))}
    </div>
  );
};

export default TaskItems;
