import facebook from './assets/facebook.png'
import Googleimg from './assets/googleImg.png'
import linkedin from './assets/linkedin-logo.png'
import { useState } from 'react'

export default function CreateAccount() {

    const [formDetails , setformDetails] = useState({
        username: "",
        email: "",
        password: ""
    })
    const [nameError, setNameError] = useState()
    const [emailError, setemailError] = useState("")
    const [passwordError, setpasswordError] = useState("")

    
    
    function handlePrevent(event){
        event.preventDefault();

    }

    function handleChange(event){
        const value = event.target.value;
        const field = event.target.name
        setformDetails((prevFormDetails) =>({
            ...prevFormDetails,
            [field]: value,
        }))
        
        field === "username" && value.length < 6 ? setNameError("name should at contain 6 characters"): setNameError("");
        
        field ==="email" && value.length < 6 ? setemailError("email should atleast contain 6 characters"): setemailError("")
        
        field === "password" && value.length < 6 ? setpasswordError("password should atleast contain 6 characters") : setpasswordError("");
            
        
    }

    return (
        <div className='create-account-main'>
            <div className='create-account-container'>
                <div className='create-account'>
                    <span>Create Account</span>
                </div>
                <div className='social-sites'>
                    <img src={facebook} className='facebook-logo' />
                    <img src={Googleimg} className='google-logo' />
                    <img src={linkedin} className='linkedin-logo' />
                </div>
                <div className='message'>
                    <span>or use email for your registration</span>
                </div>
                <div>
                    <form className='form-main' onSubmit={handlePrevent}>
                        <input type='text' className='user-icon' onChange={handleChange} name='username' value={formDetails.username} placeholder='Name' />
                        <p className='nameError'>{nameError}</p>
                        <input type='email' className='email-icon' onChange={handleChange} name='email' value={formDetails.email} placeholder='Email' />
                        <p className='emailError'>{emailError}</p>
                        <input type='password' className='password-icon' onChange={handleChange} name='password' value={formDetails.password} placeholder='Password' />
                        <p className='passwordError'>{passwordError}</p>
                        <button type='submit'>Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}