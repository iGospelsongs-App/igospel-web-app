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
import AuthContextProvider from "./context/authContext";
import VerifySignup from "./pages/auth/VerifySignup";

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
      },
      {
        path: "/auth/verify",
        element: <VerifySignup />
      }
    ]
  },
])

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AuthContextProvider>
          <RouterProvider router={router} />
        </AuthContextProvider>
      </header>
    </div>
  );
}

export default App;
