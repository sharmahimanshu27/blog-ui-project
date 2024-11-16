import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter } from 'react-router-dom';
 

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
        element: <About />,
        children:[
          {
            path:"hello",
            element:<TermsandPolicy/>
          }
        ]
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
