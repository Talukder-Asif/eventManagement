import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layouts/MainLayout/MainLayout';
import Home from './Pages/HomePage/Home';
import ServicePage from './Pages/ServicePage/ServicePage';
import SingleEvent from './Pages/SingleEventPage/SingleEvent';
import AboutUs from './Pages/AboutUs/AboutUs';
import Login from './Pages/UserInfo/Login';
import AuthProvider from './Provaider/AuthProvider';
import CreateAccount from './Pages/UserInfo/CreateAccount';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/services",
        element: <ServicePage></ServicePage>
      },
      {
        path: "/services/:id",
        element: <PrivateRoute>
        <SingleEvent></SingleEvent>
        </PrivateRoute>
      },
      {
        path:"/about",
        element:<AboutUs></AboutUs>
      },
      {
        path:"/signin",
        element:<Login></Login>
      },
      {
        path:"/signup",
        element:<CreateAccount></CreateAccount>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
  </React.StrictMode>,
)
