import React, { useState } from 'react'
import AuthPageLayout from '../../../components/AuthPageLayout'
import Footer from '../../../components/Footer'
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.svg'
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

function PasswordReset() {
    const [email, setEmail] = useState('');
    const [errorMessages, setErrorMessages] = useState('');

    return (
        <AuthPageLayout>
            <div className="h-screen">
                <div className='h-full'>
                    <div className='flex flex-col items-center justify-between h-full'>
                        <div className='w-full flex flex-col items-center h-full justify-center'>
                            <div><img src={logo} className='h-10 w-[200px] mb-6' alt="" /></div>
                            <div className='bg-[#0E0E0F] border-[1px] border-[#1e1e1e49] w-[425px] rounded-2xl px-10 py-10'>
                                <div>
                                    <div className='text-white text-center text-xl font-bold mb-5 font-sf-bold'>Forgt Password</div>
                                    <form>
                                        <div className='mb-5'>
                                            <label htmlFor="email" className='text-white font-sf-reg text-xs'>Email</label>
                                            <input type="text" value={email} className='w-full mt-2 h-10 bg-transparent border-[1px] border-white px-2 text-white outline-none rounded-md font-sf-reg text-sm' placeholder='Enter your email' />
                                        </div>

                                        {/* button here */}
                                        <button type="submit" className='w-full h-10 bg-[#636366] text-[#AEAEB2] font-sf-med text-sm rounded-md flex flex-row items-center justify-center'>
                                            Continue
                                        </button>


                                    </form>
                                </div>
                            </div>

                            <div className='mt-5'>
                                <Link to='/auth/login' className='text-white font-sf-reg text-xs'>Remember your password ? <span className='text-[#FF375F]'>Login here</span></Link>
                            </div>
                        </div>

                        <div className='w-full'>
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        </AuthPageLayout>
    )
}

export default PasswordReset