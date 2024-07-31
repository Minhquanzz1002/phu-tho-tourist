import {memo} from "react";
import "@styles/styles.scss";
import PublicPage from "./routers/component/PublicPage.tsx";

const MainView = memo(() =>   {
    return <PublicPage/>
})

const App = () => {
    return (
        <MainView/>
    )
}

export default App
