import "./styles.scss";
import TitlePage from "@shared/components/TitlePage";
import React from "react";
import {Button, Col, Flex, Pagination, Row, Space} from "antd";
import {
    IconArrowDownUp,
    IconBell,
    IconCalendar,
    IconFolder,
    IconLightBulb,
    IconNews,
    IconSetting,
    IconUsers
} from "@assets/icons";
import CardPost from "@shared/components/CardPost";
import TopicPost from "@shared/components/TopicPost";
import DateRangePicker from "@shared/components/DateRangePicker";
import Carousel from "@shared/components/Carousel";
import AutocompleteSearch from "@shared/components/AutocompleteSearch";

const Post = () => {
    return (
        <React.Fragment>
            <section className="w-full" id="postSection1">
                <TitlePage title="BÀI VIẾT"/>
                <Row gutter={[24, 24]} style={{marginTop: '4.8rem'}}>
                    <Col xs={24} xl={17} xxl={18}>
                        <Carousel/>
                    </Col>
                    <Col xs={24} xl={7} xxl={6}>
                        <div className="container-new-post">
                            <h3>Bài viết mới</h3>
                            <div className="container-new-post-scroll">
                                <div className="wrap-new-post-scroll">
                                    {
                                        Array.from({length: 10}).map((_, index) => (
                                            <CardPost size="small" key={"card-post-medium-" + index}/>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </section>
            <section className="w-full" id="postSection2">
                <Row gutter={[24, 24]}>
                    <Col xs={0} sm={0} lg={0} xl={7} xxl={6}>
                        <div className="container-filter-topic">
                            <h3>CHỦ ĐỀ BÀI VIẾT</h3>
                            <Space direction="vertical" size="large" className="w-full">
                                <TopicPost icon={<IconLightBulb/>} title="Giới thiệu" variant="primary"/>
                                <TopicPost icon={<IconNews/>} title="Tin tức"/>
                                <TopicPost icon={<IconCalendar/>} title="Sự kiện"/>
                                <TopicPost icon={<IconBell/>} title="Thông báo"/>
                                <TopicPost icon={<IconFolder/>} title="Tin cổ đông"/>
                                <TopicPost icon={<IconUsers/>} title="Hoạt động đoàn thể"/>
                            </Space>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} lg={24} xl={17} xxl={18}>
                        <Flex justify="space-between" gap="small" align="center" className="container-search-filter">
                            <div className="wrap-search">
                                <AutocompleteSearch/>
                            </div>
                            <Flex gap="large" className="wrap-filter">
                                <DateRangePicker/>
                                <Flex align="center" gap="small" className="wrap-sort">
                                    <IconArrowDownUp/>
                                    <div>A đến Z</div>
                                </Flex>
                            </Flex>
                            <Flex  align="center" gap="small" className="wrap-sort-mobile">
                                <Button>
                                    <IconArrowDownUp/>
                                </Button>
                                <Button>
                                    <IconSetting/>
                                </Button>
                            </Flex>
                        </Flex>
                        <Row gutter={[24, 24]} className="container-card-posts">
                            {
                                Array.from({length: 12}).map((_, index) => (
                                    <Col xs={24} xl={8} xxl={6} key={"card-post-col-" + index}>
                                        <CardPost size="medium"/>
                                    </Col>
                                ))
                            }
                        </Row>
                    </Col>
                </Row>
                <Row justify="end">
                    <Col xs={24} sm={24} lg={24} xl={18}>
                        <Flex justify="center" align="center">
                            <div className="wrap-pagination">
                                <Pagination total={100} showSizeChanger={false} align="center"/>
                            </div>
                        </Flex>
                    </Col>
                </Row>
            </section>
        </React.Fragment>
    );
};

export default Post;