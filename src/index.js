import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "react-alice-carousel/lib/alice-carousel.css";
import ContextData from "./ContextData";

ReactDOM.render(
  <React.StrictMode>
    <ContextData>
      <App />
    </ContextData>
  </React.StrictMode>,
  document.getElementById("root")
);
