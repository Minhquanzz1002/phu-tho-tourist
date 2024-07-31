import {IRouter} from "../../routers/interface.ts";
import React from "react";

export const routerHome : IRouter = {
    path: '/',
    loader: React.lazy(() => import('./index.tsx')),
}