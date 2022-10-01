import React from "react";
import Todo from "./Todo";
import "./App.css";
import Backdrop from "./Backdrop";
import Model from "./model";

function App() {
  
  return (
    <div className="todolist">
      <h1>The Title</h1>
      <Todo text="learn React" />
    </div>
  );
}

export default App;
