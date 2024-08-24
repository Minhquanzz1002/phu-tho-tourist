import "./styles.scss";
import {DateRange, Range} from "react-date-range";
import {useEffect, useState} from "react";

interface DateRangeProps {
    startDate?: Date;
    endDate?: Date;
    onChangeStartDate: (date?: Date) => void;
    onChangeEndDate: (date?: Date) => void;
}

const DateRangeCustom = (props: DateRangeProps) => {
    const [state, setState] = useState<Range[]>([
        {
            startDate: props.startDate,
            endDate: props.endDate,
            key: 'selection'
        }
    ]);

    useEffect(() => {
        const {startDate, endDate} = state[0];
        props.onChangeStartDate(startDate);
        props.onChangeEndDate(endDate);
    }, [state]);

    useEffect(() => {
        console.log(state);
    }, []);

    return (
        <DateRange
            editableDateInputs={true}
            ranges={state}
            rangeColors={["#0054A6"]}
            moveRangeOnFirstSelection={false}
            onChange={item => setState([item.selection])}
        />
    );
};

export default DateRangeCustom;