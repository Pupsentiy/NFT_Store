import Auth from "../pages/auth/Auth";
import Discover from "../pages/discover/Discover";
import Home from "../pages/home/Home";
import NotFound from "../pages/notFound/NotFound";
import Profile from "../pages/profile/Profile";

const routesConfig = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/discover",
    element: <Discover />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
];

export default routesConfig;
