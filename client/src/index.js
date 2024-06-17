import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./components/App";
import "./index.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./component/route";

const router = createBrowserRouter(routes)

const root = ReactDOM.createRoot(document.getElementById('roots'))

// const container = document.getElementById("root");
// const root = createRoot(container);
root.render(<App />);
