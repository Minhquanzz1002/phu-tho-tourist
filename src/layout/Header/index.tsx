import {Flex, Layout, Space} from "antd";
import {Link, NavLink} from "react-router-dom";
import React, {useState} from "react";
import {IconMenu, IconXMark} from "@assets/icons";

const HeaderComponent = () => {
    const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

    return (
        <React.Fragment>
            <Layout.Header className="header" id="header">
                <Flex align="center" justify="center" gap="4rem" className="header__navbar">
                    <NavLink className="header__menu-item" to="/">TRANG CHỦ</NavLink>
                    <NavLink className="header__menu-item" to="/bai-viet">BÀI VIẾT</NavLink>
                    <Link to="/" className="flex justify-center ">
                        <img src="/logo.png" alt="Logo"/>
                    </Link>
                    <NavLink className="header__menu-item" to="/tai-lieu">TÀI LIỆU</NavLink>
                    <NavLink className="header__menu-item" to="/tuyen-dung">TUYỂN DỤNG</NavLink>
                </Flex>

                <Flex className="header__mobile-navbar" align="center" justify="space-between">
                    <img className="header__mobile-logo" src="/logo-small.svg" alt="Logo"/>
                    <button className="header__mobile-menu-btn" type="button" onClick={() => setShowMobileMenu(true)}>
                        <IconMenu/>
                    </button>
                </Flex>
            </Layout.Header>
            {
                showMobileMenu && (
                    <div className="header__mobile-menu">
                        <Flex justify="end" align="center" className="header__mobile-menu-header">
                            <button className="header__mobile-menu-close-btn" type="button"
                                    onClick={() => setShowMobileMenu(false)}>
                                <IconXMark/>
                            </button>
                        </Flex>
                        <Space className="header__mobile-menu-items" direction="vertical" size="middle">
                            <NavLink className="header__mobile-menu-item" to="/" onClick={() => setShowMobileMenu(false)}>TRANG
                                CHỦ</NavLink>
                            <NavLink className="header__mobile-menu-item" to="/bai-viet" onClick={() => setShowMobileMenu(false)}>BÀI
                                VIẾT</NavLink>
                            <NavLink className="header__mobile-menu-item" to="/tai-lieu" onClick={() => setShowMobileMenu(false)}>TÀI
                                LIỆU</NavLink>
                            <NavLink className="header__mobile-menu-item" to="/tuyen-dung"
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