import React from "react";
import {GetProps} from "antd";
import Icon from "@ant-design/icons";

type ICustomIconProps = GetProps<typeof Icon>

const FacebookSvg = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd"
              d="M2.46911 4.24594C2 5.14902 2 6.33546 2 8.70833V15.2917C2 17.6645 2 18.851 2.46911 19.7541C2.86443 20.5151 3.48493 21.1356 4.24594 21.5309C5.14902 22 6.33546 22 8.70833 22L10.3334 22V14.7778H7.83336V12H10.3334V9.77778C10.3334 7.27778 11.9445 5.88889 14.2222 5.88889C14.9445 5.88889 15.7222 6 16.4445 6.11111V8.66667H15.1667C13.9445 8.66667 13.6667 9.27778 13.6667 10.0556V12H16.3334L15.8889 14.7778H13.6667V22L15.2917 22C17.6645 22 18.851 22 19.7541 21.5309C20.5151 21.1356 21.1356 20.5151 21.5309 19.7541C22 18.851 22 17.6645 22 15.2917V8.70833C22 6.33546 22 5.14902 21.5309 4.24594C21.1356 3.48493 20.5151 2.86443 19.7541 2.46911C18.851 2 17.6645 2 15.2917 2H8.70833C6.33546 2 5.14902 2 4.24594 2.46911C3.48493 2.86443 2.86443 3.48493 2.46911 4.24594Z"
              fill="white"/>
    </svg>


);

const FacebookIcon = (props: Partial<ICustomIconProps>) => <Icon {...props} component={FacebookSvg}/>
export default FacebookIcon;