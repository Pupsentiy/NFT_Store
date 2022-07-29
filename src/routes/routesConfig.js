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
]

export default routesConfig