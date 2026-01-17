import {
    createBrowserRouter,
  
  } from "react-router-dom";
  import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Portfolio from "../pages/Portfolio/Portfolio";
import About from "../pages/About/About";
 

  
  
  
  
  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "about",
          element:<About/>,
        },
        {
          path: "portfolio",
          element:<Portfolio></Portfolio>,
        },
   
      ]
    }
  
  ]);