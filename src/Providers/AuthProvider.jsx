import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
export const AuthContext = createContext(null);
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import useAxiosPublic from '../Hooks/useAxiosPublic';

//import { signInWithPopup } from 'firebase/auth';


const auth = getAuth(app);



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic();

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
      const logOut = () => {
            setLoading(true);
             return signOut(auth);
         }

         const updateUserProfile = (name, Photo) => {
            return updateProfile(auth.currentUser, {
                displayName: name, photoURL: Photo
            });
        }

        
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)

        // const logOut = () => {
        //     setLoading(true);
        //     return signOut(auth);
        // }

        

    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            if(currentUser){
               // assaing get token and store client
               const userInfo= {email: currentUser.email} 
               axiosPublic.post('/jwt',userInfo) 
               .then(res =>{
                if(res.data.token){
                    localStorage.setItem('access-token',res.data.token);
                    setLoading(false);
                }
               })
            }
            else{
                // TODO: remove token
                localStorage.removeItem('access-token');
                setLoading(false);
            }
           
        });
        return () => {
            return unsubscribe();
        }

    }, [axiosPublic])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleSignIn,
        updateUserProfile,
        updateProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;