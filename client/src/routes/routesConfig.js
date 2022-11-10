import Discover from "../pages/discover/Discover";
import Home from "../pages/home/Home";
import NotFound from "../pages/notFound/NotFound";
import Profile from "../pages/profile/Profile";
import SignIn from "../pages/auth/signIn/SignIn";
import SignUp from "../pages/auth/signUp/SignUp";

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
    path: "/auth/signin",
    element: <SignIn />,
  },
  {
    path: "/auth/signup",
    element: <SignUp />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
];

export default routesConfig;
