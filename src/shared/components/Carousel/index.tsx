import "./styles.scss";
import {useRef, useState} from 'react';
import {Carousel as AntCarousel, Flex} from "antd";
import {CarouselRef} from "antd/es/carousel";
import {IconArrowNext} from "@assets/icons";

const data: { src: string; title: string; description: string }[] = [
    {
        src: "https://firebasestorage.googleapis.com/v0/b/fir-alta-aef46.appspot.com/o/post%2Fcarousel%2F1.png?alt=media&token=17567b25-6999-440c-9ce9-aa0c21e04777",
        title: "Thông báo mời chào giá cạnh tranh cung cấp nước đá chế tác Băng Đăng",
        description: "THÔNG BÁO MỜI CHÀO GIÁ CẠNH TRANH CÔNG TY CỔ PHẦN DỊCH VỤ DU LỊCH PHÚ THỌ tổ chức chào giá cạnh tranh lựa chọn đơn vị Cung cấp nước đá để chế tác Băng Đăng tại Công viên Văn hóa Đầm Sen.",
    },
    {
        src: "https://firebasestorage.googleapis.com/v0/b/fir-alta-aef46.appspot.com/o/post%2Fcarousel%2F2.png?alt=media&token=c89b86bd-7365-4d3f-98d7-90a1c54de116",
        title: "Đầm Sen là 1 trong 5 khu vui chơi giải trí tốt nhất Việt Nam",
        description: "Trong buổi trao tặng giải thưởng Du lịch Việt Nam 2019, CVVH Đầm Sen đã lọt vào Top 5 khu du lịch và vui chơi giải trí tốt nhất Việt Nam.",
    },
    {
        src: "https://firebasestorage.googleapis.com/v0/b/fir-alta-aef46.appspot.com/o/post%2Fcarousel%2F3.png?alt=media&token=9447640b-058b-43ab-999b-ac421d735c4b",
        title: "Thông báo kết quả lựa chọn nhà cung cấp hoa trang trí Tết cho CVVH Đầm Sen",
        description: "Công ty Cổ phần Dịch vụ Du lịch Phú Thọ thông báo đến các nhà cung cấp tham gia chào hàng cạnh tranh Hạng mục: Mua cây hoa các loại trang trí Tết Nguyên đán Qúy Mão năm 2023 cho Công viên Văn hóa Đầm Sen",
    },
    {
        src: "https://firebasestorage.googleapis.com/v0/b/fir-alta-aef46.appspot.com/o/post%2Fcarousel%2F4.png?alt=media&token=197ce6f4-de84-438c-9338-a602a4099554",
        title: "Kết quả đấu giá giữ xe tại CVVH Đầm Sen 2022",
        description: "Công ty Cổ phần Dịch vụ Du lịch Phú Thọ xin thông báo đến các đơn vị tham gia đấu giá cạnh tranh hạng mục “Hợp tác giữ xe 02 – 04 bánh tại Công viên văn hóa Đầm Sen (Số 03 Hòa Bình, Phường 03, Quận 11, TP.HCM), kết quả như sau:• Tên hạng mục đấu giá: Hợp tác giữ xe 02 -04 bánh• Giá khởi điểm được duyệt: 241.667.000 đồng/tháng (đã bao gồm thuế GTGT)• Bên mời đấu giá: Công ty Cổ phần Dịch vụ Du lịch Phú Thọ (Địa chỉ: Số 15 đường số 2 cư xá Lữ Gia, Phường 15, Quận 11, TP.HCM)• Địa điểm thực hiện: Công viên văn hóa Đầm Sen• Hình thức lựa chọn đơn vị: Đấu giá cạnh tranh",
    },
]

const Carousel = () => {
    const ref = useRef<CarouselRef>(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const next = () => {
        ref.current?.next();
    }

    const prev = () => {
        ref.current?.prev();
    }

    const goTo = (slide: number) => {
        ref.current?.goTo(slide);
        console.log(slide);
    }

    const beforeChange = () => {
        setIsAnimating(true);
    }

    const afterChange = (slide: number) => {
        setIsAnimating(false);
        setCurrentSlide(slide);
        console.log('after: ',slide);
    }

    return (
        <div>
            <AntCarousel autoplay autoplaySpeed={3000} ref={ref} dots={false} beforeChange={beforeChange}
                         afterChange={afterChange} className="carousel-component">
                {
                    data.map((item, index) => (
                        <div key={"carousel-item-" + index}>
                            <div className="wrap-image">
                                <img src={item.src} alt="Carousel Item"/>
                            </div>
                            <Flex justify="space-between"
                                  className={`carousel-component__container-footer ${isAnimating ? 'fade-out' : 'fade-in'}`}>
                                <Flex vertical>
                                    <div className="carousel-title">{item.title}</div>
                                    <p className="carousel-description">{item.description}</p>
                                </Flex>
                                <Flex vertical justify="space-between" align="end">
                                    <Flex>
                                        <button className="carousel-btn" onClick={prev}>
                                            <IconArrowNext style={{transform: 'rotate(180deg)'}}/>
                                        </button>
                                        <button className="carousel-btn" onClick={next}>
                                            <IconArrowNext/>
                                        </button>
                                    </Flex>
                                    <Flex align="center" gap="middle">
                                        {
                                            Array.from({length: data.length}).map((_, i: number) => (
                                                <button key={"carousel-btn-dot-" + i} disabled={i === currentSlide}
                                                        onClick={() => goTo(i)}
                                                        className="carousel-btn-dot"
                                                >
                                                    {
                                                        i === currentSlide ? (
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="17"
                                                                 viewBox="0 0 28 17" fill="none">
                                                                <path
                                                                    d="M22.6105 8.3053C22.6105 12.8922 18.8921 16.6106 14.3052 16.6106C9.71833 16.6106 5.99994 12.8922 5.99994 8.3053C5.99994 3.71843 9.71833 3.05176e-05 14.3052 3.05176e-05C18.8921 3.05176e-05 22.6105 3.71843 22.6105 8.3053Z"
                                                                    fill="#0054A6"/>
                                                                <path fillRule="evenodd" clipRule="evenodd"
                                                                      d="M14.3052 16.2373C18.6859 16.2373 22.2372 12.686 22.2372 8.3053C22.2372 3.92458 18.6859 0.373301 14.3052 0.373301C9.92449 0.373301 6.37321 3.92458 6.37321 8.3053C6.37321 12.686 9.92449 16.2373 14.3052 16.2373ZM14.3052 16.6106C18.8921 16.6106 22.6105 12.8922 22.6105 8.3053C22.6105 3.71843 18.8921 3.05176e-05 14.3052 3.05176e-05C9.71833 3.05176e-05 5.99994 3.71843 5.99994 8.3053C5.99994 12.8922 9.71833 16.6106 14.3052 16.6106Z"
                                                                      fill="white"/>
                                                                <path
                                                                    d="M10.3434 5.60623L1 10.5894L8.99382 8.09781L17.6105 11.1085L27.0578 6.12531L18.9601 8.72071L10.3434 5.60623Z"
                                                                    fill="white" stroke="#0054A6" strokeWidth="0.186635"
                                                                    strokeLinejoin="round"/>
                                                            </svg>
                                                        )  : (
                                                            <div style={{
                                                                width: '100%',
                                                                height: '100%',
                                                                borderRadius: '50%',
                                                                border: '1px solid #0054A6',
                                                            }}></div>
                                                        )
                                                    }
                                                </button>
                                            ))
                                        }
                                    </Flex>
                                </Flex>
                            </Flex>
                        </div>
                    ))
                }
            </AntCarousel>
        </div>
    );
};

export default Carousel;