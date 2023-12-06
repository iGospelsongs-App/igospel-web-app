import React, { useState } from 'react'
import logo from '../assets/images/logo.svg'
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import ggle from '../assets/images/ggle.svg'
import Footer from './Footer';
import { Link } from 'react-router-dom'

export interface SignupType {
    cover_image: any;
    image: any;
    fullname: string;
    email: string;
    username: string;
    password: string;
    agreement: boolean;
    newsletter: boolean;
}

function SignupComp() {
    const [showPassword, setShowPassword] = useState(false);
    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('')
    const [agreementChecked, setAgreementChecked] = useState(false);
    const [newsCheck, setNewsCheck] = useState(false);


    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const URL = 'https://igospelsongs.onrender.com/user/signup/';

    const handleUsername = (e: any) => {
        setErrorMessage('')
        setUsername(e.target.value)
    }

    const handleFullname = (e: any) => {
        setErrorMessage('')
        setFullname(e.target.value)
    }

    const handleEmail = (e: any) => {
        setErrorMessage('')
        setEmail(e.target.value)
    }

    const handlePassword = (e: any) => {
        setErrorMessage('')
        setPassword(e.target.value)
    }

    const formValue = {
        cover_image: null,
        image: null,
        full_name: fullname,
        email,
        username,
        password,
        agreement: true,
        newsletter: newsCheck,
    }



    return (
        <div className='mt-[100px]'>
            <div className=''>
                <div className='w-full flex flex-col items-center h-full mb-10 justify-center'>
                    <div><img src={logo} className='h-10 w-[200px] mb-6' alt="" /></div>
                    <div className='bg-[#0E0E0F] border-[1px] border-[#1e1e1e49] w-[425px] rounded-2xl px-4 py-10'>
                        <div>
                            <div className='text-white text-center text-xl font-bold font-sf-bold'>Create an account</div>

                            <form>
                                {/* login with google button */}
                                <div className='w-full h-10 mt-10 bg-white flex flex-row justify-around items-center rounded-md'>
                                    <div><img src={ggle} alt="" /></div>
                                    <div className='font-sf-med text-sm text-black'>Continue with Google</div>
                                    <div></div>
                                </div>

                                <div className='my-5 text-center text-[#ffffffa0] text-sm sf-pro-med'>Or</div>

                                {/* fullname input  */}
                                <div className='mb-5'>
                                    <label htmlFor="fullname" className='text-white font-sf-reg text-xs'>Full Name</label>
                                    <input type="text" className='w-full mt-2 h-10 bg-transparent border-[1px] border-white px-2 text-white outline-none rounded-md font-sf-reg text-sm' placeholder='Enter your email' />
                                </div>

                                {/* username input  */}
                                <div className='mb-5'>
                                    <label htmlFor="username" className='text-white font-sf-reg text-xs'>Username</label>
                                    <input type="text" className='w-full mt-2 h-10 bg-transparent border-[1px] border-white px-2 text-white outline-none rounded-md font-sf-reg text-sm' placeholder='Enter your email' />
                                </div>

                                {/* email input  */}
                                <div className='mb-5'>
                                    <label htmlFor="email" className='text-white font-sf-reg text-xs'>Email</label>
                                    <input type="text" className='w-full mt-2 h-10 bg-transparent border-[1px] border-white px-2 text-white outline-none rounded-md font-sf-reg text-sm' placeholder='Enter your email' />
                                </div>

                                {/* password input  */}
                                <div className='mb-7'>
                                    <label htmlFor="email" className='text-white font-sf-reg text-xs'>Password</label>
                                    <div className='border-[1px] border-white bg-transparent pl-2 mt-2 flex flex-row items-center rounded-md justify-between'>
                                        <input type={showPassword ? 'text' : 'password'} placeholder='password' className='w-full h-10 bg-transparent flex-1 outline-0 text-white  font-sf-reg text-sm' style={{ borderWidth: '0', outline: 'none' }} />
                                        <div className='px-2' onClick={() => setShowPassword(!showPassword)}>
                                            {
                                                showPassword ? <FaRegEye style={{ color: 'white' }} className='cursor-pointer' /> : <FaRegEyeSlash style={{ color: 'white' }} className='cursor-pointer' />
                                            }

                                        </div>
                                    </div>
                                </div>

                                {/* agreement checkbox */}
                                <div className="mb-5 flex flex-row items-start gap-2">
                                    <div>
                                        <input type="checkbox" name="agreement" id="agree" className='h-4 w-4' />
                                    </div>
                                    <div className='text-white font-sf-reg text-xs'>
                                        I acknowledge that i have read and agree to <span className='text-[#FF375F]'>iGospel’s Agreement</span>
                                    </div>
                                </div>

                                {/* newsletter checkbox */}
                                <div className="mb-5 flex flex-row items-start gap-2">
                                    <div>
                                        <input type="checkbox" name="agreement" id="agree" className='h-4 w-4' />
                                    </div>
                                    <div className='text-white font-sf-reg text-xs'>
                                        Sign up  for the latest updates, news, and more about your preferred artists. Be among the first to receive exclusive content.
                                    </div>
                                </div>

                                {/* button here */}
                                <div className='w-full h-10 bg-[#636366] text-[#AEAEB2] font-sf-med text-sm rounded-md flex flex-row items-center justify-center'>
                                    Continue
                                </div>

                                <div className='mt-1'>
                                    <Link to='/login' className='text-white font-sf-reg text-xs'>Don't have an account ? <span className='text-[#FF375F]'>Login</span></Link>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>

                <div className='w-full'>
                    <Footer />
                </div>
            </div>
        </div>

    );
}

export default SignupComp