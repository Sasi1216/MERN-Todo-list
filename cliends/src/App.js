import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Addtask from "./Components/Addtask";
import Todolist from "./Components/Todolist";
import Updatetask from "./Components/Updatetask";
function App() {
  const [todolist, settodolist] = useState([]);
  const [tasktoUpdate, setupdatetask] = useState({});
  const [showpopup, setshowpopup] = useState(false);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:7000/api/tasks")
      .then((res) => {
        settodolist(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const addtask = (newtask) => {
    settodolist([...todolist, newtask]);
  };
  const taskComplete = (task) => {
    const newList = [...todolist];
    newList.forEach((item) => {
      if (item._id === task._id) {
        item.iscomplete = task.iscomplete;
      }
    });
    settodolist(newList);
  };
  const removeTask = (task) => {
    const newList = todolist.filter((item) => !(item._id === task._id));
    settodolist(newList);
  };
  const updatetask = (task) => {
    const newList = [...todolist];
    newList.forEach((item) => {
      if (item._id === task._id) {
        item.todo = task.todo;
      }
    });
    settodolist(newList);
  };
  return (
    <div>
      <Addtask addtask={addtask} />
      <Todolist
        todolist={todolist}
        taskComplete={taskComplete}
        removeTask={removeTask}
        tasktoUpdate={(task) => setupdatetask(task)}
        showpopup={() => setshowpopup(!showpopup)}
      />
      {showpopup && (
        <Updatetask
          task={tasktoUpdate}
          updatetask={updatetask}
          removepopup={() => setshowpopup(!showpopup)}
        />
      )}
    </div>
  );
}

export default App;
