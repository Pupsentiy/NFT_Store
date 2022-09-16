import Auth from "../pages/auth/Auth";
import Discover from "../pages/discover/Discover";
import Home from "../pages/home/Home";
import NotFound from "../pages/notFound/NotFound";

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
    element: <Auth /> ,
  },
 
];

export default routesConfig;
