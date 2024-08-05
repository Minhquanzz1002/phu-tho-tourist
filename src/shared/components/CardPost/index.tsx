import {Card} from "antd";

interface ICardPostProps {}

const CardPost = (props : ICardPostProps) => {
    return (
        <Card cover={<img alt="Card Item"
                          loading="lazy"
                          src="https://firebasestorage.googleapis.com/v0/b/fir-alta-aef46.appspot.com/o/home%2Fsection%204%2F2.png?alt=media&token=30dbf7ce-431a-49ee-a0c1-25d04baa94c5"/>}>

        </Card>
    );
};

export default CardPost;