import React from "react";
import {GetProps} from "antd";
import Icon from "@ant-design/icons";

type ICustomIconProps = GetProps<typeof Icon>

const MailSvg = () => (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd"
              d="M7 20.3335H17C20 20.3335 22 18.8335 22 15.3335V8.3335C22 4.8335 20 3.3335 17 3.3335H7C4 3.3335 2 4.8335 2 8.3335V15.3335C2 18.8335 4 20.3335 7 20.3335ZM17.4681 9.41951C17.7917 9.16101 17.8445 8.68908 17.586 8.36543C17.3275 8.04178 16.8556 7.98897 16.5319 8.24748L13.4029 10.7467L13.4025 10.747C12.6462 11.3489 11.3446 11.349 10.588 10.7474L7.46898 8.24821C7.14573 7.9892 6.67372 8.04127 6.41471 8.36452C6.1557 8.68776 6.20778 9.15977 6.53102 9.41878L9.65102 11.9188L9.65287 11.9203C10.9563 12.9579 13.0337 12.9579 14.3371 11.9203L14.3381 11.9195L17.4681 9.41951Z"
              fill="white"/>
    </svg>

);

const MailIcon = (props: Partial<ICustomIconProps>) => <Icon {...props} component={MailSvg}/>
export default MailIcon;