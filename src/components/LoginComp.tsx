import React, { useState } from 'react'
import logo from '../assets/images/logo.svg'
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import ggle from '../assets/images/ggle.svg'

function LoginComp() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className=''>
            <div className='w-full flex flex-col h-screen items-center justify-center'>
                <div><img src={logo} className='h-10 w-[200px] mb-6' alt="" /></div>
                <div className='bg-[#0E0E0F] border-[1px] border-[#1e1e1e49] w-[425px] rounded-2xl px-4 py-10'>
                    <div>
                        <div className='text-white text-center text-xl font-bold mb-5 font-sf-bold'>Login your account</div>
                        <form>
                            <div className='mb-5'>
                                <label htmlFor="email" className='text-white font-sf-reg text-xs'>Email</label>
                                <input type="text" className='w-full mt-2 h-10 bg-transparent border-[1px] border-white px-2 text-white outline-none rounded-md font-sf-reg text-sm' placeholder='Enter your email' />
                            </div>

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

                            {/* button here */}
                            <div className='w-full h-10 bg-[#636366] text-[#AEAEB2] font-sf-med text-sm rounded-md flex flex-row items-center justify-center'>
                                Continue
                            </div>
                        </form>

                        <div className='my-7 text-center text-[#ffffffa0] text-sm sf-pro-med'>Or</div>

                        {/* login with google button */}
                        <div className='w-full h-10 bg-white flex flex-row justify-around items-center rounded-md'>
                            <div><img src={ggle} alt="" /></div>
                            <div className='font-sf-med text-sm text-black'>Continue with Google</div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default LoginComp