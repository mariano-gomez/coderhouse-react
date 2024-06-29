// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { productos } from "../mocks/products.json";
import { addDoc, collection, getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkA821gI0f678qAIJK7QwLMEhKJF-eqaE",
  authDomain: "coderhouse-store-react.firebaseapp.com",
  projectId: "coderhouse-store-react",
  storageBucket: "coderhouse-store-react.appspot.com",
  messagingSenderId: "986939896359",
  appId: "1:986939896359:web:9e5089985749f9e5529402"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// productos.forEach((prod) => {
//     addDoc(collection(db, 'products'), prod)
//         .then((elem) => {
//             console.log(`se agrego el producto id ${elem.id} ${elem.titulo}`)
//         })
// })