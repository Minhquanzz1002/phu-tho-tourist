import {collection, getDocs, query} from "firebase/firestore";
import {db} from "../../config/firebaseConfig";
import {IDocumentCategory} from "./interface";

export const getDocumentCategories = async () => {
    const documentCategoriesRef = collection(db, 'documentCategory');
    const q = query(documentCategoriesRef);
    const documentCategorySnapshots = await getDocs(q);
    return documentCategorySnapshots.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }) as IDocumentCategory);
}