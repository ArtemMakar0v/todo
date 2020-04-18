import React from "react";
import ReactDOM from "react-dom";

import AppHeader from "./Components/app-header";
import SearchPanel from "./Components/search-panel";
import TodoList from "./Components/todo-list";
import ItemStatusFilter from './Components/item-status-filter';

import './index.css';

const App = () => {

  const todoData = [
    { label: "Drink Coffee", important: false, id: 1 },
    { label: "Make awesome app", important: true, id: 2 },
    { label: "Have a lanch", important: false, id: 3 }

  ];

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList todos={todoData} />
    </div>

  );
};

ReactDOM.render(<App />, document.getElementById("root"));
