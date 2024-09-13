import {IRouter} from "./interface";
import {routerHome} from "@view/Home/router";
import {routerDocument} from "@view/Document/router";
import {routerRecruitment} from "@view/Recruitment/router";
import {routerPost} from "@view/Post/router";
import {routerRecruitmentDetail} from "@view/Recruitment/Detail/router";
import {routerPostDetail} from "@view/Post/Detail/router";

export const publicPage  : IRouter[] = [
    routerHome, routerDocument, routerRecruitment, routerRecruitmentDetail, routerPost, routerPostDetail
]