import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";

// @ts-ignore
window.pusher = require("pusher-js");

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world!</div>,
    },
    {
        path: "/app",
        element: <div>App!</div>,
    },
]);

console.log("fsdfs31");

ReactDOM.createRoot(document.getElementById("app")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
