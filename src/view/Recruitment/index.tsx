import "./styles.scss";
import {Button, Col, Flex, Pagination, PaginationProps, Row} from "antd";
import {IconBriefcase, IconIdCard, IconSetting} from "@assets/icons";
import MapPinIcon from "@assets/icons/MapPinIcon.tsx";
import TitlePage from "@shared/components/TitlePage";
import Chip from "@shared/components/Chip";
import AutocompleteSearch from "@shared/components/AutocompleteSearch";
import {useEffect, useState} from "react";
import CardJobPosting from "@view/Recruitment/components/CardJobPosting";
import {IJobPosting} from "../../modules/jobPosting/interface.ts";
import {useSingleAsync} from "@hook/useAsync.tsx";
import {getJobPostings} from "../../modules/jobPosting/repository.ts";
import {Sheet} from "react-modal-sheet";

const fields = [
    "Hướng dẫn viên",
    "Kinh doanh",
    "Kĩ sư xây dựng",
    "Nhân viên kế toán",
    "Nhân viên kĩ thuật",
    "Nhân viên phục vụ"
];

const locations = [
    "Cà Phê Vườn Đá",
    "NH Thủy Tạ Đầm Sen",
    "CVVH Đầm Sen",
    "Khách sạn Ngọc Lan",
    "Khách sạn Phú Thọ",
    "KDL Sinh Thái Vàm Sát",
    "Trung tâm DVDL Đầm Sen",
    "VP Phuthotourist"
]

const employmentTypes = [
    "Bán thời gian",
    "Nhân viên chính thức",
    "Theo ca",
    "Thực tập"
]

type FilterType = 'field' | 'location' | 'employmentType';

const Recruitment = () => {
    const [jobPostings, setJobPostings] = useState<IJobPosting[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const pageSize = 9;
    const loadJobPostings = useSingleAsync(() => getJobPostings(selectedFilters.field, selectedFilters.employmentType, selectedFilters.location));
    const [selectedFilters, setSelectedFilters] = useState<{ [key in FilterType]: string[] }>({
        field: [],
        location: [],
        employmentType: []
    });

    const [tempSelectedFilters, setTempSelectedFilters] = useState<{ [key in FilterType]: string[] }>({
        field: [],
        location: [],
        employmentType: []
    });
    const [isOpenBottomSheet, setIsOpenBottomSheet] = useState<boolean>(false);

    useEffect(() => {
        loadJobPostings.execute().then((res) => setJobPostings(res)).catch(() => setJobPostings([]));
        setTempSelectedFilters(selectedFilters);
    }, [selectedFilters]);

    const onPageChange: PaginationProps['onChange'] = (page: number) => {
        setCurrentPage(page);
    }

    const handleFilterClick = (type: FilterType, item: string) => {
        setSelectedFilters(prevState => ({
            ...prevState,
            [type]: prevState[type].includes(item) ? prevState[type].filter(t => t !== item) : [...prevState[type], item]
        }))
    }

    const handleConfirmFilter = () => {
        setSelectedFilters(tempSelectedFilters);
        setIsOpenBottomSheet(false);
    }

    return (
        <div className="recruitment-container">
            <section className="w-full" id="recruitmentSection">
                <TitlePage title="TUYỂN DỤNG"/>
                <Row gutter={24} className="wrap-main">
                    <Col xs={0} sm={0} lg={0} xl={6}>
                        <Flex vertical gap="2.4rem" className="container-search-filter bg-section">
                            <AutocompleteSearch/>
                            <div className="divider"></div>
                            <Flex gap="small">
                                <Flex justify="center" align="center" className="filter-icon"><IconBriefcase/></Flex>
                                <div className="filter-group">Lĩnh vực</div>
                            </Flex>

                            <Flex wrap gap="small">
                                {
                                    fields.map((field: string, index: number) => (
                                        <Chip key={"chip-field-" + index} label={field}
                                              onClick={() => handleFilterClick('field', field)}
                                              variant={selectedFilters['field'].includes(field) ? 'primary' : 'outline-primary'}/>
                                    ))
                                }
                            </Flex>

                            <Flex gap="small">
                                <Flex justify="center" align="center" className="filter-icon"><IconIdCard/></Flex>
                                <div className="filter-group">Hình thức làm việc</div>
                            </Flex>

                            <Flex wrap gap="small">
                                {
                                    employmentTypes.map((employmentType: string, index: number) => (
                                        <Chip key={"chip-employment-type-" + index} label={employmentType}
                                              onClick={() => handleFilterClick('employmentType', employmentType)}
                                              variant={selectedFilters['employmentType'].includes(employmentType) ? 'primary' : 'outline-primary'}/>
                                    ))
                                }
                            </Flex>

                            <Flex gap="small">
                                <Flex justify="center" align="center" className="filter-icon"><MapPinIcon
                                    style={{color: '#0054A6'}}/></Flex>
                                <div className="filter-group">Nơi làm việc</div>
                            </Flex>

                            <Flex wrap gap="small">
                                {
                                    locations.map((location: string, index: number) => (
                                        <Chip key={"chip-location-" + index} label={location}
                                              onClick={() => handleFilterClick('location', location)}
                                              variant={selectedFilters['location'].includes(location) ? 'primary' : 'outline-primary'}/>
                                    ))
                                }
                            </Flex>
                        </Flex>
                    </Col>
                    <Col xs={24} sm={24} lg={24} xl={18}>
                        <Flex align="center" gap="small" id="searchBarMobile">
                            <div style={{flex: 1}}>
                                <AutocompleteSearch/>
                            </div>
                            <Button htmlType="button" onClick={() => setIsOpenBottomSheet(true)}>
                                <IconSetting/>
                            </Button>
                        </Flex>

                        <Row gutter={[24, 24]}>
                            {
                                jobPostings.slice((currentPage - 1) * pageSize, currentPage * pageSize).map((job, index) => (
                                    <Col key={"job-" + index} xs={24} sm={12} lg={12} xl={12} xxl={8}>
                                        <CardJobPosting job={job}/>
                                    </Col>
                                ))
                            }
                        </Row>
                    </Col>
                </Row>
                <Row className="container-pagination">
                    <Col xs={0} sm={0} lg={6} xl={6}>
                    </Col>
                    <Col xs={24} sm={24} lg={18} xl={18}>
                        <Flex justify="center">
                            <div className="wrap-pagination">
                                <Pagination pageSize={pageSize} onChange={onPageChange} total={jobPostings.length}
                                            showSizeChanger={false} align="center"/>
                            </div>
                        </Flex>
                    </Col>
                </Row>
            </section>

            <Sheet isOpen={isOpenBottomSheet} onClose={() => setIsOpenBottomSheet(false)} detent="content-height">
                <Sheet.Container>
                    <Sheet.Header/>
                    <Sheet.Content>
                        <Sheet.Scroller>
                            <div style={{padding: '0.8rem 2.4rem 3.2rem'}}>
                                <Flex gap="small" align="center">
                                    <Flex justify="center" align="center"
                                          className="filter-icon"><IconBriefcase/></Flex>
                                    <div className="filter-label">Lĩnh vực</div>
                                </Flex>
                                <Flex wrap gap="0.2rem" style={{marginTop: '2rem'}}>
                                    {
                                        fields.map((field: string, index: number) => (
                                            <Chip key={"chip-field-" + index} label={field}
                                                  style={{backgroundColor: 'rgba(230, 238, 247, 1)'}}
                                                  onClick={() => handleFilterClick('field', field)}
                                                  variant={tempSelectedFilters['field'].includes(field) ? 'primary' : 'outline-primary'}/>
                                        ))
                                    }
                                </Flex>

                                <Flex gap="small" align="center" style={{marginTop: '2rem'}}>
                                    <Flex justify="center" align="center" className="filter-icon"><IconIdCard/></Flex>
                                    <div className="filter-label">Hình thức làm việc</div>
                                </Flex>

                                <Flex wrap gap="0.2rem" style={{marginTop: '2rem'}}>
                                    {
                                        employmentTypes.map((employmentType: string, index: number) => (
                                            <Chip key={"chip-employment-type-" + index} label={employmentType}
                                                  style={{backgroundColor: 'rgba(230, 238, 247, 1)'}}
                                                  onClick={() => handleFilterClick('employmentType', employmentType)}
                                                  variant={tempSelectedFilters['employmentType'].includes(employmentType) ? 'primary' : 'outline-primary'}/>
                                        ))
                                    }
                                </Flex>

                                <Flex gap="small" style={{marginTop: '2rem'}}>
                                    <Flex justify="center" align="center" className="filter-icon"><MapPinIcon
                                        style={{color: '#0054A6'}}/></Flex>
                                    <div className="filter-label">Nơi làm việc</div>
                                </Flex>

                                <Flex wrap gap="0.2rem" style={{marginTop: '2rem'}}>
                                    {
                                        locations.map((location: string, index: number) => (
                                            <Chip key={"chip-location-" + index} label={location}
                                                  style={{backgroundColor: 'rgba(230, 238, 247, 1)'}}
                                                  onClick={() => handleFilterClick('location', location)}
                                                  variant={tempSelectedFilters['location'].includes(location) ? 'primary' : 'outline-primary'}/>
                                        ))
                                    }
                                </Flex>

                                <Flex justify="space-between" style={{marginTop: '2rem'}}>
                                    <Button style={{fontFamily: 'Roboto', fontWeight: 600, fontSize:'1.4rem'}} type="primary" ghost onClick={() => setIsOpenBottomSheet(false)}>Hủy</Button>
                                    <Button style={{fontFamily: 'Roboto', fontWeight: 600, fontSize:'1.4rem'}} htmlType="button" type="primary" onClick={handleConfirmFilter}>Xác nhận</Button>
                                </Flex>
                            </div>
                        </Sheet.Scroller>
                    </Sheet.Content>
                </Sheet.Container>
                <Sheet.Backdrop onTap={() => setIsOpenBottomSheet(false)}/>
            </Sheet>
        </div>
    );
};

export default Recruitment;