import dayjs from "dayjs";

export const formatDate = (date: Date) => {
    return dayjs(date).format('DD/MM/YY HH:mm');
}

export const scrollToViewByElementId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({behavior: "smooth"});
    }
}

export const timeAgo = (date: Date): string => {
    return dayjs(date).fromNow();
}

export const formatViews = (views: number) : string => {
    if (views< 1000) {
        return views.toString();
    }
    const  thousands = Math.floor((views / 1000));
    return `${thousands}N`;
}

export const formatToLocaleDateString = (date: Date) => {
    return dayjs(date).format('DD/MM/YYYY');
}