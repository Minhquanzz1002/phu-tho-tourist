import "./styles.scss";
import {Card, Col, Flex, Row} from "antd";
import {Link} from "react-router-dom";
import {IPost} from "../../../modules/posts/interface.ts";
import React from "react";
import {formatViews} from "@helper/function.tsx";

interface ICardPostProps {
    size: "small" | "medium" | "large";
    post?: IPost;
}

const CardPostSmall = () => {
    return (
        <Link to="/bai-viet/chi-tiet">
            <Row className="container-card-post-small">
                <Col span={8}>
                    <div>
                        <img className="post-image"
                             src="https://firebasestorage.googleapis.com/v0/b/fir-alta-aef46.appspot.com/o/home%2Fsection%204%2F2.png?alt=media&token=30dbf7ce-431a-49ee-a0c1-25d04baa94c5"
                             alt="Item"/>
                    </div>
                </Col>
                <Col span={16}>
                    <Flex style={{paddingLeft: '1.2rem'}} className="h-full" gap="small" justify="center" vertical>
                        <div className="post-title">Thông báo đấu giá giữ xe tại CVHH Đầm Sen Hello Hello</div>
                        <Flex gap="small" justify="start" align="center" className="post-view">
                            <div>10k views</div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="3" height="4" viewBox="0 0 3 4" fill="none">
                                <circle cx="1.5" cy="2" r="1.5" fill="#858585"/>
                            </svg>
                            <div>20/02/2022</div>
                        </Flex>
                    </Flex>
                </Col>
            </Row>
        </Link>
    )
}

const CardPostMedium : React.FC<{post: IPost}> = ({post}) => {
    return (
        <Link to="/bai-viet/chi-tiet">
            <Card className="container-card-post-medium"
                  cover={
                      <div className="wrap-image">
                          <div>Click để xem</div>
                          <img alt="Card Item"
                               loading="lazy"
                               src={post.image}/>
                      </div>
                  }
            >
                <Flex vertical gap="small">
                    <Flex align="center" gap="small">
                        <div className="post-author">{post.author}</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                            <circle cx="3" cy="3" r="3" fill="#03A600"/>
                        </svg>
                    </Flex>
                    <h4>{post.title}</h4>
                    <Flex align="center" gap="small" className="post-tags">
                        {
                            post.topics.map((topic) => (
                                <div>{topic}</div>
                            ))
                        }
                    </Flex>
                    <Flex align="center" gap="small" className="post-view">
                        <div>{formatViews(post.views)} lượt xem</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="3" height="4" viewBox="0 0 3 4" fill="none">
                            <circle cx="1.5" cy="2" r="1.5" fill="#858585"/>
                        </svg>
                        <div>{post.publishedAt.toLocaleDateString()}</div>
                    </Flex>
                </Flex>
            </Card>
        </Link>
    )
}

const CardPostLarge = () => {
    return (
        <Link to="/bai-viet/chi-tiet">
            <Card
                className="container-card-post-large"
                cover={
                    <div className="wrap-image">
                        <div>Click để xem</div>
                        <img alt="Card Item"
                             loading="lazy"
                             src="https://firebasestorage.googleapis.com/v0/b/fir-alta-aef46.appspot.com/o/home%2Fsection%204%2F2.png?alt=media&token=30dbf7ce-431a-49ee-a0c1-25d04baa94c5"/>
                    </div>
                }
            >
                <Flex vertical className="text-start" gap="1.2rem">
                    <Flex align="center" gap="small" className="post-owner">
                        Admin
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                            <circle cx="3" cy="3" r="3" fill="#03A600"/>
                        </svg>
                    </Flex>
                    <div className="post-title">Thông báo kết quả lựa chọn nhà thầu 2 màn hình Led P4
                        Outdoor Fullcolor
                    </div>
                    <div className="post-desc">Công ty Cổ phần Dịch vụ Du lịch Phú Thọ thông báo đến các
                        nhà thầu tham gia
                        chào hàng cạnh tranh Gói thầu: Cung cấp, lắp đặt 02 màn...
                    </div>
                </Flex>
                <Flex vertical gap="0.8rem">
                    <Flex className="post-tags" gap="0.2rem">
                        <span>Sự kiện</span>
                        <span>Thông báo</span>
                        <span>Tin tức</span>
                    </Flex>
                    <Flex gap="0.8rem" align="center">
                        <span className="post-view">10N lượt xem</span>
                        <span style={{
                            width: '0.3rem',
                            height: '0.3rem',
                            background: '#858585',
                            borderRadius: '50%'
                        }}></span>
                        <span className="post-date">20/02/2022</span>
                    </Flex>
                </Flex>
            </Card>
        </Link>
    )
}

const CardPost = (props: ICardPostProps) => {
    if (props.size === "small") {
        return <CardPostSmall/>;
    } else if (props.size === "medium") {
        return <CardPostMedium  post={props.post}/>;
    } else {
        return (
            <CardPostLarge/>
        );
    }
};

export default CardPost;