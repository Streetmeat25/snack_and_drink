import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Receipt from "./pages/Receipt";
import Buy from "./pages/Buy";
import {setupStore} from './store/store'
import { Provider} from 'react-redux'
import DishModal from "./components/modals/dishModal/DishModal";

const router = createBrowserRouter([

    {
        path: "*",
        element: <App />,
        errorElement: <div> Page Not Found</div>
    },
    // не помню что это....
    // {
    //     path: "https://github.com/Streetmeat25/snack_and_drink/settings/pages",
    //     element: <App />,
    //     errorElement: <div> Page Not Found</div>
    // },
    {
        path: "/receipt",
        element: <Receipt />,
        errorElement: <div> Page Not Found</div>
    },
    {
        path: "/buy",
        element: <Buy/>,
        errorElement: <div> Page Not Found</div>
    },
    {
        path: "/dish",
        element: <DishModal/>,
        errorElement: <div> Page Not Found</div>
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
const store = setupStore()
root.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>

);

