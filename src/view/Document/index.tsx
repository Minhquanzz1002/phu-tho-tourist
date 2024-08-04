import "./styles.scss";
import React from "react";
import {Col, DatePicker, Flex, Input, Pagination, Row, Space} from "antd";
import {IconCalendar, IconChevronsDown, IconDownload, IconFile, IconPolygon, IconSearch} from "@assets/icons";
import {Link} from "react-router-dom";
import dayjs from "dayjs";

const dateFormat = 'DD/MM/YYYY';

interface IDocumentCategory {
    image: string;
    name: string;
}

interface IDocument {
    name: string;
    createdAt: Date;
}

const categories : IDocumentCategory[] = [
    {image: '1.png?alt=media&token=a0722431-f3a0-450c-ac66-c16d46a8bf89', name: 'Báo cáo Tài Chính năm 2022-2023'},
    {image: '2.png?alt=media&token=0d2f4400-068d-4305-a742-d576b079c12e', name: 'Báo cáo Tài Chính năm 2022-2023'},
    {image: '3.png?alt=media&token=9fa7ae28-1e2f-414d-a420-3906c1e2cbc5', name: 'Báo cáo Tài Chính năm 2022-2023'},
    {image: '4.png?alt=media&token=701d0a44-a299-43a7-b572-ee4a45076cf9', name: 'Báo cáo Tài Chính năm 2022-2023'},
    {image: '5.png?alt=media&token=7c95ed59-bdc0-4073-abc9-fc0a81482cdd', name: 'Báo cáo Tài Chính năm 2022-2023'},
    {image: '6.png?alt=media&token=41ee84df-348d-4edc-833e-5f69e1c46058', name: 'Báo cáo Tài Chính năm 2022-2023'},
    {image: '7.png?alt=media&token=62288a9a-8a9e-490f-91e5-d0383c5f1643', name: 'Báo cáo Tài Chính năm 2022-2023'},
    {image: '8.png?alt=media&token=4bfc9afb-03f3-4ed6-bb74-65d78ea79ee0', name: 'Báo cáo Tài Chính năm 2022-2023'},
]

const documents : IDocument[] = [
    {name: "Khám phá Hội An - Việt Nam", createdAt: new Date(2024, 2, 3, 15, 30)},
    {name: "Hải Phòng yêu cầu người dân không ra khỏi nhà sau 22h", createdAt: new Date(2024, 2, 3, 13, 30)},
    {name: "Chuẩn bị gì sau khi tiêm vaccin Covid -19?", createdAt: new Date(2024, 2, 3, 15, 32)},
    {name: "SNOW CHANNEL 1", createdAt: new Date("03/03/2024")},
    {name: "Chuẩn bị gì sau khi tiêm vaccin Covid -19?", createdAt: new Date(2024, 2, 3, 15, 35)},
    {name: "Hải Phòng yêu cầu người dân không ra khỏi nhà sau 22h", createdAt: new Date(2024, 2, 3, 11, 30)},
    {name: "Chuẩn bị gì sau khi tiêm vaccin Covid -19?", createdAt: new Date(2024, 2, 3, 15, 37)},
    {name: "Du lịch ở Tp.HCM đang như thế nào? 101", createdAt: new Date(2024, 2, 3, 15, 30)},
    {name: "SNOW CHANNEL 1", createdAt: new Date(2024, 2, 3, 15, 30)},
    {name: "Hải Phòng yêu cầu người dân không ra khỏi nhà sau 22h", createdAt: new Date(2024, 2, 3, 15, 30)},
]


const Document = () => {
    const formatDate = (date: Date) => {
        return dayjs(date).format('DD/MM/YY HH:mm');
    }

    return (
        <React.Fragment>
            <section className="w-full text-center" id="documentSection1">
                <div className="container-heading">
                    <IconPolygon/>
                    <div className="wrap-heading">
                        <h2>Tài liệu</h2>
                    </div>
                </div>
                <Row gutter={[22, 22]} className="wrap-cards">
                    {
                        categories.map((category, index) => (
                            <Col xs={8} sm={8} lg={6} xl={6} key={"col-" + index}>
                                <Link to="/bai-viet">
                                    <Flex vertical align="center" className="card">
                                        <img src={"https://firebasestorage.googleapis.com/v0/b/fir-alta-aef46.appspot.com/o/document%2Fsection%201%2F" + category.image} alt="Image"/>
                                        <IconFile className="icon"/>
                                        <div className="title">{category.name}</div>
                                        <div className="card-text">Click để xem</div>
                                    </Flex>
                                </Link>
                            </Col>
                        ))
                    }
                </Row>
                <div>
                    <button className="scroll-to-bottom">
                        <IconChevronsDown/>
                    </button>
                </div>
            </section>
            <section className="w-full" id="documentSection2">
                <Flex justify="space-between" align="center" className="w-full" id="searchBar">
                    <div>
                        <label htmlFor="startDatePicker">Ngày tạo</label>
                        <Flex gap="0.8rem" align="center">
                            <DatePicker id="startDatePicker" format={dateFormat} placeholder="DD/MM/YYYY"
                                        suffixIcon={<IconCalendar/>}/>
                            <span className="rectangle"></span>
                            <DatePicker format={dateFormat} placeholder="DD/MM/YYYY" suffixIcon={<IconCalendar/>}/>
                        </Flex>
                    </div>

                    <div>
                        <label htmlFor="search">Từ khóa</label>
                        <Input id="search" placeholder="Tìm kiếm" allowClear prefix={<IconSearch/>}/>
                    </div>
                </Flex>
                <table className="w-full">
                    <thead>
                    <tr>
                    <th>STT</th>
                            <th>Tên tài liệu</th>
                            <th>Ngày tạo</th>
                            <th>Tải tài liệu</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        documents.map((doc, index) => (
                            <tr key={"tbody-" + index}>
                                <td>{index + 1}</td>
                                <td>
                                    <Flex vertical gap="0.8rem">
                                        <div className="document-name">{doc.name}</div>
                                        <div className="document-created-date">{formatDate(doc.createdAt)}</div>
                                    </Flex>
                                </td>
                                <td>{formatDate(doc.createdAt)}</td>
                                <td>
                                    <button>
                                        <IconDownload/>
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>

                <div className="w-full flex table-footer">
                    <Space size="small" className="wrap-docs-per-page">
                        Hiển thị <span className="docs-per-page">10</span> câu trả lời trong mỗi trang
                    </Space>

                    <Pagination  total={100} showSizeChanger={false}  align="center"/>
                </div>

            </section>
        </React.Fragment>
    );
};

export default Document;