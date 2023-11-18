'use client'

import { useState } from "react"
import { auth } from '../../firebaseClient'
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation"
import SignInForm from "@/components/auth/SignInForm"

export default function SignIn() {

    //hooks
    const [signInData, setSignInData] = useState({
        email: "", 
        password: "",
    })

    const router = useRouter()

    //handlers
    function handleChange(event) {
        setSignInData(prev => {
            return {
            ...prev,
            [event.target.name]: event.target.value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        signInWithEmailAndPassword(auth, signInData.email, signInData.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                fetch('api/getUserRole', {
                    method: 'GET',
                    headers: {
                        uid: user.uid
                    }
                })
                .then(res => res.json())
                .then(data => router.push(`/${data.data.role}`))
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
                // ..
            });
    }

    // sign-in component
    const signInForm = (
        <SignInForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            signInData={signInData}
        />
    )
    
    return (
        <div>
            {signInForm}
        </div>
    )
}
