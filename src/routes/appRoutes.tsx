import PrivateRoute from "../components/auth/PrivateRoute";
import Home from "../pages/Home";

export const appRoutes = {
    path: "/",
    element: <PrivateRoute />,
    children: [
        {
            path: "/",
            element: <Home />
        }
    ]
}