import {Layout, Menu, MenuProps} from "antd";

type MenuItem = Required<MenuProps>["items"][number];

const items : MenuItem[] = [
    {
        label: "Trang chủ",
        key:  "home",
    },
    {
        label: "Bài viết",
        key:  "w",
    }
]

const HeaderComponent = () => {
    return (
        <Layout.Header style={{background: '#002F5CCC', height: '120px', position: 'fixed', width: '100%'}}>
            <div>
                <Menu mode="horizontal" items={items} style={{background: 'none'}}/>
            </div>
        </Layout.Header>
    );
};

export default HeaderComponent;