import useRouter from "./useRouter.tsx";
import {publicPage} from "../mainRouter.ts";
import {Routes} from "react-router-dom";
import React from "react";
import DefaultLayout from "@layout/index.tsx";

export const PublicPage : React.FC = React.memo(() => {
    const {views} = useRouter({routers: publicPage})
    return (
        <DefaultLayout>
            <Routes>{views}</Routes>
        </DefaultLayout>
    );
});