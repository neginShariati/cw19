import React, { useState } from "react";
import { useToDoList } from "../Context";

import "./style.css";

function ToDoList() {
  const { addTask } = useToDoList();
  const {title , setTitle}  = useState("")
  const handleTask = (e) => {
    e.preventDefault();
    addTask(title)
  }
  return (
    <form className="container" onSubmit={handleTask}>
      <h3>Tack Manager</h3>
      <input type="text" placeholder="Add Tasks..." onChange={(e) => setTitle(e.target.value)}/>
      <button type="submit">Add Task</button>
      <button>Clear</button>
    </form>
  );
}

export default ToDoList;
