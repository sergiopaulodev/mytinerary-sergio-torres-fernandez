import { createBrowserRouter } from "react-router-dom";
// import HeaderLayout from './layouts/HeaderLayout'
import Home from './pages/Home'
import Cities from "./pages/Cities";
import MainLayout from "./layouts/MainLayout";
import CitiesLayout from "./layouts/CitiesLayout";
import CityDetailsLayout from "./layouts/CityDetailsLayout";
import CityDetailsPage from "./pages/CityDetailsPage";
import FormCreateAccount from './components/FormCreateAccount'
import FormSignUp from './pages/FormSignUp'
import FormSignIn from './pages/FormSignIn'
import LogOut from "./pages/LogOut";

const router = createBrowserRouter([
    {   
        path: "/",
        element: <MainLayout />,
        children: [
            { path:"/", element:<Home />},
            { path:"/index", element:<Home />},
            { path:"/home", element:<Home />},
            { path:"/auth/account", element:<FormSignUp/>}, // revisar rutas para el register
            { path:"/auth/register", element:<FormCreateAccount/>},
            { path:"/auth/login", element:<FormSignIn/>},
            { path:"/auth/logout", element:<LogOut/>}
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