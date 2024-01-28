import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Routes:
import Login from "./routes/Login.jsx";
import Register from "./routes/Register.jsx";
import ResetPassword from "./routes/ResetPassword.jsx";
import Dashboard from "./routes/Dashboard.jsx";
import SetRole from "./routes/SetRole.jsx";

import AuthProvider from "./AuthProvider.jsx";
import Protected from "./Protected.jsx";
import Unprotected from "./Unprotected.jsx";

// See the next paragraph for explaination of this line
import { registerAction, loginAction } from "./actions.js";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: (
                <Unprotected>
                    <Login />
                </Unprotected>
            ),
            action: loginAction,
        },
        {
            path: "/register",
            element: (
                <Unprotected>
                    <Register />
                </Unprotected>
            ),
            action: registerAction,
        },
        {
            path: "/reset-password",
            element: (
                <Unprotected>
                    <ResetPassword />
                </Unprotected>
            ),
        },
        {
            path: "/dashboard",
            element: (
                <Protected>
                    <Dashboard />
                </Protected>
            ),
        },
        {
            path: "/setrole",
            element: (
                <Protected>
                    <SetRole />
                </Protected>
            ),
        },
    ],
    {
        basename: "/skillhashi",
    }
);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>
);
