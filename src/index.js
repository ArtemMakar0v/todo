import React from "react";
import ReactDOM from "react-dom";

import AppHeader from "./Components/app-header";
import SearchPanel from "./Components/search-panel";
import TodoList from "./Components/todo-list";


const App = () => {

  const todoDate = [
    { label: "Drink Coffee", important: false, id: 1 },
    { label: "Make awesome app", important: true, id: 2 },
    { label: "Have a lanch", important: false, id: 3 }

  ];

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoDate} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
