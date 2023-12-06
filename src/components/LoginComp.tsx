import React, { useState, useContext } from 'react'
import logo from '../assets/images/logo.svg'
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import ggle from '../assets/images/ggle.svg'
import Footer from './Footer';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { AuthContext } from '../context/authContext';

function LoginComp() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const authCtx = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate();

    const URL = "https://igospelsongs.onrender.com/user/signin/";

    const handleEmail = (e: any) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e: any) => {
        setPassword(e.target.value)
    }

    // const handleFormData = (e: any) => {
    //     e.preventDefault();
    //     console.log(email, password)
    // }

    const formValues = {
        email,
        password
    };

    const handleLogin = async (e: any) => {
        e.preventDefault();
        try {
            const response = await axios.post(URL, formValues);
            authCtx.authenticate(response.data.token);
            setEmail('');
            setPassword('');
            navigate('/')
            console.log(response)
        } catch (error: any) {
            console.log(error.response.data.Error[0]);
            setErrorMessage(error.response.data.Error[0])
        }
    }

    return (
        <div className=''>
            <div className='relative'>
                <div className='w-full flex flex-col items-center  h-screen justify-center'>
                    <div><img src={logo} className='h-10 w-[200px] mb-6' alt="" /></div>
                    <div className='bg-[#0E0E0F] border-[1px] border-[#1e1e1e49] w-[425px] rounded-2xl px-4 py-10'>
                        <div>
                            <div className='text-white text-center text-xl font-bold mb-5 font-sf-bold'>Login your account</div>
                            <form>
                                <div className='mb-5'>
                                    <label htmlFor="email" className='text-white font-sf-reg text-xs'>Email</label>
                                    <input type="text" value={email} onChange={handleEmail} className='w-full mt-2 h-10 bg-transparent border-[1px] border-white px-2 text-white outline-none rounded-md font-sf-reg text-sm' placeholder='Enter your email' />
                                </div>

                                <div className='mb-7'>
                                    <label htmlFor="email" className='text-white font-sf-reg text-xs'>Password</label>
                                    <div className='border-[1px] border-white bg-transparent pl-2 mt-2 flex flex-row items-center rounded-md justify-between'>
                                        <input value={password} onChange={handlePassword} type={showPassword ? 'text' : 'password'} placeholder='password' className='w-full h-10 bg-transparent flex-1 outline-0 text-white  font-sf-reg text-sm' style={{ borderWidth: '0', outline: 'none' }} />
                                        <div className='px-2' onClick={() => setShowPassword(!showPassword)}>
                                            {
                                                showPassword ? <FaRegEye style={{ color: 'white' }} className='cursor-pointer' /> : <FaRegEyeSlash style={{ color: 'white' }} className='cursor-pointer' />
                                            }

                                        </div>
                                    </div>
                                </div>

                                {/* button here */}
                                <button onClick={handleLogin} type="submit" className='w-full h-10 bg-[#636366] text-[#AEAEB2] font-sf-med text-sm rounded-md flex flex-row items-center justify-center'>
                                    Continue
                                </button>

                                <div className='mt-1'>
                                    <Link to='/auth/signup' className='text-white font-sf-reg text-xs'>Don't have an account ? <span className='text-[#FF375F]'>Signup</span></Link>
                                </div>
                            </form>

                            <div className='my-6 text-center text-[#ffffffa0] text-sm sf-pro-med'>Or</div>

                            {/* login with google button */}
                            <div className='w-full h-10 bg-white flex flex-row justify-around items-center rounded-md'>
                                <div><img src={ggle} alt="" /></div>
                                <div className='font-sf-med text-sm text-black'>Continue with Google</div>
                                <div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='absolute bottom-0 w-full'>
                    <Footer />
                </div>
            </div>
        </div>

    );
}

export default LoginComp