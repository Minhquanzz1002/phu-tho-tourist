import "./styles.scss";
import {IconPolygon} from "@assets/icons";

interface ITitlePageProps {
    title: string;
}

const TitlePage = (props: ITitlePageProps) => {
    return (
        <div className="container-title-page">
            <IconPolygon/>
            <div className="wrap-title-page">
                <h2>{props.title}</h2>
            </div>
        </div>
    );
};

export default TitlePage;