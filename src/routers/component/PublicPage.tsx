import useRouter from "./useRouter";
import {publicPage} from "../mainRouter";
import {Routes} from "react-router-dom";
import React from "react";
import DefaultLayout from "@layout/index";

export const PublicPage : React.FC = React.memo(() => {
    const {views} = useRouter({routers: publicPage})
    return (
        <DefaultLayout>
            <Routes>{views}</Routes>
        </DefaultLayout>
    );
});