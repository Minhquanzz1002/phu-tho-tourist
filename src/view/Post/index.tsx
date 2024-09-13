import "./styles.scss";
import TitlePage from "@shared/components/TitlePage";
import React, {useEffect, useState} from "react";
import {Button, Col, Flex, Pagination, PaginationProps, Row} from "antd";

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
import CardPost, {CardPostProps} from "@shared/components/CardPost";
import TopicPost from "@shared/components/TopicPost";
import DateRangePicker from "@shared/components/DateRangePicker";
import Carousel from "@shared/components/Carousel";
import AutocompleteSearch from "@shared/components/AutocompleteSearch";
import {IPost} from "../../modules/posts/interface";
import {useSingleAsync} from "@hook/useAsync";
import {getNewestPosts, getPosts} from "../../modules/posts/repository";
import {Sheet} from "react-modal-sheet";
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint";
import DateRangeCustom from "@shared/components/DateRange";
import BottomSheet from "@shared/components/BottomSheet";

const topics: { icon: React.JSX.Element; title: string }[] = [
    {icon: <IconLightBulb/>, title: 'Giới thiệu'},
    {icon: <IconNews/>, title: 'Tin tức'},
    {icon: <IconCalendar/>, title: 'Sự kiện'},
    {icon: <IconBell/>, title: 'Thông báo'},
    {icon: <IconFolder/>, title: 'Tin cổ đông'},
    {icon: <IconUsers/>, title: 'Hoạt động đoàn thể'},
]

enum SortOption {
    AZ = 'A đến Z',
    Newest = 'Mới nhất',
    Oldest = 'Cũ nhất'
}

const Post = () => {
    const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
    const [tempTelectedTopics, setTempSelectedTopics] = useState<string[]>([]);
    const [sort, setSort] = useState<SortOption>(SortOption.AZ);
    const [posts, setPosts] = useState<IPost[]>([]);
    const [newestPosts, setNewestPosts] = useState<IPost[]>([]);
    const loadPosts = useSingleAsync(() => getPosts(selectedTopics, startDate, endDate));
    const loadNewestPosts = useSingleAsync(() => getNewestPosts(10));
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [isOpenSortBottomSheet, setIsOpenSortBottomSheet] = useState<boolean>(false);
    const [isOpenFilterBottomSheet, setIsOpenFilterBottomSheet] = useState<boolean>(false);
    const [startDate, setStartDate] = useState<Date | undefined>();
    const [tempStartDate, setTempStartDate] = useState<Date | undefined>();
    const [endDate, setEndDate] = useState<Date | undefined>(new Date());
    const [tempEndDate, setTempEndDate] = useState<Date | undefined>(new Date());
    const pageSize = 12;

    const screens = useBreakpoint();

    const getSize = (): CardPostProps['size'] => {
        if (screens.xxl) return 'medium';
        if (screens.xl) return 'medium';
        if (screens.lg) return 'medium';
        if (screens.md) return 'medium';
        if (screens.sm) return 'large';
        if (screens.xs) return 'large';
        return 'medium';
    }

    useEffect(() => {
        loadPosts.execute().then((res) => setPosts(res)).catch(() => setPosts([]));
    }, [selectedTopics, startDate, endDate]);

    useEffect(() => {
        setTempSelectedTopics(selectedTopics);
    }, [selectedTopics]);

    useEffect(() => {
        setTempStartDate(startDate);
    }, [startDate]);

    useEffect(() => {
        setTempEndDate(endDate);
    }, [endDate]);

    useEffect(() => {
        loadNewestPosts.execute().then((res) => setNewestPosts(res)).catch(() => setNewestPosts([]));
    }, []);

    useEffect(() => {
        if (!posts || posts.length === 0) return;

        const sortedPosts = [...posts];

        if (sort === SortOption.AZ) {
            sortedPosts.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sort === SortOption.Newest) {
            sortedPosts.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
        } else {
            sortedPosts.sort((a, b) => a.publishedAt.getTime() - b.publishedAt.getTime());
        }
        setPosts(sortedPosts);
    }, [sort]);

    const handleTopicClick = (title: string) => {
        setSelectedTopics(prevState =>
            prevState.includes(title) ? prevState.filter(t => t !== title) : [...prevState, title]
        )
    }

    const handleTopicMobileClick = (title: string) => {
        setTempSelectedTopics(prevState =>
            prevState.includes(title) ? prevState.filter(t => t !== title) : [...prevState, title]
        )
    }

    const handleSortClick = () => {
        setSort(prevState => {
            if (prevState === SortOption.AZ) return SortOption.Newest;
            if (prevState === SortOption.Newest) return SortOption.Oldest;
            return SortOption.AZ;
        });
    }

    const handleSortMobileClick = (sortOption: SortOption) => {
        setSort(sortOption);
        setIsOpenSortBottomSheet(false);
    }

    const onPageChange: PaginationProps['onChange'] = (page: number) => {
        setCurrentPage(page);
    }

    const handleConfirmFilter = () => {
        setSelectedTopics(tempTelectedTopics);
        setStartDate(tempStartDate);
        setEndDate(tempEndDate);
        setIsOpenFilterBottomSheet(false);
    }

    return (
        <React.Fragment>
            <div className="post-container">
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
                                            newestPosts.map((post, index) => (
                                                <CardPost post={post} size="small" key={"card-post-small-" + index}/>
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
                        <Col xs={0} sm={0} md={24} lg={24} xl={7} xxl={6}>
                            <div className="container-filter-topic">
                                <h3>CHỦ ĐỀ BÀI VIẾT</h3>
                                <Row gutter={[24, 24]}>
                                    {
                                        topics.map((topic, index) => (
                                            <Col md={12} lg={12} xl={24} key={"topic-filter-" + index}>
                                                <TopicPost icon={topic.icon} title={topic.title}
                                                           onClick={() => handleTopicClick(topic.title)}
                                                           variant={selectedTopics.includes(topic.title) ? "primary" : "normal"}
                                                />
                                            </Col>
                                        ))
                                    }
                                </Row>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} lg={24} xl={17} xxl={18}>
                            <Flex wrap justify="space-between" gap="small" align="center"
                                  className="container-search-filter">
                                <div className="wrap-search">
                                    <AutocompleteSearch/>
                                </div>
                                <Flex gap="large" className="wrap-filter">
                                    <DateRangePicker onChangeStartDate={(date) => setStartDate(date)} startDate={startDate} endDate={endDate}
                                                     onChangeEndDate={(date) => setEndDate(date)}/>
                                    <Flex align="center" gap="small" className="wrap-sort" onClick={handleSortClick}>
                                        <IconArrowDownUp/>
                                        <div className="select-none">{sort}</div>
                                    </Flex>
                                </Flex>
                                <Flex align="center" gap="small" className="wrap-sort-mobile">
                                    <Button htmlType="button" onClick={() => setIsOpenSortBottomSheet(true)}>
                                        <IconArrowDownUp/>
                                    </Button>
                                    <Button htmlType="button" onClick={() => setIsOpenFilterBottomSheet(true)}>
                                        <IconSetting/>
                                    </Button>
                                </Flex>
                            </Flex>
                            <Row gutter={[24, 24]} className="container-card-posts">
                                {
                                    posts.slice((currentPage - 1) * pageSize, currentPage * pageSize).map((post) => (
                                        <Col xs={24} sm={12} lg={8} xl={8} xxl={6} key={"card-post-col-" + post.id}>
                                            <CardPost post={post} size={getSize()}/>
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
                                    <Pagination total={posts.length} pageSize={pageSize} onChange={onPageChange}
                                                showSizeChanger={false} align="center"/>
                                </div>
                            </Flex>
                        </Col>
                    </Row>
                </section>
            </div>

            <Sheet isOpen={isOpenSortBottomSheet} onClose={() => setIsOpenSortBottomSheet(false)}
                   detent="content-height">
                <Sheet.Container>
                    <Sheet.Header/>
                    <Sheet.Content>
                        <div className="sort-mobile">
                            <div
                                className={`sort-mobile__item ${sort === SortOption.AZ && 'sort-mobile__item--active'}`}
                                onClick={() => handleSortMobileClick(SortOption.AZ)}>{SortOption.AZ}</div>
                            <div
                                className={`sort-mobile__item ${sort === SortOption.Newest && 'sort-mobile__item--active'}`}
                                onClick={() => handleSortMobileClick(SortOption.Newest)}>{SortOption.Newest}</div>
                            <div
                                className={`sort-mobile__item ${sort === SortOption.Oldest && 'sort-mobile__item--active'}`}
                                onClick={() => handleSortMobileClick(SortOption.Oldest)}>{SortOption.Oldest}</div>
                        </div>
                    </Sheet.Content>
                </Sheet.Container>
                <Sheet.Backdrop onTap={() => setIsOpenSortBottomSheet(false)}/>
            </Sheet>

            <BottomSheet isOpen={isOpenFilterBottomSheet} onClose={() => setIsOpenFilterBottomSheet(false)}>
                <div className="bottom-sheet__heading">Chủ đề bài viết</div>
                <Row gutter={[8, 8]} style={{marginTop: '0.8rem'}}>
                    {
                        topics.map((topic, index) => (
                            <Col xs={12} key={"topic-mobile-" + index}>
                                <TopicPost style={{border: '1px solid rgba(102, 152, 202, 1)'}}
                                           icon={topic.icon} title={topic.title}
                                           variant={tempTelectedTopics.includes(topic.title) ? 'primary' : 'normal'}
                                           onClick={() => handleTopicMobileClick(topic.title)}/>
                            </Col>
                        ))
                    }
                </Row>

                <div className="bottom-sheet__heading" style={{marginTop: '1.6rem'}}>Thời gian</div>

                <Flex justify="center" align="center">
                    <DateRangeCustom startDate={tempStartDate} endDate={tempEndDate}
                                     onChangeEndDate={(date) => setTempEndDate(date)}
                                     onChangeStartDate={(date) => setTempStartDate(date)}/>
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

export default Post;