import "./styles.scss"
import React from 'react';
import {Flex} from "antd";

interface ITopicPostProps {
    icon: React.ReactNode;
    title: string;
    variant?: "normal" | "primary";
}

const TopicPost = ({variant = "normal",...props} : ITopicPostProps) => {
    return (
        <Flex align="center" gap="small" className={"container-topic-post topic-post-" + variant}>
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