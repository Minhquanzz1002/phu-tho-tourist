export interface IJobPosting {
    id: string;
    logo: string;
    field: string;
    employmentType: string;
    status: JobStatus;
    description: string;
    location: string;
    postDate: Date;
}

export enum JobStatus {
    Open =  'open',
    Closed = 'closed',
}