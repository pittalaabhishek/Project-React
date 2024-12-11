//import { useState } from "react";
import RegistrationForm from "./Pages/RegistrationForm";

function App() {
  // const [tasks, setTasks] = useState([]);
  // const [input, setInput] = useState("");

  // const addTask = () => {
  //   if(input.trim()) {
  //     setTasks([...tasks, input.trim()]);
  //     setInput("");
  //   }
  // }

  return (
    <RegistrationForm />
    // <div className="app">
    //   <div className="input-container">
    //     <header>
    //       <h1>Task Tracker</h1>
    //     </header>
    //     <input
    //       type="text"
    //       value={input}
    //       placeholder="Add new Task"
    //       onChange = { (e) => setInput(e.target.value)}
    //     />
    //     <button onClick={addTask}>Add</button>
    //   </div>
    //   <ol className="task-list">
    //     {tasks.map((task, index) => (
    //       <li key={index}>{task}</li>
    //     ))}
    //   </ol>
    // </div>
  );
}

export default App;
