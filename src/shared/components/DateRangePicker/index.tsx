import {DatePicker, DatePickerProps, Flex} from "antd";
import {IconCalendarDays} from "@assets/icons";
import dayjs from "dayjs";

interface DateRangePickerProps {
    onChangeStartDate: (date: Date) => void;
    onChangeEndDate: (date: Date) => void;
    startDate?: Date;
    endDate?: Date;
}

const dateFormat = 'DD/MM/YYYY';
const DateRangePicker = (props: DateRangePickerProps) => {
    const onChangeStartDate: DatePickerProps['onChange'] =  (date) => {
        if (!date) {
            return;
        }
        props.onChangeStartDate(date.toDate());
    }

    const onChangeEndDate: DatePickerProps['onChange'] =  (date) => {
        if (!date) {
            return;
        }
        props.onChangeEndDate(date.toDate());
    }

    return (
        <Flex gap="small" align="center">
            <DatePicker format={dateFormat} placeholder="DD/MM/YYYY" defaultValue={props.startDate  && dayjs(props.startDate)}
                        suffixIcon={<IconCalendarDays/>} onChange={onChangeStartDate} />
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8" viewBox="0 0 6 8" fill="none">
                <path
                    d="M5.51129 3.13807L3.96467 2.01241L1.44455 0.178209C0.910697 -0.20463 0 0.0696425 0 0.618188V4.17802V7.38359C0 7.93213 0.910697 8.20641 1.44455 7.81785L5.51129 4.85799C6.1629 4.38944 6.1629 3.61233 5.51129 3.13807Z"
                    fill="#0054A6"/>
            </svg>
            <DatePicker onChange={onChangeEndDate} defaultValue={props.endDate  && dayjs(props.endDate)} format={dateFormat} placeholder="DD/MM/YYYY" suffixIcon={<IconCalendarDays/>}/>
        </Flex>
    );
};

export default DateRangePicker;