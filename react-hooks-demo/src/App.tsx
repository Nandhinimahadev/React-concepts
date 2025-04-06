// src/App.tsx
import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import Timer from "./components/Timer";
import { UserContextProvider, UserProfile } from "./components/UserContext";

const App = () => {
  return (
    <UserContextProvider>
      <div className="App">
        <h1>React Hooks Demo</h1>
        <UserProfile />
        <Counter />
        <Timer />
      </div>
    </UserContextProvider>
  );
};

export default App;
