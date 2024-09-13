import React from "react";
import {GetProps} from "antd";
import Icon from "@ant-design/icons";

type ICustomIconProps = GetProps<typeof Icon>

const ChevronsDownSvg = () => (
    <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Group 6">
            <path id="Vector" d="M24.5 12L13 22L1.5 12" stroke="#F0F0F0" strokeWidth="3" strokeLinecap="round"
                  strokeLinejoin="round"/>
            <path id="Vector_2" d="M24.5 2L13 12L1.5 2" stroke="#F0F0F0" strokeWidth="3" strokeLinecap="round"
                  strokeLinejoin="round"/>
        </g>
    </svg>
);

const ChevronsDownIcon = (props: Partial<ICustomIconProps>) => <Icon {...props} component={ChevronsDownSvg}/>
export default ChevronsDownIcon;