import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import MainLayout from "./MainLayout/MainLayout.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Basket from "./pages/Basket/Basket.tsx";
import axios from "axios";
import { api } from "./helper/api.ts";
import { ICard } from "./interfaces/Icard.ts";
import AuthLayout from "./AuthLayout/AuthLayout.tsx";
import SignIn from "./pages/SignIn/SignIn.tsx";
import SignUp from "./pages/SignUp/SignUp.tsx";
import RequireAuth from "./helper/RequireAuth.tsx";

const Menu = lazy(()=>import('./pages/Home/Home'))
const route = createBrowserRouter([
    {
        path: "/",
        element:<RequireAuth><MainLayout /></RequireAuth> ,
        children: [
            {
                path: "/",
                element:<Suspense fallback={<>Loading...</>}><Menu/></Suspense>,
                loader:async():Promise<ICard[]>=>{
                  const { data } = await axios(api.products);
                  return data
                }
            },
            {
                path: "/basket",
                element: <Basket />,
            },
        ],
    },
    {
        path:"/auth",
        element:<AuthLayout/>,
        children:[
            {
                path:"signin",
                element:<SignIn/>
            },
            {
                path:"signup",
                element:<SignUp/>
            }
        ]
    },
    {
        path:"*",
        element:<>Error page..</>
    }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={route} />
    </React.StrictMode>,
);
