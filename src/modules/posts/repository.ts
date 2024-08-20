import {collection, getDocs, orderBy, query, where, limit} from "firebase/firestore";
import {db} from "../../config/firebaseConfig.ts";
import {IPost} from "./interface.ts";

export const getPosts = async (topics: string[], startDate?: Date, endDate?: Date, limitNumber?: number) => {
    const postsRef = collection(db, 'posts');
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

    if (limitNumber) {
        conditions.push(limit(limitNumber));
    }

    const q = query(postsRef, ...conditions, orderBy('title', 'asc'));

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