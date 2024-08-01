import {Layout} from "antd";
import HeaderComponent from "@layout/Header";
import FooterComponent from "@layout/Footer";
import React, {CSSProperties, PropsWithChildren} from "react";

const DefaultLayout: React.FC<PropsWithChildren> = (props) => {
    const styles : {[key: string] : CSSProperties} =  {
        mainLayout:  {
            background: "none",
            position: "relative"
        }
    }
    return (
        <Layout style={styles.mainLayout}>
            <HeaderComponent/>
            <video autoPlay loop muted style={{position: 'fixed', padding: 'none', zIndex: -1, width: '100%', height: '100vh',  objectFit: 'cover'}}>
                <source src="https://firebasestorage.googleapis.com/v0/b/fir-alta-aef46.appspot.com/o/bg.mp4?alt=media&token=5ec3d76d-e8d7-4d2f-abf5-3b93080add8e" type="video/mp4" style={{width: '100%', height: '100vh'}}/>
            </video>
            <Layout.Content style={{height: '1000px'}}>
                {props.children}
            </Layout.Content>
            <FooterComponent/>
        </Layout>
    );
};

export default DefaultLayout;