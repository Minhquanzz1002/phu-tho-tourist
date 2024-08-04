import {IRouter} from "./interface.ts";
import {routerHome} from "@view/Home/router.ts";
import {routerDocument} from "@view/Document/router.ts";

export const publicPage  : IRouter[] = [
    routerHome, routerDocument
]