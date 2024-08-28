import { BrowserRouter } from "react-router-dom";

import { useAuth } from "../hooks/auth";

import {AuthRoutes} from './Auth.routes'
import { AppRoutes } from "./App.routes";

export function Routes(){
    const { user } = useAuth();
    return(
        <BrowserRouter>
        {user ? <AppRoutes/> : <AuthRoutes/>}
        </BrowserRouter>
    )
}