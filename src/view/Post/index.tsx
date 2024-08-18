import "./styles.scss";
import TitlePage from "@shared/components/TitlePage";
import React, {useEffect, useState} from "react";
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
import {IPost} from "../../modules/posts/interface.ts";
import {useSingleAsync} from "@hook/useAsync.tsx";
import {getPosts} from "../../modules/posts/repository.ts";

const topics: { icon: React.JSX.Element; title: string }[] = [
    {icon: <IconLightBulb/>, title: 'Giới thiệu'},
    {icon: <IconNews/>, title: 'Tin tức'},
    {icon: <IconCalendar/>, title: 'Sự kiện'},
    {icon: <IconBell/>, title: 'Thông báo'},
    {icon: <IconFolder/>, title: 'Tin cổ đông'},
    {icon: <IconUsers/>, title: 'Hoạt động đoàn thể'},
]

const Post = () => {
    const [selectedTopics, setSelectedTopics] = useState<string[]>([topics[0].title]);
    const [sortTopic, setSortTopic] = useState<string>("A đến Z");
    const [posts, setPosts] = useState<IPost[]>([]);
    const loadPosts = useSingleAsync(getPosts);

    useEffect(() => {
        loadPosts.execute().then((res) => setPosts(res)).catch(() => setPosts([]));
    }, []);

    const handleTopicClick = (title: string) => {
        setSelectedTopics(prevState =>
            prevState.includes(title) ? prevState.filter(t => t !== title) : [...prevState, title]
        )
    }

    const handleSortClick = () => {
        setSortTopic(prevState => {
            if (prevState === 'A đến Z') return "Mới nhất";
            if (prevState === "Mới nhất") return "Cũ nhất";
            return "A đến Z";
        })
    }

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
                                {
                                    topics.map((topic, index) => (
                                        <TopicPost icon={topic.icon} title={topic.title}
                                                   onClick={() => handleTopicClick(topic.title)}
                                                   variant={selectedTopics.includes(topic.title) ? "primary" : "normal"}
                                                   key={"topic-filter-" + index}/>
                                    ))
                                }
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
                                <Flex align="center" gap="small" className="wrap-sort" onClick={handleSortClick}>
                                    <IconArrowDownUp/>
                                    <div>{sortTopic}</div>
                                </Flex>
                            </Flex>
                            <Flex align="center" gap="small" className="wrap-sort-mobile">
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
                                posts.map((post) => (
                                    <Col xs={24} xl={8} xxl={6} key={"card-post-col-" + post.id}>
                                        <CardPost post={post} size="medium"/>
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
                                <Pagination total={posts.length} showSizeChanger={false} align="center"/>
                            </div>
                        </Flex>
                    </Col>
                </Row>
            </section>
        </React.Fragment>
    );
};

export default Post;