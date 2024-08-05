import "./styles.scss";
import {Avatar, Button, Col, Flex, Input, Pagination, Row, Space} from "antd";
import {IconBriefcase, IconIdCard, IconSearch} from "@assets/icons";
import MapPinIcon from "@assets/icons/MapPinIcon.tsx";
import TitlePage from "@shared/components/TitlePage";
import Chip from "@shared/components/Chip";

interface IJobPosting {
    position: string;
    type: string;
    location: string;
    description: string;
    status: string;
    createdAt: string;
}

const jobPostings: IJobPosting[] = [
    {
        position: "Nhân viên thiết kế đồ họa",
        type: "Nhân viên chính thức",
        location: "CVVH Đầm Sen",
        description: "Trung tâm dịch vụ du lịch Đầm Sen cần tuyển 2 Nhân viên kinh doanh lữ hành. Yêu cầu: Tốt nghiệp CĐ, ĐH chuyên ngành Du lịch, QT kinh doanh, Marketing. Am hiểu tâm lý ...",
        status: "Đang tuyển",
        createdAt: "2 tuần trước"
    },
    {
        position: "Nhân viên marketing",
        type: "Thực tập sinh",
        location: "CVVH Đầm Sen",
        description: "Cần tuyển thực tập sinh marketing có kiến thức cơ bản về digital marketing, có khả năng viết content. Ưu tiên ứng viên có kinh nghiệm làm việc trong lĩnh vực du lịch.",
        status: "Đang tuyển",
        createdAt: "1 tuần trước"
    },
    {
        position: "Hướng dẫn viên du lịch",
        type: "Nhân viên bán thời gian",
        location: "CVVH Đầm Sen",
        description: "Tuyển hướng dẫn viên du lịch bán thời gian, có chứng chỉ hành nghề, thông thạo tiếng Anh hoặc một ngoại ngữ khác. Ưu tiên sinh viên năm cuối ngành Du lịch.",
        status: "Đã hết hạn",
        createdAt: "1 tháng trước"
    },
    {
        position: "Nhân viên kế toán",
        type: "Nhân viên chính thức",
        location: "CVVH Đầm Sen",
        description: "Cần tuyển nhân viên kế toán có kinh nghiệm làm việc tối thiểu 2 năm trong lĩnh vực du lịch, giải trí. Thành thạo các phần mềm kế toán, có chứng chỉ hành nghề.",
        status: "Đang tuyển",
        createdAt: "3 ngày trước"
    },
    {
        position: "Nhân viên kế toán",
        type: "Nhân viên chính thức",
        location: "CVVH Đầm Sen",
        description: "Cần tuyển nhân viên kế toán có kinh nghiệm làm việc tối thiểu 2 năm trong lĩnh vực du lịch, giải trí. Thành thạo các phần mềm kế toán, có chứng chỉ hành nghề.",
        status: "Đang tuyển",
        createdAt: "3 ngày trước"
    },
    {
        position: "Nhân viên kế toán",
        type: "Nhân viên chính thức",
        location: "CVVH Đầm Sen",
        description: "Cần tuyển nhân viên kế toán có kinh nghiệm làm việc tối thiểu 2 năm trong lĩnh vực du lịch, giải trí. Thành thạo các phần mềm kế toán, có chứng chỉ hành nghề.",
        status: "Đang tuyển",
        createdAt: "3 ngày trước"
    },
    {
        position: "Nhân viên kế toán",
        type: "Nhân viên chính thức",
        location: "CVVH Đầm Sen",
        description: "Cần tuyển nhân viên kế toán có kinh nghiệm làm việc tối thiểu 2 năm trong lĩnh vực du lịch, giải trí. Thành thạo các phần mềm kế toán, có chứng chỉ hành nghề.",
        status: "Đang tuyển",
        createdAt: "3 ngày trước"
    },
    {
        position: "Nhân viên kế toán",
        type: "Nhân viên chính thức",
        location: "CVVH Đầm Sen",
        description: "Cần tuyển nhân viên kế toán có kinh nghiệm làm việc tối thiểu 2 năm trong lĩnh vực du lịch, giải trí. Thành thạo các phần mềm kế toán, có chứng chỉ hành nghề.",
        status: "Đang tuyển",
        createdAt: "3 ngày trước"
    },
    {
        position: "Nhân viên kế toán",
        type: "Nhân viên chính thức",
        location: "CVVH Đầm Sen",
        description: "Cần tuyển nhân viên kế toán có kinh nghiệm làm việc tối thiểu 2 năm trong lĩnh vực du lịch, giải trí. Thành thạo các phần mềm kế toán, có chứng chỉ hành nghề.",
        status: "Đang tuyển",
        createdAt: "3 ngày trước"
    }
]

const Recruitment = () => {
    return (
        <section className="w-full" id="recruitmentSection">
            <TitlePage title="TUYỂN DỤNG"/>
            <Row gutter={24} className="wrap-main">
                <Col xs={0} sm={0} lg={0} xl={6}>
                    <Flex vertical gap="2.4rem" className="container-search-filter bg-section">
                        <Input placeholder="Tìm kiếm" allowClear prefix={<IconSearch/>}/>
                        <div className="divider"></div>
                        <Flex gap="small">
                            <Flex justify="center" align="center" className="filter-icon"><IconBriefcase/></Flex>
                            <div className="filter-group">Lĩnh vực</div>
                        </Flex>

                        <Flex wrap gap="small">
                            <Chip label="Hướng dẫn viên"/>
                            <Chip label="Kinh doanh" variant="outline-primary"/>
                            <Chip label="Kĩ sư xây dựng" variant="outline-primary"/>
                            <Chip label="Nhân viên kế toán" variant="outline-primary"/>
                            <Chip label="Nhân viên kĩ thuật" variant="outline-primary"/>
                            <Chip label="Nhân viên phục vụ" variant="outline-primary"/>
                        </Flex>

                        <Flex gap="small">
                            <Flex justify="center" align="center" className="filter-icon"><IconIdCard/></Flex>
                            <div className="filter-group">Hình thức làm việc</div>
                        </Flex>

                        <Flex wrap gap="small">
                            <Chip label="Bán thời gian"/>
                            <Chip label="Nhân viên chính thức" variant="outline-primary"/>
                            <Chip label="Theo ca" variant="outline-primary"/>
                            <Chip label="Thực tập" variant="outline-primary"/>
                        </Flex>

                        <Flex gap="small">
                            <Flex justify="center" align="center" className="filter-icon"><MapPinIcon/></Flex>
                            <div className="filter-group">Nơi làm việc</div>
                        </Flex>

                        <Flex wrap gap="small">
                            <Chip label="Cà Phê Vườn Đá"/>
                            <Chip label="NH Thủy Tạ Đầm Sen" variant="outline-primary"/>
                            <Chip label="CVVH Đầm Sen" variant="outline-primary"/>
                            <Chip label="Khách sạn Ngọc Lan" variant="outline-primary"/>
                            <Chip label="Khách sạn Phú Thọ" variant="outline-primary"/>
                            <Chip label="KDL Sinh Thái Vàm Sát" variant="outline-primary"/>
                            <Chip label="Trung tâm DVDL Đầm Sen" variant="outline-primary"/>
                            <Chip label="VP Phuthotourist" variant="outline-primary"/>
                        </Flex>
                    </Flex>
                </Col>
                <Col xs={24} sm={24} lg={24} xl={18}>
                    <Row gutter={[24, 24]}>
                        {
                            jobPostings.map((job, index) => (
                                <Col key={"job-" + index} xs={24} sm={12} lg={12} xl={12} xxl={8}>
                                    <div className="card">
                                        <Flex align="center" gap="middle" className="w-full">
                                            <div className="card-wrap-avatar">
                                                <Avatar src="/avt.png" size="large"/>
                                            </div>
                                            <Space direction="vertical" className="w-full">
                                                <div className="card-title">{job.position}</div>
                                                <div className="card-subtitle">{job.type}</div>
                                                <Flex justify="space-between">
                                                    <Space direction="vertical" className="job-location">
                                                        <Flex align="center" gap="small">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                 height="16" viewBox="0 0 16 16" fill="none">
                                                                <path
                                                                    d="M14.4789 5.45988C13.6902 2.15451 10.6629 0.666382 8.00377 0.666382H7.99625C5.3446 0.666382 2.30986 2.14736 1.52112 5.45272C0.642246 9.14443 3.01596 12.2709 5.16432 14.2384C5.92581 14.9404 6.94401 15.3329 8.00377 15.333C9.02536 15.333 10.047 14.9682 10.8357 14.2384C12.9841 12.2709 15.3578 9.15159 14.4789 5.45988ZM8.00377 9.04427C7.69303 9.04427 7.38534 8.98598 7.09826 8.87272C6.81118 8.75946 6.55033 8.59346 6.33061 8.38419C6.11089 8.17492 5.93659 7.92647 5.81768 7.65305C5.69877 7.37962 5.63756 7.08656 5.63756 6.79061C5.63756 6.49466 5.69877 6.2016 5.81768 5.92817C5.93659 5.65475 6.11089 5.4063 6.33061 5.19703C6.55033 4.98776 6.81118 4.82176 7.09826 4.7085C7.38534 4.59524 7.69303 4.53695 8.00377 4.53695C8.63132 4.53695 9.23317 4.77439 9.67692 5.19703C10.1207 5.61968 10.37 6.1929 10.37 6.79061C10.37 7.38832 10.1207 7.96154 9.67692 8.38419C9.23317 8.80683 8.63132 9.04427 8.00377 9.04427Z"
                                                                    fill="#A3A3A3"/>
                                                            </svg>
                                                            {job.location}
                                                        </Flex>
                                                        <Flex align="center" gap="small">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                 height="16" viewBox="0 0 16 16" fill="none">
                                                                <path
                                                                    d="M8.00001 1.33337C4.32668 1.33337 1.33334 4.32671 1.33334 8.00004C1.33334 11.6734 4.32668 14.6667 8.00001 14.6667C11.6733 14.6667 14.6667 11.6734 14.6667 8.00004C14.6667 4.32671 11.6733 1.33337 8.00001 1.33337ZM10.9 10.38C10.8666 10.4369 10.8223 10.4865 10.7696 10.526C10.7169 10.5655 10.6568 10.5942 10.5929 10.6103C10.529 10.6264 10.4626 10.6297 10.3974 10.6199C10.3323 10.6102 10.2697 10.5875 10.2133 10.5534L8.14668 9.32004C7.63334 9.01337 7.25334 8.34004 7.25334 7.74671V5.01337C7.25334 4.74004 7.48001 4.51337 7.75334 4.51337C8.02668 4.51337 8.25334 4.74004 8.25334 5.01337V7.74671C8.25334 7.98671 8.45334 8.34004 8.66001 8.46004L10.7267 9.69337C10.9667 9.83337 11.0467 10.14 10.9 10.38Z"
                                                                    fill="#A3A3A3"/>
                                                            </svg>
                                                            {job.createdAt}
                                                        </Flex>
                                                    </Space>

                                                    <Flex justify="center" align="center"
                                                          className="card-status">{job.status}</Flex>
                                                </Flex>
                                            </Space>
                                        </Flex>
                                        <Space direction="vertical">
                                            <div className="card-label-description">Mô tả công việc:</div>
                                            <div className="card-description">{job.description}</div>
                                        </Space>
                                        <Button type="primary">Xem chi tiết</Button>
                                    </div>
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
                            <Pagination total={100} showSizeChanger={false} align="center"/>
                        </div>
                    </Flex>
                </Col>
            </Row>
        </section>
    );
};

export default Recruitment;