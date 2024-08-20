import "./styles.scss";
import React from 'react';
import {Button, Col, DatePicker, Flex, Form, Input, Radio, Row, Space} from "antd";
import {IconPaperclip} from "@assets/icons";

const FormApplication = React.memo(() => {
    return (
        <Form layout="vertical" className="form-application">
            <Row gutter={50}>
                <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                    <Form.Item name="name" label={<span className="label">Họ tên</span>}>
                        <Input placeholder="Nguyễn Văn A"/>
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                    <Form.Item label={<span className="label">Giới tính</span>} name="gender">
                        <Radio.Group defaultValue={1}>
                            <Space>
                                <Radio value={1}>Nam</Radio>
                                <Radio value={2}>Nữ</Radio>
                            </Space>
                        </Radio.Group>
                    </Form.Item>
                </Col>
            </Row>


            <Row gutter={50}>
                <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                    <Form.Item name="birthday" label={<span className="label">Năm sinh</span>}>
                        <DatePicker className="w-full" placeholder="12-12-2000" suffixIcon=""/>
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                    <Form.Item name="placeOfBirth" label={<span className="label">Nơi sinh</span>}>
                        <Input placeholder="Phường 6, Quận Tân Bình, TP HCM"/>
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={50}>
                <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                    <Form.Item name="address" label={<span className="label">Nơi ở hiện tại</span>}>
                        <Input placeholder="123 Âu Cơ, Phường 9, Tân Bình, TP HCM"/>
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                    <Form.Item name="phone" label={<span className="label">Điện thoại</span>}>
                        <Flex>
                            <div>84</div>
                            <Input placeholder="0123456789"/>
                        </Flex>
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={50}>
                <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                    <Form.Item name="email" label={<span className="label">Email</span>}>
                        <Input type="email" placeholder="Nguyenvana@gmail.com"/>
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                    <Form.Item name="facebook" label={<span className="label">Facebook cá nhân</span>}>
                        <Input placeholder="facebook.com.vn"/>
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={50}>
                <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                    <Form.Item name="education" label={<span className="label">Trình độ</span>}>
                        <Input placeholder="Đại học"/>
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                    <Form.Item htmlFor="cv" name="cv" label={<span className="label">Đính kèm CV</span>}>
                        {/*<Upload className="w-full" maxCount={1}>*/}
                        {/*    <Button className="w-full" icon={<IconPaperclip/>} iconPosition="end" htmlType="button">Không*/}
                        {/*        có tập tin nào được chọn</Button>*/}
                        {/*</Upload>*/}
                        <input name="cv" type="file" style={{ display: 'none' }} accept=".pdf"/>
                        <Button style={{fontWeight: 400, textAlign: 'start'}} icon={<IconPaperclip/>} iconPosition="end" className="w-full">
                            Không có tập tin nào được chọn
                        </Button>
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={50}>
                <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                    <Form.Item label={<span className="label">Bạn có sẵn sàng đi công tác dài ngày</span>}>
                        <Radio.Group defaultValue={1}>
                            <Space>
                                <Radio value={1}>Có</Radio>
                                <Radio value={2}>Tùy thời điểm</Radio>
                                <Radio value={3}>Không</Radio>
                            </Space>
                        </Radio.Group>
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                    <Form.Item label={<span className="label">Bạn có sẵn sàng làm thêm giờ</span>}>
                        <Radio.Group defaultValue={1}>
                            <Space>
                                <Radio value={1}>Có</Radio>
                                <Radio value={2}>Tùy thời điểm</Radio>
                                <Radio value={3}>Không</Radio>
                            </Space>
                        </Radio.Group>
                    </Form.Item>
                </Col>
            </Row>

            <Form.Item name="previousWorkplaces"
                       label={<span className="label">Những nơi đã từng làm việc trước đây <span
                           style={{fontWeight: 400}}>(Ghi rõ vị trí)</span></span>}>
                <Input.TextArea rows={4} placeholder="Những nơi đã từng làm việc trước đây"/>
            </Form.Item>

            <Form.Item name="personalExperience" label={<span className="label">Kinh nghiệm bản thân</span>}>
                <Input.TextArea rows={4} placeholder="Kinh nghiệm bản thân"/>
            </Form.Item>

            <Flex justify="end">
                <Button htmlType="submit" type="primary" size="large">Gửi ngay</Button>
            </Flex>
        </Form>
    );
});

export default FormApplication;