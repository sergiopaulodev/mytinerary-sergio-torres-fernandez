import { createBrowserRouter } from "react-router-dom";
// import HeaderLayout from './layouts/HeaderLayout'
import Home from './pages/Home'
import Cities from "./pages/Cities";
import MainLayout from "./layouts/MainLayout";
import CitiesLayout from "./layouts/CitiesLayout";
import CityDetailsLayout from "./layouts/CityDetailsLayout";
import CityDetailsPage from "./pages/CityDetailsPage";
import FormSignUp2 from './pages/FormSignUp2'
import FormSignUp1 from './pages/FormSignUp1'
import FormSignIn from './pages/FormSignIn'

const router = createBrowserRouter([
    {   
        path: "/",
        element: <MainLayout />,
        children: [
            { path:"/", element:<Home />},
            { path:"/index", element:<Home />},
            { path:"/home", element:<Home />},
            { path:"/auth/register_step1", element:<FormSignUp1/>},
            { path:"/auth/register_step2", element:<FormSignUp2/>},
            { path:"/auth/signin", element:<FormSignIn/>}
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