import Auth from "../components/auth/Auth";
import Discover from "../pages/discover/Discover";
import Home from "../pages/home/Home";
import NotFound from "../pages/notFound/NotFound";


const routesConfig = [
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/discover',
        element:<Discover/>
    },
    {
        path:'/not-found',
        element:<NotFound/>
    },
    {
        path:'/auth',
        element:<Auth/>
    },
]

export default routesConfig