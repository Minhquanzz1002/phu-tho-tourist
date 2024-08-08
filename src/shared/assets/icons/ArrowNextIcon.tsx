import {GetProps} from "antd";
import Icon from "@ant-design/icons";

type ICustomIconProps = GetProps<typeof Icon>

const ArrowNextSvg = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M10 21L18.4 14L10 7" fill="currentColor"/>
        <path d="M10 21L18.4 14L10 7L10 21Z" stroke="currentColor" strokeWidth="5" strokeLinecap="round"
              strokeLinejoin="round"/>
    </svg>
);

const ArrowNextIcon = (props: Partial<ICustomIconProps>) => <Icon {...props} component={ArrowNextSvg}/>
export default ArrowNextIcon;