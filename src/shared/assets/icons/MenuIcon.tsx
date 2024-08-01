import {GetProps} from "antd";
import Icon from "@ant-design/icons";

type ICustomIconProps = GetProps<typeof Icon>

const MenuSvg = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="menu">
            <path id="Icon" d="M4 6H20M4 12H20M4 18H20" stroke="white" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round"/>
        </g>
    </svg>

);

const MenuIcon = (props: Partial<ICustomIconProps>) => <Icon {...props} component={MenuSvg}/>
export default MenuIcon;