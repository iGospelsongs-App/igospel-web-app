import React from "react";
import Signup from "./pages/auth/Signup";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/auth/Login";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  }
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
