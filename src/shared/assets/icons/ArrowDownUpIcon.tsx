import React from "react";
import {GetProps} from "antd";
import Icon from "@ant-design/icons";

type ICustomIconProps = GetProps<typeof Icon>

const ArrowDownUpSvg = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M7 4V20M7 20L3 16M7 20L11 16M17 4V20M17 4L21 8M17 4L13 8" stroke="#0054A6" strokeWidth="1.5"
              strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const ArrowDownUpIcon = (props: Partial<ICustomIconProps>) => <Icon {...props} component={ArrowDownUpSvg}/>
export default ArrowDownUpIcon;