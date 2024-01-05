import { createContext, useContext, useEffect, useState } from "react";
import auth from "./firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
  } from "firebase/auth";
const AuthContext=createContext();
export function useAuth(){
    return useContext(AuthContext);
}
export function AuthProvider({children}){
    const[currentUser,setCurrentUser]=    useState();
    const[loading,setLoading]=    useState(true);
    const[error,setError]=    useState("");

    function register(email,password){
        return createUserWithEmailAndPassword(auth,email,password);
    }
    function login(email,password){
        return signInWithEmailAndPassword(auth,email,password);
    }
    function logout(){
        return signOut(auth);
    }
    function updateUserProfile(user,profile){
        return updateProfile(user,profile);
    }


    useEffect(()=>{
        const unsubscribe=auth.onAuthStateChanged((user)=>{
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;
    },[]);
    const value={
        currentUser,error,setError,login,register,logout,updateUserProfile,
    }
    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
};


