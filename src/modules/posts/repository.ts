import {collection, getDocs, limit, orderBy, query, where} from "firebase/firestore";
import {db} from "../../config/firebaseConfig.ts";
import {IPost} from "./interface.ts";

const postsRef = collection(db, 'posts');

export const getPosts = async (topics: string[], startDate?: Date, endDate?: Date, limitNumber?: number) => {

    const conditions = [];
    if (topics.length > 0) {
        conditions.push(where('topics', 'array-contains-any', topics));
    }

    if (startDate) {
        conditions.push(where('publishedAt', '>=', startDate));
    }

    if (endDate) {
        conditions.push(where('publishedAt', '<=', endDate));
    }

    const q = limitNumber ? query(postsRef, ...conditions, orderBy('title', 'asc'), limit(limitNumber)) : query(postsRef, ...conditions, orderBy('title', 'asc'));

    const postSnapshots = await getDocs(q);
    return postSnapshots.docs.map(doc => {
        const {publishedAt, ...data} = doc.data();
        return {
            id: doc.id,
            publishedAt: publishedAt.toDate(),
            ...data
        } as IPost
    });
}

export const getNewestPosts = async (limitNumber?: number) => {
    let q = query(postsRef, orderBy('publishedAt', 'asc'));
    if (limitNumber) {
        q = query(postsRef, orderBy('publishedAt', 'desc'), limit(limitNumber));
    }

    const postSnapshots = await getDocs(q);
    return postSnapshots.docs.map(doc => {
        const {publishedAt, ...data} = doc.data();
        return {
            id: doc.id,
            publishedAt: publishedAt.toDate(),
            ...data
        } as IPost
    });
}