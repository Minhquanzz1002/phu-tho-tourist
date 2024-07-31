import useRouter from "./useRouter.tsx";
import {publicPage} from "../mainRouter.ts";
import {Routes} from "react-router-dom";
import React from "react";
import DefaultLayout from "@layout/index.tsx";

const PublicPage : React.FC = () => {
    const {views} = useRouter({routers: publicPage})
    return (
        <DefaultLayout>
            <Routes>{views}</Routes>
        </DefaultLayout>
    );
};

export default React.memo(PublicPage);