import React, { useState} from 'react'
import axios from 'axios'
import './index.css'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';


const SignUp: React.FC = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(email === '' || password === '' || username === '') {
            Swal.fire({
                icon: 'error',
                title: 'Empty Fields',
                text: 'Please fill in all the fields'
            })
            return
        }else if(password.length < 6) {
            Swal.fire({
                icon: 'error',
                title: 'Password too short',
                text: 'Password must be at least 6 characters long'
            })
            return
        }else if(username.length < 3) {
            Swal.fire({
                icon: 'error',
                title: 'Username too short',
                text: 'Username must be at least 3 characters long'
            })
            return
        }else if(!email.includes('@') || !email.includes('.')) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Email',
                text: 'Please enter a valid email'
            })
            return
        }

        try {
            setLoading(true)
            const res = await axios('https://fnmoney-backend.vercel.app/api/auth/register', { method: 'POST', data: { email, password, username } })
            if (res.status === 201) {
                Swal.fire({
                    icon: "success",
                    title: "Valid Code",
                    text: "User registered successfully!"
                });
                console.log(res.data)
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('email', email)
                localStorage.setItem('username', username)
                localStorage.setItem('userId', res.data.userId)
                setLoading(false)
                navigate('/home');
            } else if (res.status === 400) {
                Swal.fire({
                    icon: "error",
                    title: "Invalid verification code",
                    text: "Please enter a valid verification code!"
                });
                setLoading(false)
            } else if (res.status === 500) {
                Swal.fire({
                    icon: "error",
                    title: "Server Error",
                    text: "Please try again later!"
                });
                setLoading(false)
            }
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <>
            <form onSubmit={handleSignUp} className="sign-up-form">
                <div className={`flex flex-col items-center w-[100%] sign-up-details `} >
                    <h2 className="title">Sign up</h2>
                    <div className="input-field">
                        <i className="fa-solid fa-circle-user" />
                        <input type="text" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="input-field">
                        <i className="fas fa-envelope" />
                        <input type="text" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="input-field">
                        <i className="fas fa-lock" />
                        <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>
                <input type="submit" value={loading ? 'Submitting...' : 'Submit'} id='register_btn' className="btn" />
                <p className="account-text text-center text-white underline " onClick={() => document.querySelector(".container")?.classList.remove("sign-up-mode")} >
                    Already have an account?{" "}
                </p>
            </form>
        </>
    )
}

export default SignUp