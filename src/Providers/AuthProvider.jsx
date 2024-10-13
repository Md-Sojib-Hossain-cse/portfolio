import {  getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GoogleAuthProvider } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const auth = getAuth(app);

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    //other sign in methods 
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }


    //user observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                setLoading(false)
            }
            else{
                setLoading(false)
            }
        });
        return () => {
            return unsubscribe();
        }
    }, [auth, user])

    const authInfo = {
        user,
        loading,
        logOut,
        googleSignIn,
    }

    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;