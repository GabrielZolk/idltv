import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Cards from "../pages/Cards";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/cartinhas",
        element: <Cards />,
    },
]);

export default router;