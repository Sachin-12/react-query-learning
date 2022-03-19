import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
