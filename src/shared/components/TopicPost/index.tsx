import "./styles.scss"
import React from 'react';
import {Flex} from "antd";

interface ITopicPostProps {
    icon: React.ReactNode;
    title: string;
    variant?: "normal" | "primary";
    onClick: React.MouseEventHandler<HTMLElement> | undefined;
    style?: React.CSSProperties;
}

const TopicPost = ({variant = "normal", ...props}: ITopicPostProps) => {
    return (
        <Flex align="center" style={props.style} gap="small" className={"topic-post topic-post-" + variant}
              onClick={props.onClick}>
            <Flex justify="center" align="center" className="wrap-icon">
                {props.icon}
            </Flex>
            <div>
                {props.title}
            </div>
        </Flex>
    );
};

export default TopicPost;