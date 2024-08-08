import "./styles.scss";
import {Card, Col, Flex, Row} from "antd";
import {Link} from "react-router-dom";

interface ICardPostProps {
    size: "small" | "medium" | "large";
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
                        <div className="post-title">Thông báo đấu giá giữ xe tại CVHH Đầm Sen Hello  Hello</div>
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

const CardPostMedium = () => {
    return (
        <Link to="/bai-viet/chi-tiet">
            <Card className="container-card-post-medium" cover={
                <div className="wrap-image">
                    <div>Click để xem</div>
                    <img alt="Card Item"
                         loading="lazy"
                         src="https://firebasestorage.googleapis.com/v0/b/fir-alta-aef46.appspot.com/o/home%2Fsection%204%2F2.png?alt=media&token=30dbf7ce-431a-49ee-a0c1-25d04baa94c5"/>
                </div>
            }>
                <Flex vertical gap="small">
                    <Flex align="center" gap="small">
                        <div className="post-author">Admin</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                            <circle cx="3" cy="3" r="3" fill="#03A600"/>
                        </svg>
                    </Flex>
                    <h4>Thông báo: đấu giá giữ xe tại CVHH Đầm Sen</h4>
                    <Flex align="center" gap="small" className="post-tags">
                        <div>Sự kiện</div>
                        <div>Thông báo</div>
                        <div>Tin tức</div>
                    </Flex>
                    <Flex align="center" gap="small" className="post-view">
                        <div>10N lượt xem</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="3" height="4" viewBox="0 0 3 4" fill="none">
                            <circle cx="1.5" cy="2" r="1.5" fill="#858585"/>
                        </svg>
                        <div>20/02/2022</div>
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
        return <CardPostMedium/>;
    } else {
        return (
            <Link to="/bai-viet/chi-tiet">
                <Card cover={
                    <div>
                        <img alt="Card Item"
                             loading="lazy"
                             src="https://firebasestorage.googleapis.com/v0/b/fir-alta-aef46.appspot.com/o/home%2Fsection%204%2F2.png?alt=media&token=30dbf7ce-431a-49ee-a0c1-25d04baa94c5"/>
                    </div>
                }>
                    <Flex vertical>
                        <Flex align="center" gap="small">
                            <div>Admin</div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                                <circle cx="3" cy="3" r="3" fill="#03A600"/>
                            </svg>
                        </Flex>
                        <h4>Thông báo: đấu giá giữ xe tại CVHH Đầm Sen</h4>
                        <Flex align="center" gap="small">
                            <div>Sự kiện</div>
                            <div>Thông báo</div>
                            <div>Tin tức</div>
                        </Flex>
                        <Flex align="center" gap="small">
                            <div>10N lượt xem</div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="3" height="4" viewBox="0 0 3 4" fill="none">
                                <circle cx="1.5" cy="2" r="1.5" fill="#858585"/>
                            </svg>
                            <div>20/02/2022</div>
                        </Flex>
                    </Flex>
                </Card>
            </Link>
        );
    }
};

export default CardPost;