import React, { useState } from 'react'
import axios from 'axios'
import './index.css'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'



const SignIn: React.FC = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        if(email === '' || password === '') {
            Swal.fire({
                icon: 'error',
                title: 'Empty Fields',
                text: 'Please fill in all the fields'
            })
            return
        }
        try {
            const res = await axios('https://fnmoney-backend.vercel.app/api/auth/login', { method: 'POST', data: { email, password } })
            if (res.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful',
                    text: res.data.message
                })
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('email', res.data.email)
                localStorage.setItem('username', res.data.username)
                localStorage.setItem('userId', res.data.userId)
                navigate('/home')
            } else if (res.status === 400) {
                Swal.fire({
                    icon: 'error',
                    title: 'Invalid Credentials',
                    text: res.data.message
                })
            } else if (res.status === 500) {
                Swal.fire({
                    icon: 'error',
                    title: 'Server Error',
                    text: 'Please try again later!'
                })
            }
            console.log(res)
            setLoading(false)
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Server Error',
                text: 'Please try again later!'
            })
            console.log(error)
        }
    }
    return (
        <>
            <form onSubmit={handleLogin} className="sign-in-form">
                <h2 className="title">Sign in</h2>
                <div className="input-field">
                    <i className="fas fa-user" />
                    <input type="text" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}  />
                </div>
                <div className="input-field">
                    <i className="fas fa-lock" />
                    <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <input type="submit" defaultValue="Login" value={loading ? 'Verfiying details...' : 'Login' } id='login_btn' className="btn"  />
                <div className='w-[100%] h-[20%] underline mt-[5%] flex justify-center items-center text-center text-white lg:w-0 lg:h-0 lg:hidden ' >
                    <p  onClick={() => document.querySelector(".container")?.classList.add("sign-up-mode")} >Don't have an account ? </p>
                </div>
            </form>
        </>
    )
}




export default SignIn