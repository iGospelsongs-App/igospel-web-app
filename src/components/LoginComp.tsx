import React, { useState, useContext, useEffect } from 'react'
import logo from '../assets/images/logo.svg'
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import ggle from '../assets/images/ggle.svg'
import Footer from './Footer';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { AuthContext } from '../context/authContext';
import { googleLogout, useGoogleLogin, GoogleLogin } from '@react-oauth/google';
import { Puff } from 'react-loader-spinner'
import ErrorTextComp from './ErrorTextComp';

function LoginComp() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState<string>('')
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState<string>('')
    const authCtx = useContext(AuthContext);
    const [errorMessages, setErrorMessages] = useState('')
    const navigate = useNavigate();
    const [user, setUser] = useState<any>([]);
    const [profile, setProfile] = useState<any>([]);
    const [loading, setLoading] = useState(false)

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const fieldsValidation = () => {
        let isEmailValid = true;
        let isPasswordValid = true;

        if (email.trim() === '') {
            setEmailError('Email is required')
            isEmailValid = false;
        } else if (!emailPattern.test(email)) {
            setEmailError('Invalid Email')
            isEmailValid = false;
        } else {
            setEmailError('')
        }

        if (password.trim() === '') {
            setPasswordError('Password is required')
            isPasswordValid = false;
        } else if (password.length < 6) {
            setPasswordError('Password must be more than 6 char')
            isPasswordValid = false;
        } else {
            setPasswordError('')
        }

        const isValid = isEmailValid && isPasswordValid;

        return isValid;
    }


    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {
            setUser(codeResponse)
            authCtx.authenticate(codeResponse.access_token);
            navigate('/');
            if (codeResponse) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        setProfile(res.data);
                    })
                    .catch((err) => console.log('ERROR IS', err));
            }
            console.log(codeResponse.access_token)
        },
        onError: (error) => console.log('Login Failed:', error)
    });

    const URL = "https://igospelsongs.onrender.com/user/signin/";

    const handleEmail = (e: any) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e: any) => {
        setPassword(e.target.value)
    }

    const formValues = {
        email,
        password
    };

    const handleLogin = async () => {
        try {
            const response = await axios.post(URL, formValues);
            authCtx.authenticate(response.data.token);
            setLoading(false)
            setEmail('');
            setPassword('');
            navigate('/')
            console.log(response)
        } catch (error: any) {
            setLoading(false)
            console.log(error.response.data.Error[0]);
            setErrorMessages(error.response.data.Error[0])
        }
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (fieldsValidation()) {
            setErrorMessages('');
            setLoading(true);
            handleLogin();
        }
    }

    return (
        <div className='mt-[100px]'>
            <div className=''>
                <div className='w-full flex flex-col items-center h-full justify-center'>
                    <div><img src={logo} className='h-10 w-[200px] mb-6' alt="" /></div>
                    <div className='bg-[#0E0E0F] border-[1px] border-[#1e1e1e49] w-[425px] rounded-2xl px-4 py-10'>
                        <div>
                            <div className='text-white text-center text-xl font-bold mb-5 font-sf-bold'>Login your account</div>
                            <form>
                                <div className='mb-5'>
                                    <label htmlFor="email" className='text-white font-sf-reg text-xs'>Email</label>
                                    <input type="text" value={email} onChange={handleEmail} className='w-full mt-2 h-10 bg-transparent border-[1px] border-white px-2 text-white outline-none rounded-md font-sf-reg text-sm' placeholder='Enter your email' />
                                    <ErrorTextComp errorCondition={emailError} />
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
                                    <ErrorTextComp errorCondition={passwordError} />
                                    <ErrorTextComp errorCondition={errorMessages} />
                                </div>

                                {/* button here */}
                                <button onClick={handleSubmit} type="submit" className={`w-full h-10 bg-[#FF375F] text-white  font-sf-med text-sm rounded-md flex flex-row items-center justify-center`} disabled={loading}>
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
                            <div className='mt-1'>
                                <Link to='/auth/reset_password' className='text-[#FF375F] font-sf-reg text-xs'>Forgot Password ?</Link>
                            </div>

                            <div className='my-6 text-center text-[#ffffffa0] text-sm sf-pro-med'>Or</div>

                            {/* login with google button */}
                            <div onClick={() => login()} className='w-full h-10 bg-white flex flex-row justify-around items-center rounded-md'>
                                <div><img src={ggle} alt="" /></div>
                                <div className='font-sf-med text-sm text-black'>Continue with Google</div>
                                <div>

                                </div>
                            </div>
                            {/* <GoogleLogin onSuccess={responseMessage} onError={errorMessage} /> */}
                        </div>
                    </div>

                    <div className='mt-1'>
                        <Link to='/auth/signup' className='text-white font-sf-reg text-xs'>Don't have an account ? <span className='text-[#FF375F]'>Signup</span></Link>
                    </div>
                </div>

                <div className='w-full'>
                    <Footer />
                </div>
            </div>
        </div>

    );
}

export default LoginComp