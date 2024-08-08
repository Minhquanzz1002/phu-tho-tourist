import {IRouter} from "./interface.ts";
import {routerHome} from "@view/Home/router.ts";
import {routerDocument} from "@view/Document/router.ts";
import {routerRecruitment} from "@view/Recruitment/router.ts";
import {routerPost} from "@view/Post/router.ts";
import {routerRecruitmentDetail} from "@view/Recruitment/Detail/router.ts";
import {routerPostDetail} from "@view/Post/Detail/router.ts";

export const publicPage  : IRouter[] = [
    routerHome, routerDocument, routerRecruitment, routerRecruitmentDetail, routerPost, routerPostDetail
]