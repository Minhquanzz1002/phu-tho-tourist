import React from "react";
import {IRouter} from "../../../routers/interface";

export const routerPostDetail : IRouter = {
    path: '/bai-viet/chi-tiet',
    loader: React.lazy(() => import('./index')),
}