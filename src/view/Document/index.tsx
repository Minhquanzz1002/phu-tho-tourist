import "./styles.scss";
import React, {useEffect, useState} from "react";
import {Button, Col, Flex, Pagination, PaginationProps, Row, Space} from "antd";
import {IconChevronsDown, IconDownload, IconFile, IconSetting} from "@assets/icons";
import {Link} from "react-router-dom";
import TitlePage from "@shared/components/TitlePage";
import DateRangePicker from "@shared/components/DateRangePicker";
import AutocompleteSearch from "@shared/components/AutocompleteSearch";
import {useSingleAsync} from "@hook/useAsync";
import {getDocuments} from "../../modules/documents/repository";
import {IDocumentCategory} from "../../modules/documentCategories/interface";
import {getDocumentCategories} from "../../modules/documentCategories/repository";
import {formatDate, scrollToViewByElementId} from "@helper/function";
import {IDocument} from "../../modules/documents/interface";
import DateRangeCustom from "@shared/components/DateRange";
import BottomSheet from "@shared/components/BottomSheet";


const Document = () => {
    const [documents, setDocuments] = useState<IDocument[]>([]);
    const [categories, setCategories] = useState<IDocumentCategory[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [searchValue, setSearchValue] = useState<string>("");
    const loadDocuments = useSingleAsync(() => getDocuments(startDate, endDate));
    const loadDocumentCategories = useSingleAsync(getDocumentCategories);
    const [startDate, setStartDate] = useState<Date | undefined>();
    const [tempStartDate, setTempStartDate] = useState<Date | undefined>();
    const [endDate, setEndDate] = useState<Date | undefined>(new Date());
    const [tempEndDate, setTempEndDate] = useState<Date | undefined>(new Date());
    const [isOpenFilterBottomSheet, setIsOpenFilterBottomSheet] = useState<boolean>(false);
    const pageSize: number = 10;

    useEffect(() => {
        loadDocumentCategories.execute().then((res) => setCategories(res)).catch(() => setCategories([]));
    }, []);

    useEffect(() => {
        loadDocuments.execute().then((res) => setDocuments(res)).catch(() => setDocuments([]));
    }, [startDate, endDate]);

    useEffect(() => {
        setTempStartDate(startDate);
    }, [startDate]);

    useEffect(() => {
        setTempEndDate(endDate);
    }, [endDate]);

    const onPageChange: PaginationProps['onChange'] = (page: number) => {
        setCurrentPage(page);
    }

    const handleConfirmFilter = () => {
        setStartDate(tempStartDate);
        setEndDate(tempEndDate);
        setIsOpenFilterBottomSheet(false);
    }

    return (
        <React.Fragment>
            <div className="document-container">
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
                            <DateRangePicker onChangeStartDate={(date) => setStartDate(date)} endDate={endDate} startDate={startDate}
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
                        <Button htmlType="button" onClick={() => setIsOpenFilterBottomSheet(true)}>
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
            </div>

            <BottomSheet isOpen={isOpenFilterBottomSheet} onClose={() => setIsOpenFilterBottomSheet(false)}>
                <div className="bottom-sheet__heading">Ngày tạo</div>

                <Flex justify="center" align="center">
                    <DateRangeCustom startDate={tempStartDate} endDate={tempEndDate}
                                     onChangeStartDate={(date) => setTempStartDate(date)}
                                     onChangeEndDate={(date) => setTempEndDate(date)}/>
                </Flex>

                <Flex align="center" justify="space-between">
                    <Button htmlType="button" type="primary" ghost
                            onClick={() => setIsOpenFilterBottomSheet(false)}>Hủy</Button>
                    <Button htmlType="button" type="primary" onClick={handleConfirmFilter}>Xác nhận</Button>
                </Flex>
            </BottomSheet>
        </React.Fragment>
    );
};

export default Document;