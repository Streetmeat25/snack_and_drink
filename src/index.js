import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Receipt from "./pages/Receipt";
import Buy from "./pages/Buy";

const router = createBrowserRouter([

    {
        path: "*",
        element: <App />,
        errorElement: <div> Page Not Found</div>
    },
{
    path: "https://github.com/Streetmeat25/snack_and_drink/settings/pages",
        element: <App />,
    errorElement: <div> Page Not Found</div>
},
    {
        path: "/receipt",
        element: <Receipt />,
        errorElement: <div> Page Not Found</div>
    },
    {
        path: "/buy",
        element: <Buy/>,
        errorElement: <div> Page Not Found</div>
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <RouterProvider router={router} />
);

