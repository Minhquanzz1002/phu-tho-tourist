import "./styles.scss";

interface IChipProps {
    label: string;
    variant?: 'primary' | 'outline-primary';
}

const Chip = ({variant = 'primary', ...props}: IChipProps) => {
    return (
        <div className={"chip chip-" + variant}>
            {props.label}
        </div>
    );
};

export default Chip;