import React from "react";
import ReactDOM from "react-dom";
import "./index.css";


import App from "./App"; // this is where you will create you frontend react app 
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
