import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Layout from './pages/Layout';
import Error from './pages/Error';
import About from './pages/About';
import Contact from './pages/Contact'
 

 //by using this one we are create routes
let router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <App />,
      },

      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />,
      },
    
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
