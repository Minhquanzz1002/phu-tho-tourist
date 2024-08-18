import "./styles.scss";

interface IChipProps {
    label: string;
    variant?: 'primary' | 'outline-primary';
    onClick: React.MouseEventHandler<HTMLDivElement>;
}

const Chip = ({variant = 'primary', ...props}: IChipProps) => {
    return (
        <div className={"chip chip-" + variant} onClick={props.onClick}>
            {props.label}
        </div>
    );
};

export default Chip;