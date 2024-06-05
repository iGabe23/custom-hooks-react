import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HooksApp } from "./HooksApp.jsx";
import { CounterApp } from "./01-useState/CounterApp.jsx";
import { CounterCustomHook } from "./01-useState/CounterCustomHook.jsx";
import { SimpleForm } from "./02-useEffect/SimpleForm.jsx";
import { FormCustomHook } from "./02-useEffect/FormCustomHook.jsx";
import { MultiCustomHooks } from "./03-examples/MultiCustomHooks.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  //<React.StrictMode>
  <MultiCustomHooks />
  //</React.StrictMode>
);
