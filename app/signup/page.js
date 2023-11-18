'use client'

import { useState } from "react"
import { auth } from '../../firebaseClient'
import { createUserWithEmailAndPassword} from "firebase/auth";
import { useRouter } from "next/navigation"
import SignUpForm from "@/components/auth/SignUpForm"

export default function SignUp() {

    // states and hooks
    const router = useRouter()
    const [signUpData, setSignUpData] = useState({
        email: "", 
        password: "",
        role: ""
    })
    
    // handlers
    function handleChange(event) {
        setSignUpData(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        createUserWithEmailAndPassword(auth, signUpData.email, signUpData.password)
            .then(userCredential => {
                const user = userCredential.user
                fetch('api/setUserRole', {
                    method: "POST",
                    body: JSON.stringify({
                        uid: user.uid,
                        role: signUpData.role
                    })
                })
                .then(() => router.push(`/${signUpData.role}`))
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage + ': ' + errorCode)
            });
    }
    
    return(
        <div>
            <h1>Test auth</h1>
            <SignUpForm
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                signUpData={signUpData}
            />
        </div>
    )
}
