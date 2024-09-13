import React from "react";
import {GetProps} from "antd";
import Icon from "@ant-design/icons";

type ICustomIconProps = GetProps<typeof Icon>

const XMarkSvg = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="xmark-large">
            <path id="Icon" d="M3.2857 3.28577L14.7143 14.7143M14.7143 3.28577L3.2857 14.7143" stroke="#0054A6"
                  strokeWidth="2.85714" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
    </svg>
);

const XMarkIcon = (props: Partial<ICustomIconProps>) => <Icon {...props} component={XMarkSvg}/>
export default XMarkIcon;