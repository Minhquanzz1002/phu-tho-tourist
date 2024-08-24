import {Flex, Spin} from "antd";
import {LoadingOutlined} from "@ant-design/icons";

const Loading = () => {
    return (
        <Flex justify="center" align="center" className="w-full" style={{minHeight: '50vh'}}>
            <Spin size="large" indicator={<LoadingOutlined color="white"/>}/>
        </Flex>
    );
};

export default Loading;