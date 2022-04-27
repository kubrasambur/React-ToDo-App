import { useState } from "react";
import "./App.css";
import Addlist from "./components/AddList/Addlist";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import CardComponent from "./components/List/CardComponent";

const localList = [];

for (let i = 0; i < localStorage.length; i++) {
  localList.push({
    text: localStorage.key(i),
    done: JSON.parse(localStorage.getItem(localStorage.key(i))),
  });
}

function App() {
  const [tasks, setTasks] = useState(localList);

  const [shower, setShower] = useState("All");

  const filtered = (shower) => {
    if (shower === "All") {
      return tasks;
    } else if (shower === "Active") {
      return tasks.filter((task) => task.done === false);
    } else {
      return tasks.filter((task) => task.done !== false);
    }
  };

  return (
    <div className="App">
      <Header />
      <Addlist task={tasks} setTask={setTasks} />
      <CardComponent todos={tasks} shower={shower} filter={filtered} setTask={setTasks} />
      <Footer setShower={setShower} tasks={tasks} setTask={setTasks} />
    </div>
  );
}

export default App;
