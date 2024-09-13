import {IRouter} from "../../routers/interface";
import React from "react";

export const routerDocument: IRouter = {
    path: '/tai-lieu',
    loader: React.lazy(() => import('./index')),
}