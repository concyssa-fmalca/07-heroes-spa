import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { DcPage } from "../heroes/pages/DcPage";
import { MarvelPage } from "../heroes/pages/MarvelPage";

export const AppRouter = createBrowserRouter([
    {
        path:'/marvel',
        element: <MarvelPage />
    },
    {
        path:'/dc',
        element: <DcPage />
    },
    {
        path:'/',
        element: <LoginPage />
    },       
])