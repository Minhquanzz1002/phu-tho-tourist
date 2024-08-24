import {collection, getDocs, query, where} from "firebase/firestore";
import {db} from "../../config/firebaseConfig.ts";
import {IJobPosting} from "./interface.ts";


export const getJobPostings = async (fields: string[], employmentTypes: string[], locations: string[]) => {
    const jobPostingsRef = collection(db, 'jobPostings');
    const conditions = [];
    if  (fields.length > 0) {
        conditions.push(where('field', 'in', fields));
    }

    if  (employmentTypes.length > 0) {
        conditions.push(where('employmentType', 'in', employmentTypes));
    }

    if  (locations.length > 0) {
        conditions.push(where('location', 'in', locations));
    }

    const q = query(jobPostingsRef, ...conditions);
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