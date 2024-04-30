import Browse from "./Browse";
import Login from "./Login";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import PageNotFound from "./PageNotFound";

const Body = () => {


    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        },
        {
            path: "*",
            element: <PageNotFound />
        },
    ]);

  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body;