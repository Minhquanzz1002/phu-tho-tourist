import {Flex, Layout, Space} from "antd";
import {Link, NavLink} from "react-router-dom";
import React, {CSSProperties} from "react";
import {IconMenu, IconXMark} from "@assets/icons";

const HeaderComponent = () => {
    const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

    const styles: { [key: string]: CSSProperties } = {
        menuBtn: {
            background: "unset",
            border: "unset",
            cursor: "pointer"
        }
    }

    return (
        <React.Fragment>
            <Layout.Header className="layout-header" id="header">
                <Flex align="center" justify="center" gap="4rem" className="w-full" id="navbar">
                    <NavLink className="header__menu-item" to="/">TRANG CHỦ</NavLink>
                    <NavLink className="header__menu-item" to="/bai-viet">BÀI VIẾT</NavLink>
                    <Link to="/" className="flex justify-center ">
                        <img src="/logo.png" alt="Logo"/>
                    </Link>
                    <NavLink className="header__menu-item" to="/tai-lieu">TÀI LIỆU</NavLink>
                    <NavLink className="header__menu-item" to="/tuyen-dung">TUYỂN DỤNG</NavLink>
                </Flex>

                <Flex className="w-full" align="center" justify="space-between" id="navbarMobi">
                    <img src="/logo-small.svg" alt="Logo"/>
                    <button type="button" style={styles.menuBtn} onClick={() => setShowMobileMenu(true)}>
                        <IconMenu/>
                    </button>
                </Flex>
            </Layout.Header>
            {
                showMobileMenu && (
                    <div id="menuMobile">
                        <Flex justify="end" align="center" className="w-full">
                            <button id="closeMenuBtn" type="button" onClick={() => setShowMobileMenu(false)}>
                                <IconXMark/>
                            </button>
                        </Flex>
                        <Space direction="vertical" size="middle"  style={{marginTop: '6rem'}}>
                            <NavLink className="header__menu-item" to="/" onClick={() => setShowMobileMenu(false)}>TRANG
                                CHỦ</NavLink>
                            <NavLink className="header__menu-item" to="/bai-viet" onClick={() => setShowMobileMenu(false)}>BÀI
                                VIẾT</NavLink>
                            <NavLink className="header__menu-item" to="/tai-lieu" onClick={() => setShowMobileMenu(false)}>TÀI
                                LIỆU</NavLink>
                            <NavLink className="header__menu-item" to="/tuyen-dung"
                                     onClick={() => setShowMobileMenu(false)}>TUYỂN DỤNG</NavLink>
                        </Space>
                    </div>
                )
            }
        </React.Fragment>
    )
        ;
};

export default HeaderComponent;