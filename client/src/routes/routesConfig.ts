import Discover from "../pages/discoverPage/Discover";
import Home from "../pages/homePage/Home";
import NotFound from "../pages/notFoundPage/NotFound";
import Profile from "../pages/profilePage/Profile";
import SignIn from "../pages/auth/signIn/SignIn";
import SignUp from "../pages/auth/signUp/SignUp";

export type TRoutesConfig = {
  path: string;
  component: () => JSX.Element;
};
export const routesConfig: TRoutesConfig[] = [
  {
    path: "",
    component: Home,
  },
  {
    path: "discover",
    component: Discover,
  },
  {
    path: "*",
    component: NotFound,
  },
  {
    path: "not-found",
    component: NotFound,
  },
  {
    path: "auth/signin",
    component: SignIn,
  },
  {
    path: "auth/signup",
    component: SignUp,
  },
  {
    path: "profile",
    component: Profile,
  },
];
