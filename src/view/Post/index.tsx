import "./styles.scss";
import TitlePage from "@shared/components/TitlePage";
import React from "react";
import {Col, DatePicker, Flex, Input, Row, Space} from "antd";
import {IconCalendar, IconSearch} from "@assets/icons";
import CardPost from "@shared/components/CardPost";
const dateFormat = 'DD/MM/YYYY';

const Post = () => {
    return (
        <React.Fragment>
            <section className="w-full">
                <TitlePage title="BÀI VIẾT"/>
            </section>
            <section className="w-full">
                <Row gutter={[24, 24]}>
                    <Col xs={0} sm={0} lg={0} xl={6}>
                        <div className="bg-section  bg-section-rounded">
                            <Space direction="vertical" size="large">
                                <Flex align="center">
                                    Giới thiệu
                                </Flex>
                                <Flex align="center">
                                    Tin tức
                                </Flex>
                                <Flex align="center">
                                    Sự kiện
                                </Flex>
                                <Flex align="center">
                                    Thông báo
                                </Flex>
                                <Flex align="center">
                                    Tin cổ đông
                                </Flex>
                                <Flex align="center">
                                    Hoạt động đoàn thể
                                </Flex>
                            </Space>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} lg={24} xl={18}>
                        <Flex justify="space-between" align="center" className="bg-section bg-section-rounded">
                            <Input id="search" placeholder="Tìm kiếm" allowClear prefix={<IconSearch/>}/>
                            <Flex gap="small">
                                <Flex gap="small" align="center">
                                    <DatePicker id="startDatePicker" format={dateFormat} placeholder="DD/MM/YYYY"
                                                suffixIcon={<IconCalendar/>}/>
                                    <span className="rectangle"></span>
                                    <DatePicker format={dateFormat} placeholder="DD/MM/YYYY" suffixIcon={<IconCalendar/>}/>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Row>
                            <Col xxl={6}>
                                <CardPost/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </section>
        </React.Fragment>
    );
};

export default Post;