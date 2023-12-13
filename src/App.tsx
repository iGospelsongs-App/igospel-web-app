import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthContextProvider from "./context/authContext";
import { appRoutes } from "./routes/appRoutes";
import { authRoute } from "./routes/authRoutes";


const router = createBrowserRouter([appRoutes, authRoute])

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
