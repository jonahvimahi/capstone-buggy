import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

//Reducers
import bugReducer from "./components/Controller/Redux/BugSlice";
import userReducer from "./components/Controller/Redux/UserSlice";
import reportWebVitals from "./reportWebVitals";

//Redux Configure
const reducer = combineReducers({
	bugs: bugReducer,
	user: userReducer,
});

const store = configureStore({
	reducer,
});

ReactDOM.render(
  <Provider store={store}>
	<App />
  </Provider>,

	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
