import Discover from "../pages/discoverPage/Discover";
import Home from "../pages/homePage/Home";
import NotFound from "../pages/notFoundPage/NotFound";
import Profile from "../pages/profilePage/Profile";
import SignIn from "../pages/auth/signIn/SignIn";
import SignUp from "../pages/auth/signUp/SignUp";

export type TRoutesConfig = {
  [key: string]: {
    title:string
    path: string;
    component: () => JSX.Element;
  };
};

export const routesConfig: TRoutesConfig = {
  home: {
    title:'home',
    path: "",
    component: Home,
  },
  discover: {
    title:'discover',
    path: "discover",
    component: Discover,
  },
  global: {
    title:'*',
    path: "*",
    component: NotFound,
  },
  notfound: {
    title:'notfound',
    path: "not-found",
    component: NotFound,
  },
  signin: {
    title:'signin',
    path: "auth/signin",
    component: SignIn,
  },
  signup: {
    title:'signup',
    path: "auth/signup",
    component: SignUp,
  },
  profile: {
    title:'profile',
    path: "profile",
    component: Profile,
  },
};

export const NavBarRoutes:TRoutesConfig = {
  home: {
    title: "Home",
    path: "",
    component: Home,
  },
  discover: {
    title: "Discover",
    path: "discover",
    component: Discover,
  },
  docs: {
    title: "Docs",
    path: "docs",
    component: Profile,
  },
  blog: {
    title: "Blog",
    path: "blog",
    component: Profile,
  },
  profile: {
    title:'Contacts',
    path: "contacts",
    component: Profile,
  },
};

