import React from "react";
import "./App.scss";
import { Route } from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";
import MainPage from "../MainPage/MainPage";

function App() {
  return (
    <main className="App">
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/main" component={MainPage} />
    </main>
  );
}

export default App;
