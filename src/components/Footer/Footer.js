import React from "react";
import "../../App.css";

function Footer({ setShower, tasks, setTask }) {
  const showAll = () => setShower("All");
  const showActive = () => setShower("Active");
  const showCompleted = () => setShower("Completed");

  const handleClearCompleted = () =>
    setTask(tasks.filter((task) => task.done === false));
  const handleClearAll = () => setTask([]); 
  //window.localStorage.clear();
  return (
    <div className="footer">
      <div className="all-active-completed">
        <div>
          <button onClick={showAll}>All ({tasks.length})</button>
        </div>
        <div className="active">
          <button onClick={showActive}>
            Active ({tasks.filter((task) => task.done === false).length})
          </button>
        </div>
        <div>
          <button onClick={showCompleted}>
            Completed ({tasks.filter((task) => task.done === true).length})
          </button>
        </div>
      </div>
      <div className="delete-buttons">
        <div className="clear-completed">
          <button onClick={handleClearCompleted}>Clear completed</button>
        </div>
        <div className="clear-all">
          <button onClick={handleClearAll}>Clear All</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
