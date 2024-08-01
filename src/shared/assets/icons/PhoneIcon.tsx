import Icon from "@ant-design/icons";
import {GetProps} from "antd";

type ICustomIconProps = GetProps<typeof Icon>;

const PhoneSvg = () => (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M21.97 18.9965C21.97 19.3565 21.89 19.7265 21.72 20.0865C21.55 20.4465 21.33 20.7865 21.04 21.1065C20.55 21.6465 20.01 22.0365 19.4 22.2865C18.8 22.5365 18.15 22.6665 17.45 22.6665C16.43 22.6665 15.34 22.4265 14.19 21.9365C13.04 21.4465 11.89 20.7865 10.75 19.9565C9.58811 19.1066 8.49169 18.1706 7.47 17.1565C6.45877 16.1385 5.5261 15.0454 4.68 13.8865C3.86 12.7465 3.2 11.6065 2.72 10.4765C2.24 9.3365 2 8.2465 2 7.2065C2 6.5265 2.12 5.8765 2.36 5.2765C2.6 4.6665 2.98 4.1065 3.51 3.6065C4.15 2.9765 4.85 2.6665 5.59 2.6665C5.87 2.6665 6.15 2.7265 6.4 2.8465C6.66 2.9665 6.89 3.1465 7.07 3.4065L9.39 6.6765C9.57 6.9265 9.7 7.1565 9.79 7.3765C9.88 7.5865 9.93 7.7965 9.93 7.9865C9.93 8.2265 9.86 8.4665 9.72 8.6965C9.59 8.9265 9.4 9.1665 9.16 9.4065L8.4 10.1965C8.29 10.3065 8.24 10.4365 8.24 10.5965C8.24 10.6765 8.25 10.7465 8.27 10.8265C8.3 10.9065 8.33 10.9665 8.35 11.0265C8.53 11.3565 8.84 11.7865 9.28 12.3065C9.73 12.8265 10.21 13.3565 10.73 13.8865C11.27 14.4165 11.79 14.9065 12.32 15.3565C12.84 15.7965 13.27 16.0965 13.61 16.2765C13.66 16.2965 13.72 16.3265 13.79 16.3565C13.87 16.3865 13.95 16.3965 14.04 16.3965C14.21 16.3965 14.34 16.3365 14.45 16.2265L15.21 15.4765C15.46 15.2265 15.7 15.0365 15.93 14.9165C16.16 14.7765 16.39 14.7065 16.64 14.7065C16.83 14.7065 17.03 14.7465 17.25 14.8365C17.47 14.9265 17.7 15.0565 17.95 15.2265L21.26 17.5765C21.52 17.7565 21.7 17.9665 21.81 18.2165C21.91 18.4665 21.97 18.7165 21.97 18.9965Z"
            fill="white"/>
    </svg>
)

const PhoneIcon = (props : Partial<ICustomIconProps>) => <Icon {...props} component={PhoneSvg} />
export default PhoneIcon;