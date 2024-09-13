import {IRouter} from "../interface";
import {Route} from "react-router-dom";
import React from "react";
import Loading from "@shared/components/Loading";

interface IShowRouter {
    routers: IRouter[];
}

const renderRouter = (router: IRouter) => {
    const DynamicComponent: any = router.loader;
    return (
        <Route
            key={router.path}
            path={router.path}
            element={
                <React.Suspense fallback={<Loading/>}>
                    <DynamicComponent/>
                </React.Suspense>
            }
        />
    )
}


const useRouter = ({routers}: IShowRouter) => {
    return React.useMemo(() => {
        return {views: routers.map(r => renderRouter(r))}
    }, [routers]);
}

export default useRouter;