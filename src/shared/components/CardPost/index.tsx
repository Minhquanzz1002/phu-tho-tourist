import React from "react";
import "./styles.scss";
import {Flex} from "antd";
import {Link} from "react-router-dom";
import {IPost} from "../../../modules/posts/interface";
import {formatToLocaleDateString, formatViews} from "@helper/function";

export interface CardPostProps {
    size: "small" | "medium" | "large";
    post: IPost;
}

const circleBlueSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
        <circle cx="3" cy="3" r="3" fill="#03A600"/>
    </svg>
);

const circleGraySvg = (
    <svg xmlns="http://www.w3.org/2000/svg" width="3" height="4" viewBox="0 0 3 4" fill="none">
        <circle cx="1.5" cy="2" r="1.5" fill="#858585"/>
    </svg>
);

const CardPostSmall = ({post}: { post: IPost }) => {
    return (
        <Link to="/bai-viet/chi-tiet">
            <Flex align="center" className="card-post card-post--small">
                <div className="card-post--small__image-container">
                    <img className="card-post--small__image"
                         loading="lazy"
                         src={post.image}
                         alt="Item"/>
                </div>
                <Flex className="card-post--small__body" gap="small" justify="center" vertical>
                    <div className="card-post--small__title">{post.title}</div>
                    <Flex gap="small" justify="start" align="center" className="card-post--small__meta">
                        <div>{formatViews(post.views)} views</div>
                        {circleGraySvg}
                        <div>{formatToLocaleDateString(post.publishedAt)}</div>
                    </Flex>
                </Flex>
            </Flex>
        </Link>
    )
}

const CardPostMedium = ({post}: { post: IPost }) => {
    return (
        <Link to="/bai-viet/chi-tiet" style={{zIndex: 2}}>
            <div className="card-post card-post--medium">
                <div className="card-post--medium__image-container">
                    <img className="card-post--medium__image" alt="Card Item"
                         loading="lazy"
                         src={post.image}/>
                    <div className="card-post--medium__image-overlay">Click để xem</div>
                </div>
                <Flex vertical gap="small" className="card-post--medium__body">
                    <Flex align="center" gap="small">
                        <div className="card-post--medium__author">{post.author}</div>
                        {circleBlueSvg}
                    </Flex>
                    <h4 className="card-post--medium__title">{post.title}</h4>
                    <Flex align="center" className="card-post--medium__topics">
                        {
                            post.topics.map((topic, index) => (
                                <span key={`card-post-medium-${post.id}-${index}`}>{topic}</span>
                            ))
                        }
                    </Flex>
                    <Flex align="center" gap="small" className="card-post--medium__meta">
                        <div>{formatViews(post.views)} lượt xem</div>
                        {circleGraySvg}
                        <div>{formatToLocaleDateString(post.publishedAt)}</div>
                    </Flex>
                </Flex>
            </div>
        </Link>
    )
}

const CardPostLarge = ({post}: { post: IPost }) => {
    return (
        <Link to="/bai-viet/chi-tiet">
            <div className="card-post card-post--large">
                <div className="card-post--large__image-container">
                    <img className="card-post--large__image" alt="Card Item"
                         loading="lazy"
                         src={post.image}/>
                    <div className="card-post--large__image-overlay">Click để xem</div>
                </div>
                <div className="card-post--large__body">
                    <Flex vertical className="text-start" gap="small">
                        <Flex align="center" gap="small" className="card-post--large__author">
                            {post.author}
                            {circleBlueSvg}
                        </Flex>
                        <div className="card-post--large__title">{post.title}</div>
                        <div className="card-post--large__desc">{post.description}</div>
                    </Flex>
                    <Flex vertical gap="small">
                        <Flex className="card-post--large__topics">
                            {
                                post.topics.map((topic, index) => (
                                    <span key={"topic-large-" + post.id + "-" + index}>{topic}</span>
                                ))
                            }
                        </Flex>
                        <Flex gap="small" align="center" className="card-post--large__meta">
                            <span>{formatViews(post.views)} lượt xem</span>
                            {circleGraySvg}
                            <span>{formatToLocaleDateString(post.publishedAt)}</span>
                        </Flex>
                    </Flex>
                </div>
            </div>
        </Link>
    )
}

const CardPost = (props: CardPostProps) => {
    if (props.size === "small") {
        return <CardPostSmall post={props.post}/>;
    } else if (props.size === "medium") {
        return <CardPostMedium post={props.post}/>;
    } else {
        return (
            <CardPostLarge post={props.post}/>
        );
    }
};

export default CardPost;