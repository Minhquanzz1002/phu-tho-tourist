import {Col, Flex, Layout, Row} from "antd";
import {CSSProperties} from "react";
import {IconFacebook, IconMail, IconMapPin, IconPhone} from "@assets/icons";

const FooterComponent = () => {

    const styles: { [key: string]: CSSProperties } = {
        footer: {
            display: 'flex',
            justifyContent: 'center',
            background: 'rgba(0, 37, 73, 0.8)',
            // height: '27.6rem',
            color: 'white',
            borderTop: '1px solid white',
        },
        title: {
            fontFamily: "Helvetica Neue",
            fontWeight: 700,
            fontSize: '1.35rem',
        },
        companyName: {
            fontFamily: "Helvetica Neue",
            fontWeight: 700,
            fontSize: '3.5rem',
            letterSpacing: '4%',
            color: 'rgba(153, 255, 255, 1)',
        },
        h3: {
            fontFamily: "Philosopher",
            fontSize: '2.4rem',
            fontWeight: "bold"
        }
    }

    return (
        <Layout.Footer className="p-x-0" style={styles.footer} id="footer">
            <Row className="container" justify="space-between" gutter={[0, 24]}>
                <Col className="footer-col">
                    <Flex vertical justify="space-between" style={{height: '100%'}}>
                        <Flex>
                            <img src="/logo.png" alt="Logo" style={{transform: 'translateX(-2.6rem)'}}/>
                            <Flex vertical justify="center">
                                <h5 style={styles.title}>CÔNG TY CỔ PHẦN DỊCH VỤ DU LỊCH PHÚ THỌ</h5>
                                <div style={styles.companyName}>PHUTHOTOURIST</div>
                            </Flex>
                        </Flex>
                        <div className="copyright">Copyright © Công ty Cổ phần Dịch vụ Du lịch Phú Thọ (Phuthotourist)</div>
                    </Flex>
                </Col>
                <Col className="footer-col">
                    <h3 style={styles.h3}>LIÊN HỆ</h3>
                    <Flex vertical justify="space-between" style={{height: '16.1rem', paddingTop: '2rem'}}>
                        <Flex gap="small" align="center">
                            <IconMapPin/>
                            15 Đường số 2, Cư xá Lữ Gia,<br/> Phường 15, Quận 11, TP. HCM
                        </Flex>
                        <Flex gap="small" align="center">
                            <IconPhone/>
                            02838650921
                        </Flex>
                        <Flex gap="small" align="center">
                            <IconMail/>
                            vanphong@damsenpark.vn
                        </Flex>
                        <Flex gap="small" align="center">
                            <IconFacebook/>
                            Phuthotourist
                        </Flex>
                    </Flex>
                </Col>
                <Col className="footer-col">
                    <h3 style={styles.h3}>CÁC ĐƠN VỊ CÙNG HỆ THỐNG PHUTHOTOURIST</h3>
                    <ul className="list-inside flex flex-col justify-between" style={{height: '16.1rem', paddingTop: '2rem'}}>
                        <li className="hv-underline cursor-default">Công viên Văn hóa Đầm Sen</li>
                        <li className="hv-underline cursor-default">Khu du lịch sinh thái Vàm Sát</li>
                        <li className="hv-underline cursor-default">Khách sạn Ngọc Lan (Quận 1)</li>
                        <li className="hv-underline cursor-default">Khách sạn Phú Thọ (Quận 11)</li>
                        <li className="hv-underline cursor-default">Trung tâm Du lịch Đầm Sen</li>
                    </ul>
                </Col>
            </Row>
        </Layout.Footer>
    );
};

export default FooterComponent;