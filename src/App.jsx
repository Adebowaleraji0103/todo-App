import { useRef, useState } from "react";
import "./App.css";
import { createWebSocketModuleRunnerTransport } from "vite/module-runner";
import Slider from "./component/Slider";

export default function App() {
  const [task, setTask] = useState("");
  const [allTasks, setAllTasks] = useState([]);
  // const [Checked, set Checked] = useState(false);

  // console.log(isChecked)

  function addTask(e) {
    e.preventDefault();

    const todo = {
      id: Date.now(),
      task,
      completed: false,
    };
    // console.log(todo)

    setAllTasks((prevTask) => [...prevTask, todo]);
  }

  function deleteTask(id) {
    let newTasks = allTasks.filter((todo) => todo.id !== id);
    setAllTasks(newTasks);
  }

  function clearText(e) {
    e.preventDefault();
    setAllTasks([]);
  }

  function toggleCompleted(id) {
    let results = allTasks.map((todo) => {
      if (todo.id == id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setAllTasks(results);
    // let update = todo.id == id;
    // let doneTask = {...update, completed:!completed}
  }

  return (
      <div className="app">
        <h1>ToDo App</h1>
        <div className="wrapper">
          <form className="form" onSubmit={addTask}>
            <input
              type="text"
              placeholder="Add a task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button>Add</button>
          </form>

          <ul>
            {allTasks.map((todo) => (
              <li className="taskList" key={todo.id}>
                <div>
                  <input
                    type="checkbox"
                    onChange={() => toggleCompleted(todo.id)}
                    checked={todo.completed}
                  />
                  <span className={todo.completed ? "completed" : ""}>
                    {todo.task}
                  </span>
                </div>
                <button onClick={() => deleteTask(todo.id)} className="iconBtn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5t.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5t-.288.713T19 6v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zm-7 11q.425 0 .713-.288T11 16V9q0-.425-.288-.712T10 8t-.712.288T9 9v7q0 .425.288.713T10 17m4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.712T14 8t-.712.288T13 9v7q0 .425.288.713T14 17M7 6v13z"
                    />
                  </svg>
                </button>
              </li>
            ))}
          </ul>

          <div className="btn">
            <button onClick={() => setAllTasks([])}>clear all</button>
          </div>
        </div>
        <Slider />
      </div>
  );
}
