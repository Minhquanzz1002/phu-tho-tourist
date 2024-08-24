import {Layout} from "antd";
import HeaderComponent from "@layout/Header";
import FooterComponent from "@layout/Footer";
import React, {PropsWithChildren} from "react";

const DefaultLayout: React.FC<PropsWithChildren> = (props) => {
    return (
        <Layout style={{background: 'unset'}}>
            <HeaderComponent/>
            <video id="background" autoPlay loop muted aria-hidden={true}>
                <source
                    src="https://firebasestorage.googleapis.com/v0/b/fir-alta-aef46.appspot.com/o/bg.mp4?alt=media&token=5ec3d76d-e8d7-4d2f-abf5-3b93080add8e"
                    type="video/mp4"/>
            </video>
            <Layout.Content id="main">
                {props.children}
            </Layout.Content>
            <FooterComponent/>
        </Layout>
    );
};

export default DefaultLayout;