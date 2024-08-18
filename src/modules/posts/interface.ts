export interface IPost {
    id: string;
    image: string;
    title: string;
    description: string;
    author: string;
    views: number;
    topics: [string, string, string];
    publishedAt: Date;
}