import {collection, getDocs, query} from "firebase/firestore";
import {db} from "../../config/firebaseConfig.ts";
import {IJobPosting} from "./interface.ts";


export const getJobPostings = async () => {
    const jobPostingsRef = collection(db, 'jobPostings');
    const q = query(jobPostingsRef);
    const jobPostingSnapshots = await getDocs(q);
    return jobPostingSnapshots.docs.map(doc => {
        const {postDate,...data} = doc.data();
        return {
            id: doc.id,
            postDate: postDate.toDate(),
            ...data
        } as IJobPosting
    });
}