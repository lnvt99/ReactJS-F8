import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
// Chapter 06: Hook
// import App from './App';
// import UseStateComponent from './Hook/useState/UseStateComponent';
// import TwoWayBinding from './Hook/Two-wayBinding/TwoWayBinding';
// import TodoList from './Hook/Todolist/TodoList';
// import Mount from './Hook/Mount-Unmount/Mount';
// import UseEffectComponent from './Hook/useEffect/UseEffectComponent';
// import UseLayoutEffectComponent from './Hook/useLayoutEffect/UseLayoutEffect';
// import UseRef from './Hook/useRef/UseRef';
// import MeMo from './Hook/Memo/MeMo';
// import UseCallBack from './Hook/useCallback/UseCallback';
// import UseMeMo from './Hook/useMemo/UseMemo';
// import UseReducer from './Hook/useReducer/TodoApp';
// import UseContext from './Hook/useContext/UseContext';
// import App from './Hook/Context+useReducer/App';
// import UseImperativeHandle from './Hook/useImperativeHandle/UseImperativeHandle';

// Chapter 07: CSS
// import CSS from './CSS/CSS/App';

// Chapter 08: Router
import Router from "./Router/App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Router />
  </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
