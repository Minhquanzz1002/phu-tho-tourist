import {IRouter} from "../../routers/interface.ts";
import React from "react";

export const routerRecruitment : IRouter = {
    path: '/tuyen-dung',
    loader: React.lazy(() => import('./index.tsx')),
}