'use client'

export default function SignInForm({handleChange, handleSubmit, signInData}) {
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                        type="email" 
                        name="email"
                        onChange={handleChange}
                        value={signInData.email}
                        placeholder='Email'
                    />
                </div>
                <div>
                    <input 
                        type="password" 
                        name="password"
                        onChange={handleChange}
                        value={signInData.password}
                        placeholder='Password'
                    />
                </div>
                <button 
                    type="submit" 
                >
                    Login
                </button>
            </form>
        </div>
    )
    
}