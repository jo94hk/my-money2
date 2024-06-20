import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //전체적인 공유를 위해서 사용한다.
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);
