import React from "react";
import {GetProps} from "antd";
import Icon from "@ant-design/icons";

type ICustomIconProps = GetProps<typeof Icon>

const CalendarSvg = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
            d="M19 4H17V2H15V4H9V2H7V4H5C3.897 4 3 4.897 3 6V20C3 21.103 3.897 22 5 22H19C20.103 22 21 21.103 21 20V6C21 4.897 20.103 4 19 4ZM18 19H12V13H18V19ZM19 9H5V7H19V9Z"
            fill="currentColor"/>
    </svg>
);

const CalendarIcon = (props: Partial<ICustomIconProps>) => <Icon {...props} component={CalendarSvg}/>
export default CalendarIcon;