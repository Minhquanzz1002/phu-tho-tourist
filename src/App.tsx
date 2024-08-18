import {memo} from "react";
import "@styles/styles.scss";
import {PublicPage} from "./routers/component/PublicPage.tsx";
import {ConfigProvider} from "antd";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/vi';

const MainView = memo(() => {
    return <PublicPage/>
})

dayjs.extend(relativeTime);
dayjs.locale('vi');

const App = () => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: 'rgba(0, 84, 166, 1)',
                    colorPrimaryHover: 'rgba(51, 118, 184, 1)',
                },
                components: {
                    Button: {
                        fontFamily: 'Roboto',
                        fontSize: 18,
                        fontWeight: 600,
                        lineHeight: 21,
                        borderRadius: 5,
                        paddingInlineLG: 28,
                        controlHeightLG: 44,
                    }
                }
            }}
        >
            <MainView/>
        </ConfigProvider>
    )
}

export default App
