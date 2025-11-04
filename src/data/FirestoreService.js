// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";
import viajes from "./data";

const firebaseConfig = {
  apiKey: "AIzaSyBbxNNI_uJzU430Vtin4F9GnEUwVeApal0",
  authDomain: "react-martes88080.firebaseapp.com",
  projectId: "react-martes88080",
  storageBucket: "react-martes88080.firebasestorage.app",
  messagingSenderId: "910028535531",
  appId: "1:910028535531:web:a161eaa23fa0af663630ae"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

async function getData(){
  const productsRef = collection(db, "products")
  const productsSnapshot = await getDocs(productsRef)
  const docs = productsSnapshot.docs;  
  const dataDocs = docs.map( item => {
     return { ...item.data(), id: item.id }
  })
  return dataDocs;
}

//getProductById
export async function getProductById(idParam){
 const docRef = doc(db, "products", idParam)
 const docSnapshot = await getDoc(docRef);
 const docData = docSnapshot.data()
 const idDoc = docSnapshot.id
 return { ...docData, id: idDoc };
}

//getProductsByCategory
export async function getProductsByCategory(categParam){
  const productsRef = collection(db, "products")

  const q = query(productsRef, where("category", "==", categParam))

  const productsSnapshot = await getDocs(q)
  const docs = productsSnapshot.docs;  
  const dataDocs = docs.map( item => {
     return { ...item.data(), id: item.id }
  })
  return dataDocs;
}

/**
 * Esta función crea una orden en un documento en Firestore.
 * @param orderData -  { buyer, cart, total, date }
 * @returns newDoc - { id del nuevo documento }
 */
export async function createBuyOrder(orderData){
  const ordersRef = collection(db, "orders")
  const newDoc = await addDoc(ordersRef, orderData)
  return newDoc;
}

export async function exportProducts(){
  const productsRef = collection(db, "products")
  for(let item of viajes){
    delete item.id;
    const newDoc = await addDoc(productsRef, item)
    console.log("doc creado", newDoc.id)
  }  
}


export default getData;