import "./styles.scss";
import React, {useEffect, useState} from "react";
import {Button, Col, Flex, Pagination, PaginationProps, Row, Space} from "antd";
import {IconChevronsDown, IconDownload, IconFile, IconSetting} from "@assets/icons";
import {Link} from "react-router-dom";
import TitlePage from "@shared/components/TitlePage";
import DateRangePicker from "@shared/components/DateRangePicker";
import AutocompleteSearch from "@shared/components/AutocompleteSearch";
import {useSingleAsync} from "@hook/useAsync.tsx";
import {getDocuments} from "../../modules/documents/repository.ts";
import {IDocumentCategory} from "../../modules/documentCategories/interface.ts";
import {getDocumentCategories} from "../../modules/documentCategories/repository.ts";
import {formatDate, scrollToViewByElementId} from "@helper/function.tsx";
import {IDocument} from "../../modules/documents/interface.ts";


const Document = () => {
    const [documents, setDocuments] = useState<IDocument[]>([]);
    const [categories, setCategories] = useState<IDocumentCategory[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [searchValue, setSearchValue] = useState<string>("");
    const loadDocuments = useSingleAsync(() => getDocuments(startDate, endDate));
    const loadDocumentCategories = useSingleAsync(getDocumentCategories);
    const [startDate, setStartDate] = useState<Date>();
    const [endDate, setEndDate] = useState<Date>(new Date());
    const pageSize: number = 10;

    useEffect(() => {
        loadDocumentCategories.execute().then((res) => setCategories(res)).catch(() => setCategories([]));
    }, []);

    useEffect(() => {
        loadDocuments.execute().then((res) => setDocuments(res)).catch(() => setDocuments([]));
    }, [startDate, endDate]);

    const onPageChange: PaginationProps['onChange'] = (page: number) => {
        setCurrentPage(page);
    }

    return (
        <React.Fragment>
            <section className="w-full text-center" id="documentSection1">
                <TitlePage title="TÀI LIỆU"/>
                <Row gutter={[22, 22]} className="categories">
                    {
                        categories.map((category) => (
                            <Col xs={8} sm={8} lg={6} xl={6} key={category.id} className="categories__item">
                                <Link to="/bai-viet">
                                    <Flex vertical align="center" justify="center" className="categories__content">
                                        <img
                                            src={category.image}
                                            alt="Image" loading="lazy"/>
                                        <IconFile className="categories__icon"/>
                                        <div className="categories__title">{category.name}</div>
                                        <div className="categories__text">Click để xem</div>
                                    </Flex>
                                </Link>
                            </Col>
                        ))
                    }
                </Row>
                <div>
                    <button id="btnScroll" className="scroll-to-bottom"
                            onClick={() => scrollToViewByElementId('btnScroll')}>
                        <IconChevronsDown/>
                    </button>
                </div>
            </section>
            <section className="w-full" id="documentSection2">
                <Flex justify="space-between" align="center" className="w-full" id="searchBar">
                    <div>
                        <label htmlFor="startDatePicker">Ngày tạo</label>
                        <DateRangePicker onChangeStartDate={(date) => setStartDate(date)} endDate={endDate}
                                         onChangeEndDate={(date) => setEndDate(date)}/>
                    </div>

                    <div>
                        <label htmlFor="search">Từ khóa</label>
                        <AutocompleteSearch value={searchValue} onChange={(value) => setSearchValue(value)}/>
                    </div>
                </Flex>

                <Flex align="center" gap="small" id="searchBarMobile">
                    <div style={{flex: 1}}>
                        <AutocompleteSearch/>
                    </div>
                    <Button>
                        <IconSetting/>
                    </Button>
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
                        documents.slice((currentPage - 1) * pageSize, currentPage * pageSize).map((doc, index) => (
                            <tr key={"tbody-" + doc.id}>
                                <td>{(currentPage - 1) * pageSize + index + 1}</td>
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
                        Hiển thị <span className="docs-per-page">{pageSize}</span> câu trả lời trong mỗi trang
                    </Space>

                    <Pagination onChange={onPageChange} total={documents.length} showSizeChanger={false}
                                align="center"/>
                </div>

            </section>
        </React.Fragment>
    );
};

export default Document;