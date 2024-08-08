import "./styles.scss";
import {Col, Flex, Row} from "antd";
import CardPost from "@shared/components/CardPost";

const PostDetail = () => {
    return (
        <section className="w-full" id="postDetailSection1">
            <Flex vertical justify="start" className="w-full" gap="0.2rem">
                <h1>Kết quả đấu giá giữ xe tại CVVH Đầm Sen 2022</h1>
                <div className="post-author">by tuyendung in on Tháng Năm 21, 2020</div>
            </Flex>

            <div>
                <img
                    style={{
                        width: '100%',
                        objectFit: 'cover',
                    }}
                    src="https://firebasestorage.googleapis.com/v0/b/fir-alta-aef46.appspot.com/o/post%2Fdetail%2F1.png?alt=media&token=9541a4a0-8ea7-4729-9c77-d3df0f884bcb"
                    alt="Image"/>
            </div>

            <div className="post-content">
                <p>Công ty Cổ phần Dịch vụ Du lịch Phú Thọ xin thông báo đến các đơn vị tham gia đấu giá cạnh tranh hạng
                    mục “Hợp tác giữ xe 02 – 04 bánh tại Công viên văn hóa Đầm Sen (Số 03 Hòa Bình, Phường 03, Quận 11,
                    TP.HCM), kết quả như sau.</p>
                <ul>
                    <li>Tên hạng mục đấu giá: Hợp tác giữ xe 02 -04 bánh.</li>
                    <li>Giá khởi điểm được duyệt: 241.667.000 đồng/tháng (đã bao gồm thuế GTGT).</li>
                    <li>Bên mời đấu giá: Công ty Cổ phần Dịch vụ Du lịch Phú Thọ (Địa chỉ: Số 15 đường số 2 cư xá Lữ
                        Gia, Phường 15, Quận 11, TP.HCM).
                    </li>
                    <li>Địa điểm thực hiện: Công viên văn hóa Đầm Sen.</li>
                    <li>Hình thức lựa chọn đơn vị: Đấu giá cạnh tranh</li>
                </ul>
                <p>Kết quả lựa chọn đơn vị:</p>
                <ul>
                    <li>Công ty TNHH Thương mại Dịch vụ Hai Tám Sáu (Mã số doanh nghiệp: 0313270903 – Địa chỉ: 247/8B
                        Hoàng Hoa Thám, Phường 05, Quận Phú Nhuận, TP.HCM)
                    </li>
                    <li>Giá tham gia: 13.500.000.000 đồng (đã gồm thuế GTGT)</li>
                    <li>Xếp hạng hồ sơ: Hạng 1+ Giá trúng đấu giá: 13.500.000.000 đồng (đã gồm thuế GTGT)</li>
                    <li>Loại hợp đồng: Hợp đồng hợp tác kinh doanh+ Thời gian thực hiện hợp đồng: 03 năm</li>
                </ul>
                <p>Đề nghị Công ty TNHH TMDV Hai Tám Sáu trong vòng 02 ngày kể từ thời điểm nhận được thông báo trúng
                    đấu giá của Công ty Cổ phần Dịch vụ Du lịch Phú Thọ, phải tiến hành thương thảo và ký hợp đồng. Nộp
                    tiền bảo lãnh thực hiện hợp đồng bằng tiền mặt hoặc chuyển khoản tương ứng số tiền: 895.000.000 đồng
                    (365 triệu/tháng x 03 tháng = 1.095.000.000 đồng trừ 200 triệu đồng tiền đã ký quỹ) ngay sau khi ký
                    hợp đồng cho Công ty Cổ phần Dịch vụ Du lịch Phú Thọ theo đúng Hồ sơ yêu cầu mời đấu giá cạnh tranh
                    ngày 31/5/2022.</p>
                <p>Nếu quá thời hạn trên mà không thực hiện thương thảo, ký hợp đồng hoặc không nộp đủ số tiền bảo lãnh
                    thực hiện hợp đồng, thì sẽ mất tiền ký quỹ và mặt bằng đấu giá hợp tác sẽ được chuyển cho khách hàng
                    có hồ sơ đấu giá xếp hạng hai.</p>
                <p>Kế hoạch ký kết hợp đồng với đơn vị được lựa chọn: Dự kiến trước ngày 30/6/2022.</p>
                <p>Với những công ty không trúng đấu giá hợp tác sẽ được nhận lại ngay số tiền đã nộp ký quỹ là
                    200.000.000 đồng tại Văn phòng Công ty Cổ phần Dịch vụ Du lịch Phú Thọ.</p>
                <p>Thông báo này là cơ sở để ký kết hợp đồng với nhà cung cấp trúng thầu đúng theo quy định.Trân
                    trọng.</p>
                <p>Chi tiết xem trong văn bản đính kèm</p>
            </div>

            <div>
                <img
                    style={{
                        width: '100%',
                        objectFit: 'cover',
                    }}
                    src="https://firebasestorage.googleapis.com/v0/b/fir-alta-aef46.appspot.com/o/post%2Fdetail%2F2.png?alt=media&token=3ac8a6e7-f5aa-4f21-b07d-8e79f457c23a"
                    alt="Image"/>
            </div>


            <Flex vertical className="container-related-post w-full">
                <div className="container-related-post__title">Bài viết liên quan</div>
                <Row gutter={[24, 24]} style={{marginTop: '1.6rem'}}>
                    {
                        Array.from({length: 4}).map((_, index)  => (
                            <Col key={"related-post-" + index} xs={24} md={24} lg={12} xl={8} xxl={6}>
                                <CardPost size="medium"/>
                            </Col>
                        ))
                    }
                </Row>
            </Flex>

        </section>
    );
};

export default PostDetail;