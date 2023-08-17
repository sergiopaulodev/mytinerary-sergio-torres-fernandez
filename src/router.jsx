import { createBrowserRouter } from "react-router-dom";
import HeaderLayout from './layouts/HeaderLayout'
import Home from './pages/Home'
import Cities from "./pages/Cities";
// import MainLayout from "./layouts/MainLayout";
import CitiesLayout from "./layouts/CitiesLayout";

const router = createBrowserRouter([
    {   
        path: "/",
        element: <HeaderLayout />,
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
    }
])

export default router