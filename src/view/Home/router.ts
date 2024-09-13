import {IRouter} from "../../routers/interface";
import React from "react";

export const routerHome : IRouter = {
    path: '/',
    loader: React.lazy(() => import('./index')),
}