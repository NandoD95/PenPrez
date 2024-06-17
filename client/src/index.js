import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./components/App";
import "./index.css";
// import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./components/Route";

const router = createBrowserRouter(routes)

const root = ReactDOM.createRoot(document.getElementById('root'))

// const container = document.getElementById("root");
// const root = createRoot(container);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode> 

);
