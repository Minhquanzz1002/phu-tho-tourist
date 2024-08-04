import {IRouter} from "../../routers/interface.ts";
import React from "react";

export const routerPost : IRouter = {
    path: '/bai-viet',
    loader: React.lazy(() => import('./index.tsx')),
}