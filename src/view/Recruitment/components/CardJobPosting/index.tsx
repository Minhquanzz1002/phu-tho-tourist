import React from 'react';
import "./styles.scss";
import {Avatar, Button, Flex, Space} from "antd";
import {Link} from "react-router-dom";
import {IJobPosting, JobStatus} from "../../../../modules/jobPosting/interface";
import {IconMapPin} from "@assets/icons";
import {timeAgo} from "@helper/function";

interface ICardJobPostingProps {
    job: IJobPosting;
}

const IconClock = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
        <path
            d="M8.5 1.33337C4.82667 1.33337 1.83334 4.32671 1.83334 8.00004C1.83334 11.6734 4.82667 14.6667 8.5 14.6667C12.1733 14.6667 15.1667 11.6734 15.1667 8.00004C15.1667 4.32671 12.1733 1.33337 8.5 1.33337ZM11.4 10.38C11.3666 10.4369 11.3223 10.4865 11.2696 10.526C11.2169 10.5655 11.1568 10.5942 11.0929 10.6103C11.029 10.6264 10.9626 10.6297 10.8974 10.6199C10.8323 10.6102 10.7697 10.5875 10.7133 10.5534L8.64667 9.32004C8.13334 9.01337 7.75334 8.34004 7.75334 7.74671V5.01337C7.75334 4.74004 7.98 4.51337 8.25334 4.51337C8.52667 4.51337 8.75334 4.74004 8.75334 5.01337V7.74671C8.75334 7.98671 8.95334 8.34004 9.16 8.46004L11.2267 9.69337C11.4667 9.83337 11.5467 10.14 11.4 10.38Z"
            fill="#A3A3A3"/>
    </svg>
)


const CardJobPosting = ({job}: ICardJobPostingProps) => {

    const statusStyles = {
        [JobStatus.Open]: 'card-job-posting__status--open',
        [JobStatus.Closed]: 'card-job-posting__status--closed'
    }

    const statusText = job.status === JobStatus.Open ? 'Đang tuyển' : 'Đã hết hạn';

    return (
        <div className="card-job-posting">
            <Flex align="center" gap="small" className="w-full">
                <div className="card-job-posting__logo">
                    <Avatar style={{width: '6rem', height: '6rem'}} src={job.logo} size="large"/>
                </div>
                <Space direction="vertical" className="w-full">
                    <div className="card-job-posting__field">{job.field}</div>
                    <div className="card-job-posting__employment-type">{job.employmentType}</div>
                    <Flex justify="space-between">
                        <Space direction="vertical" className="card-job-posting__details">
                            <Flex align="center" gap="small">
                                <IconMapPin style={{color: '#A3A3A3', height: '1.6rem', width: '1.6rem'}}/>
                                <div className="card-job-posting__location" title={job.location}>{job.location}</div>
                            </Flex>
                            <Flex align="center" gap="small">
                                <IconClock/>
                                {timeAgo(job.postDate)}
                            </Flex>
                        </Space>

                        <Flex justify="center" align="center"
                              className={`card-job-posting__status ${statusStyles[job.status]}`}>{statusText}</Flex>
                    </Flex>
                </Space>
            </Flex>
            <Space direction="vertical">
                <div className="card-job-posting__label-description">Mô tả công việc:</div>
                <div className="card-job-posting__description">{job.description}</div>
            </Space>
            <Link to="/tuyen-dung/chi-tiet">
                <Button type="primary" size="large">Xem chi tiết</Button>
            </Link>
        </div>
    );
};

export default CardJobPosting;