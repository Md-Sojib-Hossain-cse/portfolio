import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layouts/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path : "/",
        element: <Main></Main>,
        children : [
            {
                index : true,
                element : <Home></Home>
            }
        ]
        ,
        errorElement : <ErrorPage></ErrorPage>
    },
]);

export default router;