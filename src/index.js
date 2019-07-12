import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "./_redux/reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
import "./index.scss";
import "normalize.css";

const store = createStore(rootReducer, composeWithDevTools());

const application = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

ReactDOM.render(application, document.getElementById("root"));
