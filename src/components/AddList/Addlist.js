import React from "react";
import "../../App.css";

function Addlist({ task, setTask }) {
  
  const addTask = (e) => {
    e.preventDefault();
    let val = e.target.firstChild.value;
    if (val !== "") {
      localStorage.setItem(val, false);
      setTask([...task, { text: val, done: false }]);
      e.target.firstChild.value = "";
    }
  };

  return (
    <div className="input_container">
      <form onSubmit={addTask}>
        <input
          className="input"
          type="text"
          placeholder="What needs to be done?"
        />
      </form>
    </div>
  );
}

export default Addlist;
