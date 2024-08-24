import "./styles.scss";
import React from "react";

interface IChipProps {
    label: string;
    variant?: 'primary' | 'outline-primary';
    onClick: React.MouseEventHandler<HTMLDivElement>;
    style?: React.CSSProperties;
}

const Chip = ({variant = 'primary', ...props}: IChipProps) => {
    return (
        <div style={props.style} className={"chip chip-" + variant} onClick={props.onClick}>
            {props.label}
        </div>
    );
};

export default Chip;