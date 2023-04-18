import React, { useState } from 'react'
import './Auth.css'
import icon from '../../assets/logo.png'
const Auth = () => {

    const [isSignup, setSignUp] = useState(false)

    const handleSwitch = () => {
        setSignUp(!isSignup)
    }
    return (
        <section class="auth-section">
            {isSignup &&
                < div className='auth-container-2'>
                    <h1>Join the college community</h1>
                    <p> Ask Questions</p>
                    <p> Grow Connections</p>
                    <p> Solve your queries</p>
                </div>
            }
            <div class="auth-container">
                {!isSignup && <img src={icon} alt='stack overflow' className='login-logo' />}
                <form>
                    {
                        isSignup && (
                            <label htmlFor='name'>
                                <h4>Display Name</h4>
                                <input type="text" id='name' name='name' className='input-auth' />
                            </label>
                        )
                    }
                    <label htmlFor='email'>
                        <h4>Email</h4>
                        <input type='email' name='name' id='email' className='input-auth' />
                    </label>
                    <label htmlFor='password'>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h4>Password</h4>
                            {!isSignup && <p style={{ color: "#007ac6", fontSize: "13px" }}>forgot Password?</p>}
                        </div>

                        <input type='password' name='name' id='password' className='input-auth' />

                        {isSignup && <p style={{ color: '#666767', fontSize: "13px" }}>Passwords must contain at least eight characters <br /> including at least 1 letter and symbol </p>}
                    </label>

                    <button type='submit' className='auth-btn'>{isSignup ? 'Sign up' : 'Log in'}
                    </button>
                </form>
                <p>
                    {isSignup ? 'already have an account' : "Don't have an account?"}
                    <button type='button' className="handle-switch-btn" onClick={handleSwitch}>{isSignup ? "Log in" : "Sign up"}</button>
                </p>
            </div>
        </section >
    )
}

export default Auth;