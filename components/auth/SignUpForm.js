'use client'

export default function SignUpForm({handleChange, handleSubmit, signUpData}) {
    return(
        <div>
            <form onSubmit={handleSubmit} autoComplete="off">
                <div>
                    <input 
                        type="email" 
                        aria-describedby="emailHelp"
                        onChange={handleChange}
                        name="email"
                        value={signUpData.email}
                        placeholder='Email'
                        autoComplete="off"
                    />
                </div>
                <div>
                    <input 
                        type="password" 
                        onChange={handleChange}
                        name="password"
                        value={signUpData.password}
                        placeholder='Password'
                        autoComplete="off"
                    />
                </div>
                <input
                    type="radio"
                    name="role"
                    value="hr"
                    onChange={handleChange}
                    required
                />
                <input
                    type="radio"
                    name="role"
                    value="candidate"
                    onChange={handleChange}
                />
                <button 
                    type="submit" 
                >
                    Create account
                </button>
            </form>
        </div>
    )
}