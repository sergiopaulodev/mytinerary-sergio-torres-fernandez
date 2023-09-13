import { createBrowserRouter } from "react-router-dom";
// import HeaderLayout from './layouts/HeaderLayout'
import Home from './pages/Home';
import Cities from "./pages/Cities";
import MainLayout from "./layouts/MainLayout";
import CitiesLayout from "./layouts/CitiesLayout";
import CityDetailsLayout from "./layouts/CityDetailsLayout";
import CityDetailsPage from "./pages/CityDetailsPage";
import FormSignUp from './pages/FormSignUp' ;
import FormSignIn from './pages/FormSignIn' ;

const router = createBrowserRouter([
    {   
        path: "/",
        element: <MainLayout />,
        children: [
            { path:"/", element:<Home />},
            { path:"/index", element:<Home />},
            { path:"/home", element:<Home />},
            { path:"/auth/register", element:<FormSignUp/>},
            { path:"/auth/login", element:<FormSignIn/>},
        ]
    },
    { 
        path:"/", 
        element:<CitiesLayout /> ,
        children: [
            { path:"/cities", element:<Cities />},

        ]
    },
    { 
        path:"/", 
        element:<CityDetailsLayout /> ,
        children: [
            { path:"/:id", element:<CityDetailsPage />},

        ]
    }
])

export default router