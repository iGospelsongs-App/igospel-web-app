import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthContextProvider from "./context/authContext";
import { appRoutes } from "./routes/appRoutes";
import { authRoute } from "./routes/authRoutes";
import SidebarContextProvider from "./context/sidebarContext";


const router = createBrowserRouter([appRoutes, authRoute])

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AuthContextProvider>
          <SidebarContextProvider>
            <RouterProvider router={router} />
          </SidebarContextProvider>
        </AuthContextProvider>
      </header>
    </div>
  );
}

export default App;
