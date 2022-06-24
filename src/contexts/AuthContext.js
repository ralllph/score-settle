import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase"

//recieve the three states with need from firebase to be able to pass them as value
// signup sign in and to know if user is signed in which is onAuth state change

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth"

const authContextObject = createContext()

const AuthContext = (props) => {
    //state for currently signed in user information
    // it is an object cuz the request recieved is an object from the call 
    const [user, setUser] = useState({})

    // signup user function
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // logout function
    const logout = () => {
        return signOut(auth)
    }

    //login fiunction

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // signed up users are automatically logged in 
    // Get the currently signed in user details with onAuth state changed
    useEffect(
        () => {
            // gives a callback function that returns the logged in user value
            const getUserBody = onAuthStateChanged(auth, (userDetails, logout, login) => {
                setUser(userDetails)
            })

            return () => {
                getUserBody()
            }

        }, [])
    return (
        <authContextObject.Provider value={{ createUser, user, logout, login }} >
            {props.children}
        </authContextObject.Provider>
    )
}

export { AuthContext, authContextObject }