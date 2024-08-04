import {IRouter} from "../../routers/interface.ts";
import React from "react";

export const routerDocument: IRouter = {
    path: '/tai-lieu',
    loader: React.lazy(() => import('./index.tsx')),
}