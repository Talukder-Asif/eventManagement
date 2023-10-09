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
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Contact from './Pages/Contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
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
        element:<PrivateRoute>
        <AboutUs></AboutUs>
        </PrivateRoute>
      },
      {
        path:"/signin",
        element:<Login></Login>
      },
      {
        path:"/signup",
        element:<CreateAccount></CreateAccount>
      },
      {
        path:"/contact",
        element:<PrivateRoute>
          <Contact></Contact>
        </PrivateRoute>
        
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
