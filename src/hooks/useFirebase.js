import { useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup, getAuth, signOut, onAuthStateChanged, createUserWithEmailAndPassword } from 'firebase/auth';
import initializeAuth from "../Pages/Login/Firebase/firebase.init";

initializeAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const handleGoogleSignIn = () => {
        const googleProvider = new GoogleAuthProvider();
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const handleRegister = (name, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                console.log(result.user);
                result.user.displayName = name;
                setIsLoading(false);
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                // const uid = user.uid;
                // ...
            } else {
                setUser({});
            }
        });
    }, [auth]);

    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
                setIsLoading(false);
            })
    }

    return {
        user,
        setUser,
        isLoading,
        setIsLoading,
        handleGoogleSignIn,
        handleRegister,
        logout
    }
}

export default useFirebase;