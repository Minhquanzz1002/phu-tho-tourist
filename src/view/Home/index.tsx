import "./styles.scss";
import React, {useEffect, useState} from "react";
import {Button, Card, Col, Flex, Row} from "antd";
import {IconChevronsDown} from "@assets/icons";
import FlipsterCarousel from "@shared/components/FlipsterCarousel";
import {Link} from "react-router-dom";
import CardPost from "@shared/components/CardPost";
import {scrollToViewByElementId} from "@helper/function.tsx";
import {IPost} from "../../modules/posts/interface.ts";
import {useSingleAsync} from "@hook/useAsync.tsx";
import {getPosts} from "../../modules/posts/repository.ts";

const flipsterItems: string[] = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
];

const cardData: { id: number; title: string; description: string; image: string }[] = [
    {
        id: 1,
        title: "Vui chơi giải trí",
        description: "Với 2 khu giải trí nổi tiếng TP.HCM là Công viên văn hóa Đầm Sen, và khu du lịch sinh thái Vàm Sát (H.Cần Giờ)...",
        image: "https://firebasestorage.googleapis.com/v0/b/fir-alta-aef46.appspot.com/o/home%2Fsection%204%2F1.png?alt=media"
    },
    {
        id: 2,
        title: "Nhà hàng – Khách sạn",
        description: "Với hệ thống khách sạn Phú Thọ và Ngọc Lan đạt chuẩn 3 sao, chuyên tiếp đón các đoàn thể thao....",
        image: "https://firebasestorage.googleapis.com/v0/b/fir-alta-aef46.appspot.com/o/home%2Fsection%204%2F2.png?alt=media"
    },
    {
        id: 3,
        title: "Dịch vụ Lữ hành",
        description: "Tổ chức các tour trong và ngoài nước với Trung tâm Dịch vụ du lịch Đầm Sen. Ngoài ra Trung tâm còn thế mạnh là tổ chức...",
        image: "https://firebasestorage.googleapis.com/v0/b/fir-alta-aef46.appspot.com/o/home%2Fsection%204%2F3.png?alt=media"
    }
]

const Home = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    const loadPosts = useSingleAsync(() => getPosts([], undefined, undefined, 3));

    useEffect(() => {
        loadPosts.execute().then((res) => setPosts(res)).catch(() => setPosts([]));
    }, []);

    return (
        <React.Fragment>
            <section className="flex flex-col justify-center text-white text-center w-full" id="homeSection1">
                <h2>CÔNG TY CỔ PHẦN DỊCH VỤ DU LỊCH PHÚ THỌ</h2>
                <h1>PHUTHOTOURIST</h1>
                <div className="subtitle">Ngày thành lập 01/01/2019</div>
                <div style={{marginTop: '4.2rem'}}>
                    <FlipsterCarousel items={flipsterItems}/>
                </div>
                <Flex justify="center" className="w-full">
                    <button id="btnScroll" onClick={() => scrollToViewByElementId("btnScroll")}>
                        <IconChevronsDown/>
                    </button>
                </Flex>
            </section>
            <section className="w-full bg-section" id="homeSection2">
                <Row gutter={[24, 24]}>
                    <Col xs={24} lg={24} xl={12} className="wrap-post">
                        <Flex vertical gap="3.2rem">
                            <Flex vertical gap="1.6rem">
                                <h3 className="category">VỀ CHÚNG TÔI</h3>
                                <div className="title">Chúng tôi cung cấp dịch vụ du lịch đáp ứng mọi nhu cầu của bạn!
                                </div>
                            </Flex>
                            <div className="content">
                                <p>
                                    Công ty Cổ phần Dịch vụ Du lịch Phú Thọ (Phuthotourist), là một đơn vị thành viên
                                    của
                                    Saigontourist. Phuthotourist được biết đến với các sản phẩm du lịch nổi tiếng tại
                                    TP.HCM
                                    (Quận 11) như:
                                </p>
                                <ul className="list-inside">
                                    <li>Công viên Văn hóa Đầm Sen</li>
                                    <li>Khu du lịch sinh thái Vàm Sát</li>
                                    <li>Khách sạn Ngọc Lan</li>
                                    <li>Khách sạn Phú Thọ</li>
                                    <li>Trung tâm chăm sóc sức khỏe & giải trí Đầm Sen (Damsen Plaza)</li>
                                    <li>Nhà hàng Thủy Tạ Đầm Sen</li>
                                    <li>Cà phê Vườn Đá</li>
                                    <li>Trung tâm Dịch vụ Du lịch Đầm Sen (Damsen Travel)</li>
                                    <li>Liên kết với Công viên nước Đầm Sen (Đầm Sen Water Park).</li>
                                </ul>
                            </div>
                            <div>
                                <Button size="large" type="primary">Xem chi tiết</Button>
                            </div>
                        </Flex>
                    </Col>
                    <Col xs={24} lg={24} xl={12} className="wrap-banner">
                        <div className="banner-item banner-top">
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/fir-alta-aef46.appspot.com/o/home%2Fsection%202%2F1.png?alt=media"
                                alt="Banner"/>
                        </div>
                        <div className="banner-item banner-bottom">
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/fir-alta-aef46.appspot.com/o/home%2Fsection%202%2F2.png?alt=media"
                                alt="Banner"/>
                        </div>
                    </Col>
                </Row>
            </section>
            <section className="flex flex-col w-full text-center" id="homeSection3">
                <h3>CHIA SẺ THÔNG TIN</h3>
                <h4>Bài viết mới</h4>
                <Flex justify="center" className="w-full">
                    <span className="rectangle"></span>
                </Flex>
                <div className="subtitle">Hãy cùng chúng tôi chia sẻ những bài viết mới với các thông tin về những sản
                    phẩm du lịch
                </div>
                <Flex justify="center" className="wrap-card">
                    <Row className="w-75" gutter={[24, 24]}>
                        {
                            posts.map((post, index) => (
                                <Col xs={24} lg={12} xl={12} xxl={8} key={"card-post-col-" + index}>
                                    <CardPost post={post} size="large"/>
                                </Col>
                            ))
                        }
                    </Row>
                </Flex>
                <Flex justify="center" className="w-full wrap-btn">
                    <Link to="/bai-viet">
                        <Button type="primary" size="large">Xem thêm bài viết</Button>
                    </Link>
                </Flex>
            </section>
            <section className="flex flex-col w-full text-center bg-section" id="homeSection4">
                <Flex vertical gap="1.6rem">
                    <h3>LĨNH VỰC HOẠT ĐỘNG</h3>
                    <h4>Các dịch vụ trọng tâm</h4>
                    <div className="subtitle">3 dịch vụ trọng tâm của Phuthotourist là vui chơi giải trí, nhà hàng –
                        khách sạn, và dịch vụ lữ
                        hành
                    </div>
                </Flex>

                <Flex className="wrap-card" justify="center">
                    <Row className="w-75" gutter={[24, 24]}>
                        {
                            cardData.map((data) => (
                                <Col xl={8} md={12} sm={24} key={"card-data-" + data.id}>
                                    <Card
                                        cover={<img alt="Card Item" loading="lazy"
                                                    src={data.image}/>}
                                    >
                                        <div className="card-title">{data.title}</div>
                                        <p className="card-desc">{data.description}</p>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                </Flex>
            </section>
        </React.Fragment>
    );
};

export default Home;