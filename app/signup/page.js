'use client'
import { useState } from "react"
import { auth } from '../../firebaseClient'
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
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
    const [userExists, setUserExists] = useState(false)
    const [errorMessages, setErrorMessages] = useState({
        email: "",
        password: "",
        role: ""
    });
    
    // handler
    function handleChange(event) {
        setSignUpData(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }
    
    function validatePassword(password) {
        if (password.length < 8) {
            return "Password must be at least 8 characters long.";
        }
        if (!/\d/.test(password)) {
            return "Password must include at least one number.";
        }
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            return "Password must include at least one special character.";
        }
        if (!/[A-Z]/.test(password)) {
            return "Password must include at least one uppercase letter.";
        }
        if (!/[a-z]/.test(password)) {
            return "Password must include at least one lowercase letter.";
        }
    
        return "";
    }

    // handler
    function handleSubmit(event) {
        event.preventDefault()

        // Resetting error messages
        setErrorMessages({ email: "", password: "", role: "", other: "" });

        // Check for empty fields and set error messages
        if (!signUpData.email) {
            setErrorMessages(prev => ({ ...prev, email: "Please fill up this field" }));
            return;
        }
        if (!signUpData.password) {
            setErrorMessages(prev => ({ ...prev, password: "Please fill up this field" }));
            return;
        }
        if (!signUpData.role) {
            setErrorMessages(prev => ({ ...prev, role: "Please choose the role" }));
            return;
        }
        
        // Validate password
        const passwordError = validatePassword(signUpData.password);
        if (passwordError) {
            setErrorMessages(prev => ({ ...prev, password: passwordError }));
            return;
        }

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
                console.log(errorMessage)
                if (errorMessage === 'Firebase: Error (auth/email-already-in-use).') {
                    setErrorMessages(prev => ({ ...prev, email: 'This account exists already' }))
                } else {
                    setErrorMessages(prev => ({ ...prev, other: errorMessage }))
                }
                
            });
    }

    // google sign in
    function handleGoogle() {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        })
    }

    // google sign out
    function signOutGoogle() {
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }
    
    
    return(
        <div>
            <h1>Test auth</h1>
            <SignUpForm
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                signUpData={signUpData}
                userExists={userExists}
                errorMessages={errorMessages}
            />
            <button onClick={handleGoogle}>Sign In with Google</button>
            <button onClick={signOutGoogle}>Sign Out of Google</button>
        </div>
    )
}


