import {IRouter} from "../interface.ts";
import {Route} from "react-router-dom";
import React from "react";

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
                <React.Suspense fallback={<div>loading...</div>}>
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