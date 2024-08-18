import {collection, getDocs, query} from "firebase/firestore";
import {db} from "../../config/firebaseConfig.ts";
import {IPost} from "./interface.ts";

export const getPosts = async () => {
    const postsRef = collection(db, 'posts');
    const q = query(postsRef);
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