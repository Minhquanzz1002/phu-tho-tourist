import {Layout} from "antd";
import HeaderComponent from "@layout/Header";
import FooterComponent from "@layout/Footer";
import React, {PropsWithChildren} from "react";
import background from "./bg.mp4";

const DefaultLayout: React.FC<PropsWithChildren> = (props) => {
    return (
        <Layout style={{background: "none"}}>
            <HeaderComponent/>
            <video autoPlay loop muted style={{position: 'fixed', padding: 'none', zIndex: -1, width: '100%', height: '100vh',  objectFit: 'cover'}}>
                <source src={background} type="video/mp4" style={{width: '100%', height: '100vh'}}/>
            </video>
            <Layout.Content style={{height: '10000px'}}>
                {props.children}
            </Layout.Content>
            <FooterComponent/>
        </Layout>
    );
};

export default DefaultLayout;