import React from "react";
import "./styles.scss";
import {useState} from "react";

interface IFlipsterCarouselProps {
    items: string[];
}

const FlipsterCarousel = ({items}: IFlipsterCarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState<number>(2);

    const handleItemClick = (index: number) => {
        setCurrentIndex(index);
    }

    const getPositionClass = (index: number): string => {
        const totalItems = 5;
        const normalizedIndex = (index + totalItems) % totalItems;
        const normalizedCurrentIndex = (currentIndex + totalItems) % totalItems;

        const prevIndex = (normalizedCurrentIndex - 1 + totalItems) % totalItems;
        const nextIndex = (normalizedCurrentIndex + 1) % totalItems;
        const futureIndex = (normalizedCurrentIndex + 2) % totalItems;

        if (normalizedIndex === normalizedCurrentIndex) {
            return 'flip-current';
        } else if (normalizedIndex === prevIndex) {
            return 'flip-prev';
        } else if (normalizedIndex === nextIndex) {
            return 'flip-next';
        } else if (normalizedIndex === futureIndex) {
            return 'flip-future';
        } else {
            return 'flip-past';
        }
    }

    return (
        <div className="flipster">
            <ul className="flip-items">
                {
                    items.map((item, index) => (
                        <li className={`flip-item ${getPositionClass(index)}`} key={index}>
                            <div className="flip-content">
                                <img
                                    src={"https://firebasestorage.googleapis.com/v0/b/fir-alta-aef46.appspot.com/o/home%2Fsection%201%2F" + item + "?alt=media"}
                                    alt={"Flipster Item " + index}
                                    onClick={() => handleItemClick(index)}
                                    loading="lazy"/>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default FlipsterCarousel;