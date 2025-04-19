import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { BlogpostsContextProvider } from "./context/BlogpostContext";
import { AuthContextProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <BlogpostsContextProvider>
        <BrowserRouter
        >
          <App />
        </BrowserRouter>
      </BlogpostsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);