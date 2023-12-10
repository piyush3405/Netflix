import Login from "./Login";
import Browse from "./Browse";
import {createBrowserRouter} from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Error from "./Error";

const Body = () => {
 
  const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<Login/>,
      errorElement:<Error />
    },
    {
      path:"/browse",
      element:<Browse/>,
      errorElement:<Error />
    },
  ]);


  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
