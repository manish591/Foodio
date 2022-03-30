import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContextProvider, StateContextProvider } from "./context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
        <StateContextProvider>
          <App />
        </StateContextProvider>
      </AuthContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
