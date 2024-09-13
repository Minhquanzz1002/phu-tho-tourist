import React from "react";
import {Flex, Layout} from "antd";
import {IconFacebook, IconMail, IconMapPin, IconPhone} from "@assets/icons";

const FooterComponent = () => {
    return (
        <Layout.Footer className="footer" id="footer">
            <div className="footer__container">
                <Flex vertical justify="space-between">
                    <Flex>
                        <img className="footer__logo" src="/logo.png" alt="Logo"/>
                        <Flex vertical justify="center" gap="small">
                            <h5 className="footer__company">CÔNG TY CỔ PHẦN DỊCH VỤ DU LỊCH PHÚ THỌ</h5>
                            <div className="footer__company-name">PHUTHOTOURIST</div>
                        </Flex>
                    </Flex>
                    <div className="footer__copyright">Copyright © Công ty Cổ phần Dịch vụ Du lịch Phú Thọ (Phuthotourist)
                    </div>
                </Flex>

                <div>
                    <h3 className="footer__heading">LIÊN HỆ</h3>
                    <Flex vertical justify="space-between" className="footer__contact">
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
                </div>

                <div>
                    <h3 className="footer__heading">CÁC ĐƠN VỊ CÙNG HỆ THỐNG PHUTHOTOURIST</h3>
                    <ul className="footer__system-list">
                        <li className="footer__system-list-item">Công viên Văn hóa Đầm Sen</li>
                        <li className="footer__system-list-item">Khu du lịch sinh thái Vàm Sát</li>
                        <li className="footer__system-list-item">Khách sạn Ngọc Lan (Quận 1)</li>
                        <li className="footer__system-list-item">Khách sạn Phú Thọ (Quận 11)</li>
                        <li className="footer__system-list-item">Trung tâm Du lịch Đầm Sen</li>
                    </ul>
                </div>

                <div className="footer__copyright-mobi">
                    Copyright © Công ty Cổ phần Dịch vụ Du lịch Phú Thọ (Phuthotourist)
                </div>
            </div>
        </Layout.Footer>
    );
};

export default FooterComponent;