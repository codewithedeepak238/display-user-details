import { createContext, useContext, useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const firebaseConfig = {
    apiKey: "AIzaSyAUOIVh9sz1a4tqxDDQCKEPyGD46bEAEbg",
    authDomain: "food-delivery-app-d6b67.firebaseapp.com",
    databaseURL: "https://food-delivery-app-d6b67-default-rtdb.firebaseio.com",
    projectId: "food-delivery-app-d6b67",
    storageBucket: "food-delivery-app-d6b67.appspot.com",
    messagingSenderId: "320817027478",
    appId: "1:320817027478:web:542c9a77fd9f62abfaa5b7"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Authorization
const auth = getAuth();

const fireContext = createContext();

export const FireContextProvider = ({ children }) => {
    const Navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    
    const createUserwithEmail = async (username, email, password) => {
        setLoading(true);
        try{
            const userData = await createUserWithEmailAndPassword(auth, email, password);
            const result = await userData.user;
            console.log(result);
            const user = {
                uid : result.uid,
                username : username,
                email: email,
                role: "user"
            }
            const docRef = await addDoc(collection(db, "users"), user);
            console.log(docRef);
            toast.success("Signup Successfull!!", {theme: "dark"})
            setLoading(false);
            Navigate("/");
        }catch(err){
            toast.warn("Email Already Exist!!", {theme: "dark"});
            setLoading(false);
        }
    }
    const loginUserwithEmail = async (email, password) => {
        setLoading(true);
        try{
            const userData = await signInWithEmailAndPassword(auth, email, password);
            const result = await userData.user;
            console.log(result);
            toast.success("Login Successfull!!", {theme: "dark"})
            setLoading(false);
            Navigate("/");
        }catch(err){
            toast.warn("Invalid email or password!!", {theme: "dark"});
            setLoading(false);
        }
    }
    const value = {
        createUserwithEmail,
        loginUserwithEmail,
        loading
    }
    return (
        <fireContext.Provider value={value}>
            {children}
        </fireContext.Provider>
    )
}

export const useFirebase = () => useContext(fireContext);