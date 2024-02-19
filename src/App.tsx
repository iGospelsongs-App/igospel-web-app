import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { appRoutes } from "./routes/appRoutes";
import { authRoute } from "./routes/authRoutes";


const router = createBrowserRouter([appRoutes, authRoute])

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
