import React from "react";
import "./styles.scss";
import {useEffect, useState} from "react";
import {Button, Card, Col, Flex, Row} from "antd";
import {IconChevronsDown} from "@assets/icons";
import FlipsterCarousel from "@shared/components/FlipsterCarousel";
import {Link} from "react-router-dom";
import CardPost from "@shared/components/CardPost";
import {scrollToViewByElementId} from "@helper/function";
import {IPost} from "../../modules/posts/interface";
import {useSingleAsync} from "@hook/useAsync";
import {getPosts} from "../../modules/posts/repository";

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
        <div className="home">
            <section className="home__section home__section--intro">
                <Flex gap="small" vertical>
                    <h2 className="home__company-name">CÔNG TY CỔ PHẦN DỊCH VỤ DU LỊCH PHÚ THỌ</h2>
                    <h1 className="home__brand-name">PHUTHOTOURIST</h1>
                    <div className="home__establishment-date">Ngày thành lập 01/01/2019</div>
                </Flex>
                <div className="home__carousel">
                    <FlipsterCarousel items={flipsterItems}/>
                </div>
                <button id="btnScroll" className="home__scroll-btn" onClick={() => scrollToViewByElementId("btnScroll")}>
                    <IconChevronsDown/>
                </button>
            </section>
            <section className="home__section home__section--about">
                <Row gutter={[24, 24]}>
                    <Col xs={24} lg={24} xl={12} className="wrap-post">
                        <Flex vertical gap="3.2rem">
                            <Flex vertical gap="1.6rem">
                                <h3 className="home__section-category">VỀ CHÚNG TÔI</h3>
                                <div className="home__section-title">Chúng tôi cung cấp dịch vụ du lịch đáp ứng mọi nhu
                                    cầu của bạn!
                                </div>
                            </Flex>
                            <div className="home__section-description">
                                <p>
                                    Công ty Cổ phần Dịch vụ Du lịch Phú Thọ (Phuthotourist), là một đơn vị thành viên
                                    của
                                    Saigontourist. Phuthotourist được biết đến với các sản phẩm du lịch nổi tiếng tại
                                    TP.HCM
                                    (Quận 11) như:
                                </p>
                                <ul>
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
                    <Col xs={24} lg={24} xl={12}>
                        <div className="home__section--about-banner home__section--about-banner--top">
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/fir-alta-aef46.appspot.com/o/home%2Fsection%202%2F1.png?alt=media"
                                alt="Banner"/>
                        </div>
                        <div className="home__section--about-banner home__section--about-banner--bottom">
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/fir-alta-aef46.appspot.com/o/home%2Fsection%202%2F2.png?alt=media"
                                alt="Banner"/>
                        </div>
                    </Col>
                </Row>
            </section>

            <section className="home__section home__section--posts">
                <h3 className="home__section-category" style={{color: '#FFF'}}>CHIA SẺ THÔNG TIN</h3>
                <h4 className="home__section-title">Bài viết mới</h4>
                <Flex justify="center" className="w-full">
                    <span className="rectangle"></span>
                </Flex>
                <div className="home__section-description" style={{color: '#F0F0F0'}}>Hãy cùng chúng tôi chia sẻ những
                    bài viết mới với các thông tin về những sản
                    phẩm du lịch
                </div>
                <Flex justify="center" className="home__section--posts-cards-container">
                    <Row className="home__section--posts-cards" gutter={[24, 24]}>
                        {
                            posts.map((post, index) => (
                                <Col xs={24} lg={12} xl={12} xxl={8} key={"card-post-col-" + index}>
                                    <CardPost post={post} size="large"/>
                                </Col>
                            ))
                        }
                    </Row>
                </Flex>
                <Flex justify="center">
                    <Link to="/bai-viet">
                        <Button type="primary" size="large">Xem thêm bài viết</Button>
                    </Link>
                </Flex>
            </section>

            <section className="home__section home__section--services">
                <Flex vertical gap="middle">
                    <h3 className="home__section-category">LĨNH VỰC HOẠT ĐỘNG</h3>
                    <h4 className="home__section-title">Các dịch vụ trọng tâm</h4>
                    <div className="home__section-description">3 dịch vụ trọng tâm của Phuthotourist là vui chơi giải
                        trí, nhà hàng –
                        khách sạn, và dịch vụ lữ
                        hành
                    </div>
                </Flex>

                <Flex className="home__section--services-cards-container" justify="center">
                    <Row className="home__section--services-cards" gutter={[24, 24]}>
                        {
                            cardData.map((data) => (
                                <Col xl={8} md={12} sm={24} key={"card-data-" + data.id}>
                                    <Card
                                        className="home-card-service"
                                        cover={<img alt="Card Item" loading="lazy"
                                                    src={data.image}/>}
                                    >
                                        <div className="home-card-service__title">{data.title}</div>
                                        <p className="home-card-service__desc">{data.description}</p>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                </Flex>
            </section>
        </div>
    );
};

export default Home;