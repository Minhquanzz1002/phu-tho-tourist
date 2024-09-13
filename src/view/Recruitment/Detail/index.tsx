import React from "react";
import "./styles.scss";
import {Flex} from "antd";
import FormApplication from "@view/Recruitment/Detail/components/FormApplication";

const RecruitmentDetail = () => {
    return (
        <div className="container">
            <section id="recruitmentDetailSection">
                <Flex vertical gap="3.2rem">
                    <Flex justify="space-between">
                        <Flex gap="middle">
                            <div className="wrap-logo">
                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/fir-alta-aef46.appspot.com/o/recruitment%2Fdetail%2Flogo.svg?alt=media&token=340fefbe-a1b5-4416-b5d5-b3db83becffc"
                                    alt="Logo"/>
                            </div>
                            <Flex gap="small" vertical>
                                <h1>Nhân viên thiết kế đồ họa</h1>
                                <div className="subtitle">Nhân viên chính thức</div>
                                <Flex gap="middle" className="post-meta">
                                    <Flex align="center" gap="small">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M21.7183 8.19024C20.5352 3.2322 15.9944 1 12.0056 1H11.9944C8.01689 1 3.46477 3.22146 2.28167 8.17951C0.963353 13.7171 4.52393 18.4068 7.74647 21.358C8.88869 22.411 10.416 22.9998 12.0056 23C13.538 23 15.0704 22.4527 16.2535 21.358C19.4761 18.4068 23.0366 13.7278 21.7183 8.19024ZM12.0056 13.5668C11.5395 13.5668 11.078 13.4794 10.6474 13.3095C10.2168 13.1396 9.82548 12.8906 9.4959 12.5767C9.16631 12.2628 8.90487 11.8901 8.7265 11.48C8.54813 11.0699 8.45633 10.6303 8.45633 10.1863C8.45633 9.74241 8.54813 9.30282 8.7265 8.89269C8.90487 8.48255 9.16631 8.10988 9.4959 7.79598C9.82548 7.48207 10.2168 7.23306 10.6474 7.06318C11.078 6.89329 11.5395 6.80585 12.0056 6.80585C12.947 6.80585 13.8497 7.16201 14.5154 7.79598C15.181 8.42994 15.5549 9.28978 15.5549 10.1863C15.5549 11.0829 15.181 11.9427 14.5154 12.5767C13.8497 13.2107 12.947 13.5668 12.0056 13.5668Z"
                                                fill="#A3A3A3"/>
                                        </svg>
                                        <div className="job-location">CVVH Đầm Sen</div>
                                    </Flex>

                                    <Flex align="center" gap="small">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.35 15.57C16.2999 15.6552 16.2334 15.7296 16.1544 15.7889C16.0753 15.8482 15.9852 15.8912 15.8894 15.9154C15.7935 15.9396 15.6939 15.9445 15.5961 15.9299C15.4984 15.9152 15.4045 15.8812 15.32 15.83L12.22 13.98C11.45 13.52 10.88 12.51 10.88 11.62V7.52C10.88 7.11 11.22 6.77 11.63 6.77C12.04 6.77 12.38 7.11 12.38 7.52V11.62C12.38 11.98 12.68 12.51 12.99 12.69L16.09 14.54C16.45 14.75 16.57 15.21 16.35 15.57Z"
                                                fill="#A3A3A3"/>
                                        </svg>
                                        <div className="job-post-date">2 tuần trước</div>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Flex>
                        <div className="wrap-status">
                            <Flex justify="center" align="center"
                                  className="recruitment-status recruitment-status--open">
                                Đang tuyển
                            </Flex>
                        </div>
                    </Flex>

                    <Flex justify="space-between" align="center" className="post-info-mobi">
                        <Flex gap="small"  vertical>
                            <Flex align="center" gap="small">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                     viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M21.7183 8.19024C20.5352 3.2322 15.9944 1 12.0056 1H11.9944C8.01689 1 3.46477 3.22146 2.28167 8.17951C0.963353 13.7171 4.52393 18.4068 7.74647 21.358C8.88869 22.411 10.416 22.9998 12.0056 23C13.538 23 15.0704 22.4527 16.2535 21.358C19.4761 18.4068 23.0366 13.7278 21.7183 8.19024ZM12.0056 13.5668C11.5395 13.5668 11.078 13.4794 10.6474 13.3095C10.2168 13.1396 9.82548 12.8906 9.4959 12.5767C9.16631 12.2628 8.90487 11.8901 8.7265 11.48C8.54813 11.0699 8.45633 10.6303 8.45633 10.1863C8.45633 9.74241 8.54813 9.30282 8.7265 8.89269C8.90487 8.48255 9.16631 8.10988 9.4959 7.79598C9.82548 7.48207 10.2168 7.23306 10.6474 7.06318C11.078 6.89329 11.5395 6.80585 12.0056 6.80585C12.947 6.80585 13.8497 7.16201 14.5154 7.79598C15.181 8.42994 15.5549 9.28978 15.5549 10.1863C15.5549 11.0829 15.181 11.9427 14.5154 12.5767C13.8497 13.2107 12.947 13.5668 12.0056 13.5668Z"
                                        fill="#A3A3A3"/>
                                </svg>
                                <div className="job-location">CVVH Đầm Sen</div>
                            </Flex>

                            <Flex align="center" gap="small">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                     viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.35 15.57C16.2999 15.6552 16.2334 15.7296 16.1544 15.7889C16.0753 15.8482 15.9852 15.8912 15.8894 15.9154C15.7935 15.9396 15.6939 15.9445 15.5961 15.9299C15.4984 15.9152 15.4045 15.8812 15.32 15.83L12.22 13.98C11.45 13.52 10.88 12.51 10.88 11.62V7.52C10.88 7.11 11.22 6.77 11.63 6.77C12.04 6.77 12.38 7.11 12.38 7.52V11.62C12.38 11.98 12.68 12.51 12.99 12.69L16.09 14.54C16.45 14.75 16.57 15.21 16.35 15.57Z"
                                        fill="#A3A3A3"/>
                                </svg>
                                <div className="job-post-date">2 tuần trước</div>
                            </Flex>
                        </Flex>

                        <div>
                            <Flex justify="center" align="center"
                                  className="recruitment-status recruitment-status--open">
                                Đang tuyển
                            </Flex>
                        </div>
                    </Flex>

                    <div>
                        <img
                            style={{
                                width: '100%',
                                objectFit: 'cover'
                            }}
                            src="https://firebasestorage.googleapis.com/v0/b/fir-alta-aef46.appspot.com/o/recruitment%2Fdetail%2F1.png?alt=media&token=b77440ec-a465-4867-9cbd-2744baff4de7"
                            alt="Tuyển dụng"/>
                    </div>
                    <h2>Chi tiết tin tuyển dụng</h2>
                    <table>
                        <tbody>
                        <tr>
                            <th>Vị trí</th>
                            <td>Nhân viên thiết kế đồ họa</td>
                        </tr>
                        <tr>
                            <th>Số lượng</th>
                            <td>02 người</td>
                        </tr>
                        <tr>
                            <th>Nơi làm việc</th>
                            <td>Công viên văn hóa Đầm Sen</td>
                        </tr>
                        <tr>
                            <th>Địa chỉ làm việc</th>
                            <td>3 Hòa Bình, Phường 3, Quận 11, TP.HCM</td>
                        </tr>
                        <tr>
                            <th>Mô tả công việc</th>
                            <td>
                                <ul>
                                    <li>Thiết kế hình ảnh, brochure, banner, poster, pano, backdrop sân khấu, các loại
                                        vé
                                        mời …
                                        và các ấn phẩm phục vụ sự kiện, truyền thông của công viên.
                                    </li>
                                    <li>Chụp hình, quay phim, dựng video đơn giản.</li>
                                    <li>Lên phác thảo, trao đổi ý tưởng với quản lý và hoàn thiện thiết kế.</li>
                                    <li>Các chi tiết về công việc được trao đổi tại buổi phỏng vấn.</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <th>Ngày làm việc</th>
                            <td>...</td>
                        </tr>
                        <tr>
                            <th>Giờ làm việc</th>
                            <td>Giờ hành chính</td>
                        </tr>
                        <tr>
                            <th>Quyền lợi</th>
                            <td>
                                <ul>
                                    <li>Được ký hợp đồng lao động, tham gia đầy đủ chế độ BHXH.</li>
                                    <li>Thưởng tháng 13, 14, các ngày lễ, tết trong năm.</li>
                                    <li>Được phục vụ bữa ăn trưa tại nơi làm việc.</li>
                                    <li>Được trang bị đồng phục, khám sức khỏe định kỳ hàng năm.</li>
                                    <li>Được tham gia Bảo hiểm tai nạn 24/24.</li>
                                    <li>Nghỉ phép: 12 ngày phép / năm, công tác 5 năm thêm 1 ngày.</li>
                                    <li>Được tham gia miễn phí các khóa đào tạo nâng cao nghiệp vụ.</li>
                                    <li>Môi trường làm việc thân thiện, nhiều cơ hội học hỏi từ đội ngũ quản lý, nhân sự
                                        giàu
                                        kinh nghiệm, nhiệt huyết.
                                    </li>
                                    <li>Các chế độ khác: Quà sinh nhật, cưới hỏi, lì xì tết. Quà trung thu, quà Tết, quà
                                        thiếu
                                        nhi 1/6.
                                    </li>
                                    <li>Hỗ trợ ốm đau, ma chay, sinh con. Tham gia Ngày hội Gia đình, Ngày hội Tuổi thơ,
                                        hoạt
                                        động văn thể mỹ hàng năm.
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <th>Yêu cầu</th>
                            <td>
                                <ul>
                                    <li>Tốt nghiệp từ Cao đẳng chuyên ngành Mỹ thuật, Đồ họa...</li>
                                    <li>Sử dụng thành thạo các phần mềm thiết kế (Photoshop, Corel, Illustrator…).</li>
                                    <li>Có khả năng quay và dựng video hấp dẫn người xem.</li>
                                    <li>Sử dụng thành thạo máy ảnh, máy quay, flycam...</li>
                                    <li>Có khiếu thẩm mỹ, sáng tạo, chủ động trong công việc.</li>
                                    <li>Có thể làm việc cuối tuần, lễ tết theo đặc thù kinh doanh Công viên Giải trí.
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <th>Độ tuổi</th>
                            <td>22 - 27 tuổi</td>
                        </tr>
                        <tr>
                            <th>Trình độ</th>
                            <td>Cao đẳng</td>
                        </tr>
                        <tr>
                            <th>Hồ sơ gồm</th>
                            <td>
                                <p>Thông tin ứng tuyển:</p>
                                <ul>
                                    <li>Ứng viên vui lòng gửi CV đến email: tuyendung@damsenpark.vn.</li>
                                    <li>Hoặc nộp hồ sơ trực tiếp tại Trụ sở Văn phòng Công ty: 15 đường số 2, cư xá Lữ
                                        Gia,
                                        P.
                                        15, Quận 11. (ĐT: 028 38 650 921 - Phòng Nhân sự).
                                    </li>
                                </ul>

                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <Flex vertical gap="1.2rem" className="responsive-table">
                        <Flex vertical gap="0.8rem">
                            <h3>Vị trí</h3>
                            <div>
                                Nhân viên thiết kế đồ họa
                            </div>
                        </Flex>

                        <Flex vertical gap="0.8rem">
                            <h3>Số lượng</h3>
                            <div>
                                02 người
                            </div>
                        </Flex>

                        <Flex vertical gap="0.8rem">
                            <h3>Nơi làm việc</h3>
                            <div>
                                Công viên văn hóa Đầm Sen
                            </div>
                        </Flex>

                        <Flex vertical gap="0.8rem">
                            <h3>Địa chỉ làm việc</h3>
                            <div>
                                3 Hòa Bình, Phường 3, Quận 11, TP.HCM
                            </div>
                        </Flex>


                        <Flex vertical gap="0.8rem">
                            <h3>Mô tả công việc</h3>
                            <div>
                                <ul>
                                    <li>Thiết kế hình ảnh, brochure, banner, poster, pano, backdrop sân khấu, các loại
                                        vé
                                        mời …
                                        và các ấn phẩm phục vụ sự kiện, truyền thông của công viên.
                                    </li>
                                    <li>Chụp hình, quay phim, dựng video đơn giản.</li>
                                    <li>Lên phác thảo, trao đổi ý tưởng với quản lý và hoàn thiện thiết kế.</li>
                                    <li>Các chi tiết về công việc được trao đổi tại buổi phỏng vấn.</li>
                                </ul>
                            </div>
                        </Flex>

                        <Flex vertical gap="0.8rem">
                            <h3>Ngày làm việc</h3>
                            <div>
                                ...
                            </div>
                        </Flex>


                        <Flex vertical gap="0.8rem">
                            <h3>Giờ làm việc</h3>
                            <div>
                                Giờ hành chính
                            </div>
                        </Flex>

                        <Flex vertical gap="0.8rem">
                            <h3>Quyền lợi</h3>
                            <div>
                                <ul>
                                    <li>Được ký hợp đồng lao động, tham gia đầy đủ chế độ BHXH.</li>
                                    <li>Thưởng tháng 13, 14, các ngày lễ, tết trong năm.</li>
                                    <li>Được phục vụ bữa ăn trưa tại nơi làm việc.</li>
                                    <li>Được trang bị đồng phục, khám sức khỏe định kỳ hàng năm.</li>
                                    <li>Được tham gia Bảo hiểm tai nạn 24/24.</li>
                                    <li>Nghỉ phép: 12 ngày phép / năm, công tác 5 năm thêm 1 ngày.</li>
                                    <li>Được tham gia miễn phí các khóa đào tạo nâng cao nghiệp vụ.</li>
                                    <li>Môi trường làm việc thân thiện, nhiều cơ hội học hỏi từ đội ngũ quản lý, nhân sự
                                        giàu
                                        kinh nghiệm, nhiệt huyết.
                                    </li>
                                    <li>Các chế độ khác: Quà sinh nhật, cưới hỏi, lì xì tết. Quà trung thu, quà Tết, quà
                                        thiếu
                                        nhi 1/6.
                                    </li>
                                    <li>Hỗ trợ ốm đau, ma chay, sinh con. Tham gia Ngày hội Gia đình, Ngày hội Tuổi thơ,
                                        hoạt
                                        động văn thể mỹ hàng năm.
                                    </li>
                                </ul>
                            </div>
                        </Flex>

                        <Flex vertical gap="0.8rem">
                            <h3>Yêu cầu</h3>
                            <div>
                                <ul>
                                    <li>Tốt nghiệp từ Cao đẳng chuyên ngành Mỹ thuật, Đồ họa...</li>
                                    <li>Sử dụng thành thạo các phần mềm thiết kế (Photoshop, Corel, Illustrator…).</li>
                                    <li>Có khả năng quay và dựng video hấp dẫn người xem.</li>
                                    <li>Sử dụng thành thạo máy ảnh, máy quay, flycam...</li>
                                    <li>Có khiếu thẩm mỹ, sáng tạo, chủ động trong công việc.</li>
                                    <li>Có thể làm việc cuối tuần, lễ tết theo đặc thù kinh doanh Công viên Giải trí.
                                    </li>
                                </ul>
                            </div>
                        </Flex>

                        <Flex vertical gap="0.8rem">
                            <h3>Độ tuổi</h3>
                            <div>
                                22 - 27 tuổi
                            </div>
                        </Flex>

                        <Flex vertical gap="0.8rem">
                            <h3>Trình độ</h3>
                            <div>
                                Cao đẳng
                            </div>
                        </Flex>

                        <Flex vertical gap="0.8rem">
                            <h3>Hồ sơ gồm</h3>
                            <div>
                                <p>Thông tin ứng tuyển:</p>
                                <ul>
                                    <li>Ứng viên vui lòng gửi CV đến email: tuyendung@damsenpark.vn.</li>
                                    <li>Hoặc nộp hồ sơ trực tiếp tại Trụ sở Văn phòng Công ty: 15 đường số 2, cư xá Lữ
                                        Gia,
                                        P.
                                        15, Quận 11. (ĐT: 028 38 650 921 - Phòng Nhân sự).
                                    </li>
                                </ul>
                            </div>
                        </Flex>
                    </Flex>
                    <h2>Ứng tuyển Online</h2>
                    <FormApplication/>
                </Flex>
            </section>
        </div>
    );
};

export default RecruitmentDetail;