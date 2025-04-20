import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createHashRouter, RouterProvider} from "react-router";
import {routers} from "./config/routers";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const RouteContext = createContext(null);

root.render(
    <React.StrictMode>
        <RouteContext.Provider
            value={null}
        >
            <RouterProvider router={createHashRouter(routers)}/>
        </RouteContext.Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
