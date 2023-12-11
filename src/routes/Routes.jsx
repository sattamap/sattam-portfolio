import {
    createBrowserRouter,
  
  } from "react-router-dom";
  import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Portfolio from "../pages/Portfolio/Portfolio";
 

  
  
  
  
  
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
          path: "portfolio",
          element:<Portfolio></Portfolio>,
        },
   
      ]
    }
  
  ]);