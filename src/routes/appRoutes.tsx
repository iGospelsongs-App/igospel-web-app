import PrivateRoute from "../components/auth/PrivateRoute";
import Home from "../pages/Home";
import Search from "../pages/Search";
import HomeLayout from "../layouts/HomeLayout";

export const appRoutes = {
    path: "/",
    element: <PrivateRoute />,
    children: [
        {
            path: "/",
            element: <HomeLayout />,
            children: [
                {
                    path: "/",
                    element: <Home />
                },
                {
                    path: '/search',
                    element: <Search />
                }
            ]
        },
    ]
}