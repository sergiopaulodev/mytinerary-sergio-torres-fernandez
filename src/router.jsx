import { createBrowserRouter } from "react-router-dom";
// import HeaderLayout from './layouts/HeaderLayout'
import Home from './pages/Home'
import Cities from "./pages/Cities";
import MainLayout from "./layouts/MainLayout";
import CitiesLayout from "./layouts/CitiesLayout";
import CityDetailsLayout from "./layouts/CityDetailsLayout";
import CityDetails from "./pages/CityDetails";

const router = createBrowserRouter([
    {   
        path: "/",
        element: <MainLayout />,
        children: [
            { path:"/", element:<Home />},
            { path:"/index", element:<Home />},
            { path:"/home", element:<Home />},
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
            { path:"/citydetails/:id", element:<CityDetails />},

        ]
    }
])

export default router