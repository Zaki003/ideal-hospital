import { useState } from "react";
import { GoogleAuthProvider, signInWithPopup, getAuth, signOut } from 'firebase/auth';
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

    const googleLogout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
                setIsLoading(false);
            })
    }

    return {
        user,
        isLoading,
        handleGoogleSignIn,
        googleLogout
    }
}

export default useFirebase;