import PrivateRoute from "../components/auth/PrivateRoute";
import Home from "../pages/Home";
import Search from "../pages/Search";
import HomeLayout from "../layouts/HomeLayout";
import Explore from "../pages/Explore";
import Library from "../pages/Library";
import Premium from "../pages/Premium";
import Album from "../pages/Album";

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
                },
                {
                    path: '/explore',
                    element: <Explore />
                },
                {
                    path: '/library',
                    element: <Library />
                },
                {
                    path: '/premium',
                    element: <Premium />
                },
                {
                    path: '/album',
                    element: <Album />
                }
            ]
        },
    ]
}