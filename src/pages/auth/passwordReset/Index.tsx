import React, { useState } from 'react'
import AuthPageLayout from '../../../components/AuthPageLayout'
import Footer from '../../../components/Footer'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../assets/images/logo.svg'
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import axios from 'axios';
import { Puff } from 'react-loader-spinner';
import ErrorTextComp from '../../../components/ErrorTextComp';

function PasswordReset() {
    const [email, setEmail] = useState('');
    const [errorMessages, setErrorMessages] = useState('');
    const [emailError, setEmailError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const URL = "https://igospelsongs.onrender.com/user/reset_password/";
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const fieldValidation = () => {
        let isEmailValid = true;

        if (email.trim() === '') {
            setEmailError('Email is required')
            isEmailValid = false;
        } else if (!emailPattern.test(email)) {
            setEmailError('Invalid Email')
            isEmailValid = false;
        } else {
            setEmailError('')
        }

        const isValid = isEmailValid;

        return isValid;
    }

    const handleEmail = (e: any) => {
        setEmail(e.target.value);
    }

    const handlePostRequest = async () => {
        try {
            const response = await axios.post(URL, { email });
            setLoading(false);
            setEmail('');
            navigate('/auth/reset_password/verify');
        } catch (error: any) {
            setLoading(false);
            setErrorMessages(error.response.data.error);
            console.log(error)
        }
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (fieldValidation()) {
            setErrorMessages('')
            setLoading(true);
            handlePostRequest();
        }
    }

    return (
        <AuthPageLayout>
            <div className="h-screen">
                <div className='h-full'>
                    <div className='flex flex-col items-center justify-between h-full'>
                        <div className='w-full flex flex-col items-center h-full justify-center'>
                            <div><img src={logo} className='h-10 w-[200px] mb-6' alt="" /></div>
                            <div className='bg-[#0E0E0F] border-[1px] border-[#1e1e1e49] w-[425px] rounded-2xl px-10 py-10'>
                                <div>
                                    <div className='text-white text-center text-xl font-bold mb-5 font-sf-bold'>Forgot Password</div>
                                    <form>
                                        <div className='mb-5'>
                                            <label htmlFor="email" className='text-white font-sf-reg text-xs'>Email</label>
                                            <input type="text" value={email} onChange={handleEmail} className='w-full mt-2 h-10 bg-transparent border-[1px] border-white px-2 text-white outline-none rounded-md font-sf-reg text-sm' placeholder='Enter your email' />
                                            <ErrorTextComp errorCondition={errorMessages} />
                                            <ErrorTextComp errorCondition={emailError} />
                                        </div>

                                        {/* button here */}
                                        <button onClick={handleSubmit} type="submit" className='w-full h-10 bg-[#FF375F] text-white font-sf-med text-sm rounded-md flex flex-row items-center justify-center'>
                                            {
                                                loading ? (
                                                    <div className='flex items-center justify-center'>
                                                        <Puff
                                                            height="24"
                                                            width="24"
                                                            radius={1}
                                                            color="white"
                                                            ariaLabel="puff-loading"
                                                            wrapperStyle={{}}
                                                            wrapperClass=""
                                                            visible={true}
                                                        />
                                                    </div>
                                                ) : 'Continue'
                                            }
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