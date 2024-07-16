import React from "react";
import ReactDOM from "react-dom/client";
import MainLayout from "./MainLayout/MainLayout.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Basket from "./pages/Basket/Basket.tsx";
import Home from "./pages/Home/Home.tsx";
import axios from "axios";
import { api } from "./helper/api.ts";
import { ICard } from "./interfaces/Icard.ts";

const route = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader:async():Promise<ICard>=>{
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
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={route} />
    </React.StrictMode>,
);
