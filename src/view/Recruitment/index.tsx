import "./styles.scss";
import {Button, Col, Flex, Pagination, PaginationProps, Row} from "antd";
import {IconBriefcase, IconIdCard, IconSetting} from "@assets/icons";
import MapPinIcon from "@assets/icons/MapPinIcon.tsx";
import TitlePage from "@shared/components/TitlePage";
import Chip from "@shared/components/Chip";
import AutocompleteSearch from "@shared/components/AutocompleteSearch";
import React, {useEffect, useState} from "react";
import CardJobPosting from "@view/Recruitment/components/CardJobPosting";
import {IJobPosting} from "../../modules/jobPosting/interface.ts";
import {useSingleAsync} from "@hook/useAsync.tsx";
import {getJobPostings} from "../../modules/jobPosting/repository.ts";
import {Sheet} from "react-modal-sheet";

// const sampleJobPostings: IJobPosting[] = [
//     {
//         id: "1",
//         logo: "https://firebasestorage.googleapis.com/v0/b/fir-alta-aef46.appspot.com/o/recruitment%2Fdetail%2Flogo.svg?alt=media&token=340fefbe-a1b5-4416-b5d5-b3db83becffc",
//         field: "Nhân viên thiết kế đồ họa",
//         employmentType: "Nhân viên chính thức",
//         location: "CVVH Đầm Sen",
//         description: "Trung tâm dịch vụ du lịch Đầm Sen cần tuyển 2 Nhân viên kinh doanh lữ hành. Yêu cầu: Tốt nghiệp CĐ, ĐH chuyên ngành Du lịch, QT kinh doanh, Marketing. Am hiểu tâm lý ...",
//         status: JobStatus.Open,
//         postDate: new Date(),
//     },
//     {
//         id: "2",
//         logo: "https://firebasestorage.googleapis.com/v0/b/fir-alta-aef46.appspot.com/o/recruitment%2Fdetail%2Flogo.svg?alt=media&token=340fefbe-a1b5-4416-b5d5-b3db83becffc",
//         field: "Nhân viên marketing",
//         employmentType: "Thực tập sinh",
//         location: "CVVH Đầm Sen",
//         description: "Cần tuyển thực tập sinh marketing có kiến thức cơ bản về digital marketing, có khả năng viết content. Ưu tiên ứng viên có kinh nghiệm làm việc trong lĩnh vực du lịch.",
//         status: JobStatus.Closed,
//         postDate: new Date(),
//     },
//     {
//         id: "3",
//         logo: "https://firebasestorage.googleapis.com/v0/b/fir-alta-aef46.appspot.com/o/recruitment%2Fdetail%2Flogo.svg?alt=media&token=340fefbe-a1b5-4416-b5d5-b3db83becffc",
//         field: "Hướng dẫn viên du lịch",
//         employmentType: "Nhân viên bán thời gian",
//         location: "CVVH Đầm Sen",
//         description: "Tuyển hướng dẫn viên du lịch bán thời gian, có chứng chỉ hành nghề, thông thạo tiếng Anh hoặc một ngoại ngữ khác. Ưu tiên sinh viên năm cuối ngành Du lịch.",
//         status: JobStatus.Open,
//         postDate: new Date(),
//     },
//     {
//         id: "4",
//         logo: "https://firebasestorage.googleapis.com/v0/b/fir-alta-aef46.appspot.com/o/recruitment%2Fdetail%2Flogo.svg?alt=media&token=340fefbe-a1b5-4416-b5d5-b3db83becffc",
//         field: "Nhân viên kế toán",
//         employmentType: "Nhân viên chính thức",
//         location: "CVVH Đầm Sen",
//         description: "Cần tuyển nhân viên kế toán có kinh nghiệm làm việc tối thiểu 2 năm trong lĩnh vực du lịch, giải trí. Thành thạo các phần mềm kế toán, có chứng chỉ hành nghề.",
//         status: JobStatus.Closed,
//         postDate: new Date(),
//     },
//     {
//         id: "5",
//         logo: "https://firebasestorage.googleapis.com/v0/b/fir-alta-aef46.appspot.com/o/recruitment%2Fdetail%2Flogo.svg?alt=media&token=340fefbe-a1b5-4416-b5d5-b3db83becffc",
//         field: "Nhân viên kế toán",
//         employmentType: "Nhân viên chính thức",
//         location: "CVVH Đầm Sen",
//         description: "Cần tuyển nhân viên kế toán có kinh nghiệm làm việc tối thiểu 2 năm trong lĩnh vực du lịch, giải trí. Thành thạo các phần mềm kế toán, có chứng chỉ hành nghề.",
//         status: JobStatus.Closed,
//         postDate: new Date(),
//     },
//     {
//         id: "6",
//         logo: "https://firebasestorage.googleapis.com/v0/b/fir-alta-aef46.appspot.com/o/recruitment%2Fdetail%2Flogo.svg?alt=media&token=340fefbe-a1b5-4416-b5d5-b3db83becffc",
//         field: "Nhân viên kế toán",
//         employmentType: "Nhân viên chính thức",
//         location: "CVVH Đầm Sen",
//         description: "Cần tuyển nhân viên kế toán có kinh nghiệm làm việc tối thiểu 2 năm trong lĩnh vực du lịch, giải trí. Thành thạo các phần mềm kế toán, có chứng chỉ hành nghề.",
//         status: JobStatus.Open,
//         postDate: new Date(),
//     },
//     {
//         id: "7",
//         logo: "https://firebasestorage.googleapis.com/v0/b/fir-alta-aef46.appspot.com/o/recruitment%2Fdetail%2Flogo.svg?alt=media&token=340fefbe-a1b5-4416-b5d5-b3db83becffc",
//         field: "Nhân viên kế toán",
//         employmentType: "Nhân viên chính thức",
//         location: "CVVH Đầm Sen",
//         description: "Cần tuyển nhân viên kế toán có kinh nghiệm làm việc tối thiểu 2 năm trong lĩnh vực du lịch, giải trí. Thành thạo các phần mềm kế toán, có chứng chỉ hành nghề.",
//         status: JobStatus.Closed,
//         postDate: new Date(),
//     },
//     {
//         id: "8",
//         logo: "https://firebasestorage.googleapis.com/v0/b/fir-alta-aef46.appspot.com/o/recruitment%2Fdetail%2Flogo.svg?alt=media&token=340fefbe-a1b5-4416-b5d5-b3db83becffc",
//         field: "Nhân viên kế toán",
//         employmentType: "Nhân viên chính thức",
//         location: "CVVH Đầm Sen",
//         description: "Cần tuyển nhân viên kế toán có kinh nghiệm làm việc tối thiểu 2 năm trong lĩnh vực du lịch, giải trí. Thành thạo các phần mềm kế toán, có chứng chỉ hành nghề.",
//         status: JobStatus.Open,
//         postDate: new Date(),
//     },
//     {
//         id: "9",
//         logo: "https://firebasestorage.googleapis.com/v0/b/fir-alta-aef46.appspot.com/o/recruitment%2Fdetail%2Flogo.svg?alt=media&token=340fefbe-a1b5-4416-b5d5-b3db83becffc",
//         field: "Nhân viên kế toán",
//         employmentType: "Nhân viên chính thức",
//         location: "CVVH Đầm Sen",
//         description: "Cần tuyển nhân viên kế toán có kinh nghiệm làm việc tối thiểu 2 năm trong lĩnh vực du lịch, giải trí. Thành thạo các phần mềm kế toán, có chứng chỉ hành nghề.",
//         status: JobStatus.Open,
//         postDate: new Date(),
//     }
// ]

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
    const [isOpenBottomSheet, setIsOpenBottomSheet] = useState<boolean>(false);

    useEffect(() => {
        loadJobPostings.execute().then((res) => setJobPostings(res)).catch(() => setJobPostings([]));
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

    return (
        <React.Fragment>
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
                        <div style={{padding: '0.8rem 2.4rem 3.2rem'}}>
                            <Flex gap="small" align="center">
                                <Flex justify="center" align="center" className="filter-icon"><IconBriefcase/></Flex>
                                <div>Lĩnh vực</div>
                            </Flex>
                            <Flex wrap gap="small" style={{marginTop: '2rem'}}>
                                {
                                    fields.map((field: string, index: number) => (
                                        <Chip key={"chip-field-" + index} label={field}
                                              style={{backgroundColor: 'rgba(230, 238, 247, 1)'}}
                                              onClick={() => handleFilterClick('field', field)}
                                              variant={selectedFilters['field'].includes(field) ? 'primary' : 'outline-primary'}/>
                                    ))
                                }
                            </Flex>

                            <Flex gap="small" align="center" style={{marginTop: '2rem'}}>
                                <Flex justify="center" align="center" className="filter-icon"><IconIdCard/></Flex>
                                <div>Hình thức làm việc</div>
                            </Flex>

                            <Flex wrap gap="small" style={{marginTop: '2rem'}}>
                                {
                                    employmentTypes.map((employmentType: string, index: number) => (
                                        <Chip key={"chip-employment-type-" + index} label={employmentType}
                                              style={{backgroundColor: 'rgba(230, 238, 247, 1)'}}
                                              onClick={() => handleFilterClick('employmentType', employmentType)}
                                              variant={selectedFilters['employmentType'].includes(employmentType) ? 'primary' : 'outline-primary'}/>
                                    ))
                                }
                            </Flex>

                            <Flex gap="small" style={{marginTop: '2rem'}}>
                                <Flex justify="center" align="center" className="filter-icon"><MapPinIcon
                                    style={{color: '#0054A6'}}/></Flex>
                                <div className="filter-group">Nơi làm việc</div>
                            </Flex>

                            <Flex wrap gap="small" style={{marginTop: '2rem'}}>
                                {
                                    locations.map((location: string, index: number) => (
                                        <Chip key={"chip-location-" + index} label={location}
                                              style={{backgroundColor: 'rgba(230, 238, 247, 1)'}}
                                              onClick={() => handleFilterClick('location', location)}
                                              variant={selectedFilters['location'].includes(location) ? 'primary' : 'outline-primary'}/>
                                    ))
                                }
                            </Flex>
                        </div>
                    </Sheet.Content>
                </Sheet.Container>
                <Sheet.Backdrop onTap={() => setIsOpenBottomSheet(false)}/>
            </Sheet>
        </React.Fragment>
    );
};

export default Recruitment;