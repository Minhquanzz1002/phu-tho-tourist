import {IRouter} from "./interface.ts";
import {routerHome} from "@view/Home/router.ts";
import {routerDocument} from "@view/Document/router.ts";
import {routerRecruitment} from "@view/Recruitment/router.ts";
import {routerPost} from "@view/Post/router.ts";

export const publicPage  : IRouter[] = [
    routerHome, routerDocument, routerRecruitment, routerPost
]