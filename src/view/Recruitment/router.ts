import {IRouter} from "../../routers/interface";
import React from "react";

export const routerRecruitment : IRouter = {
    path: '/tuyen-dung',
    loader: React.lazy(() => import('./index')),
}