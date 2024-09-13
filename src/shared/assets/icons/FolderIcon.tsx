import React from "react";
import {GetProps} from "antd";
import Icon from "@ant-design/icons";

type ICustomIconProps = GetProps<typeof Icon>

const FolderSvg = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
            d="M6 12H18V10H6V12ZM6 16H14V14H6V16ZM4 20C3.45 20 2.979 19.804 2.587 19.412C2.195 19.02 1.99934 18.5493 2 18V6C2 5.45 2.196 4.979 2.588 4.587C2.98 4.195 3.45067 3.99934 4 4H10L12 6H20C20.55 6 21.021 6.196 21.413 6.588C21.805 6.98 22.0007 7.45067 22 8V18C22 18.55 21.804 19.021 21.412 19.413C21.02 19.805 20.5493 20.0007 20 20H4Z"
            fill="currentColor"/>
    </svg>
);

const FolderIcon = (props: Partial<ICustomIconProps>) => <Icon {...props} component={FolderSvg}/>
export default FolderIcon;