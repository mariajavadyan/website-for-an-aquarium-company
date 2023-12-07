import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";
import { getStorage, ref as storageRef } from "firebase/storage";
import { firebaseConfig, firebaseUrl, bucketUrl } from "@/content/firebase";

async function getProducts() {
    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app, firebaseUrl);
    const storage = getStorage(app, bucketUrl);
    const productsSnapshot = await get(ref(db, '/products'));
    let arrayProductsOfArrays = Object.entries(productsSnapshot.val());
    return await Promise.all(arrayProductsOfArrays.map(([key, value]) => {
        return { id: key, ...value, bucket: storageRef(storage).bucket};
    }));;
}

export default getProducts;
