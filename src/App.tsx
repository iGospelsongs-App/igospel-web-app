import React from "react";
import Signup from "./pages/auth/Signup";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/auth/Login";
import Home from "./pages/Home";
import PublicRoute from "./components/auth/PublicRoute";
import PrivateRoute from "./components/auth/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute />,
    children: [
      {
        path: "/",
        element: <Home />
      }
    ]
  },
  {
    path: "/auth",
    element: <PublicRoute />,
    children: [
      {
        path: "/auth/login",
        element: <Login />
      },
      {
        path: "/auth/signup",
        element: <Signup />
      }
    ]
  },
])

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RouterProvider router={router} />
      </header>
    </div>
  );
}

export default App;
