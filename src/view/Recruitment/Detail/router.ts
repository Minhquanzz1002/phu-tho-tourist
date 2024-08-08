import React from "react";
import {IRouter} from "../../../routers/interface.ts";

export const routerRecruitmentDetail : IRouter = {
    path: '/tuyen-dung/chi-tiet',
    loader: React.lazy(() => import('./index.tsx')),
}