import {collection, getDocs, orderBy, query} from "firebase/firestore";
import {db} from "../../config/firebaseConfig.ts";

export const getDocuments = async () =>  {
    const documentsRef = collection(db, 'documents');
    const q = query(documentsRef ,orderBy('createdAt', 'desc'));
    const documentSnapshots = await getDocs(q);
    return  documentSnapshots.docs.map(doc => {
        const data = doc.data();
        const createdAt = doc.data().createdAt.toDate();
        return {
            id: doc.id,
            name: data.name,
            createdAt
        }
    });
}