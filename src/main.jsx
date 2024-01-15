import React from "react";
import ReactDOM from "react-dom/client";

// ROUTER
import Ways from "./config/Ways";

// STYLES
import "./global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Ways />
  </React.StrictMode>,
)
