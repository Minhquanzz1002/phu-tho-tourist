import {GetProps} from "antd";
import Icon from "@ant-design/icons";

type ICustomIconProps = GetProps<typeof Icon>

const NewsSvg = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
            d="M6 17H11V15H6V17ZM16 17H18V15H16V17ZM6 13H11V11H6V13ZM16 13H18V7H16V13ZM6 9H11V7H6V9ZM4 21C3.45 21 2.979 20.804 2.587 20.412C2.195 20.02 1.99934 19.5493 2 19V5C2 4.45 2.196 3.979 2.588 3.587C2.98 3.195 3.45067 2.99934 4 3H20C20.55 3 21.021 3.196 21.413 3.588C21.805 3.98 22.0007 4.45067 22 5V19C22 19.55 21.804 20.021 21.412 20.413C21.02 20.805 20.5493 21.0007 20 21H4Z"
            fill="currentColor"/>
    </svg>
);

const NewsIcon = (props: Partial<ICustomIconProps>) => <Icon {...props} component={NewsSvg}/>
export default NewsIcon;