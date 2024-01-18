import styles from '../../app/signup/styles.module.css'

export default function SignUpForm({handleChange, handleSubmit, signUpData, errorMessages}) {
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
                        className={styles.textField}
                    />
                    {errorMessages.email && <p>{errorMessages.email}</p>}
                </div>
                <div>
                    <input 
                        type="password" 
                        onChange={handleChange}
                        name="password"
                        value={signUpData.password}
                        placeholder='Password'
                        autoComplete="off"
                        className={styles.textField}
                    />
                    {errorMessages.password && <p>{errorMessages.password}</p>}
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
                {errorMessages.role && <p>{errorMessages.role}</p>}
                <button 
                    type="submit" 
                >
                    Create account
                </button>
                {errorMessages.other && <p>{errorMessages.other}</p>}
            </form>
        </div>
    )
}