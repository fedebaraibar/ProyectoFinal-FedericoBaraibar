import { addDoc, collection, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore"
import { db } from "./firebase"

const prodcutRef = collection(db, "products")
const orderRef = collection(db, "orders")

export const getProducts = async () => {
    const snapshot = await getDocs(prodcutRef)
    if (!snapshot.empty) {
        const products = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        return products
    }
    throw new Error("no se pudo acceder a los datos")
}

export const getProductsByCategory = async (category) => {
    const q = query(prodcutRef, where("category", "==", category))
    const snapshot = await getDocs(q)
    if (!snapshot.empty) {
        const products = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        return products
    }
    throw new Error("no se pudo acceder a los datos")
}


export const getProductById = async (productId) => {
    console.log(productId)
    const snapshot = await getDoc(doc(db, "products", productId))
    console.log(snapshot)
    if (snapshot.exists()) {
        return { id: snapshot.id, ...snapshot.data() }
    }
    throw new Error("Producto no encontrado")
}

export const updateProductById = async (product) => {
    const { id } = product
    delete product.id
    await setDoc(doc(db, "products", id), product)
}

export const createProdcut = async (prodcut) => {
    console.log(prodcut)
    const result = await addDoc(prodcutRef, prodcut)
    console.log(result)
    return result
}

export const createOrder = async (data) => {
    const { id } = await addDoc(orderRef, data)
    return id
}