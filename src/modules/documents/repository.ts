import {collection, getDocs, orderBy, query, where} from "firebase/firestore";
import {db} from "../../config/firebaseConfig.ts";

export const getDocuments = async (startDate?: Date, endDate?: Date) => {
    const documentsRef = collection(db, 'documents');
    const conditions = [];
    if (startDate) {
        conditions.push(where('createdAt', '>=', startDate));
    }

    if (endDate) {
        conditions.push(where('createdAt', '<=', endDate));
    }

    const q = query(documentsRef, ...conditions, orderBy('createdAt', 'desc'));
    const documentSnapshots = await getDocs(q);
    return documentSnapshots.docs.map(doc => {
        const data = doc.data();
        const createdAt = doc.data().createdAt.toDate();
        return {
            id: doc.id,
            name: data.name,
            createdAt
        }
    });
}