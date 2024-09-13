import {IRouter} from "../../routers/interface";
import React from "react";

export const routerPost : IRouter = {
    path: '/bai-viet',
    loader: React.lazy(() => import('./index')),
}