import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { initializeFirebase } from "./services/firebase.jsx";

initializeFirebase();
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
