import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import ggle from "../assets/images/ggle.svg";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ErrorTextComp from "./ErrorTextComp";
import { Puff } from "react-loader-spinner";

export interface SignupType {
  cover_image: any;
  profile_image: any;
  fullname: string;
  email: string;
  username: string;
  password: string;
  agreement: boolean;
  newsletter: boolean;
}

function SignupComp() {
  const [showPassword, setShowPassword] = useState(false);
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullnameError, setFullnameError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [agreementChecked, setAgreementChecked] = useState(false);
  const [newsCheck, setNewsCheck] = useState(false);
  const navigate = useNavigate();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const URL = "https://api.igospel.com.ng/dev/auth/signup/";

  const fieldsValidation = () => {
    let isEmailValid = true;
    let isPasswordValid = true;
    let isfullnameValid = true;
    let isUsernameValid = true;

    if (fullname.trim() === "") {
      setFullnameError("Full name is required");
      isfullnameValid = false;
    } else setFullnameError("");

    if (username.trim() === "") {
      setUsernameError("User name is required");
      isUsernameValid = false;
    } else setUsernameError("");

    if (email.trim() === "") {
      setEmailError("Email is required");
      isEmailValid = false;
    } else if (!emailPattern.test(email)) {
      setEmailError("Invalid Email");
      isEmailValid = false;
    } else {
      setEmailError("");
    }

    if (password.trim() === "") {
      setPasswordError("Password is required");
      isPasswordValid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be more than 6 char");
      isPasswordValid = false;
    } else {
      setPasswordError("");
    }

    const isValid = isEmailValid && isPasswordValid && isfullnameValid && isUsernameValid;

    return isValid;
  };

  const handleUsername = (e: any) => {
    setErrorMessage("");
    setUsername(e.target.value);
  };

  const handleFullname = (e: any) => {
    setErrorMessage("");
    setFullname(e.target.value);
  };

  const handleEmail = (e: any) => {
    setErrorMessage("");
    setEmail(e.target.value);
  };

  const handlePassword = (e: any) => {
    setErrorMessage("");
    setPassword(e.target.value);
  };

  const handleAgreementChecked = () => {
    setAgreementChecked(!agreementChecked);
  };

  const handleNewsCheck = () => {
    setNewsCheck(!newsCheck);
  };

  const formValue = {
    cover_image: null,
    profile_image: null,
    full_name: fullname,
    email,
    username,
    password,
    agreement: agreementChecked,
    newsletter: newsCheck,
  };

  const handlePostRequest = async () => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await axios.post(URL, formValue);
      setLoading(false);
      setUsername("");
      setFullname("");
      setEmail("");
      setPassword("");
      navigate("/auth/verify");
    } catch (error: any) {
      if (error.response.data.error === "Email Exist") setEmailError("Email already exist");
      setLoading(false);
      setErrorMessage(error.response.data.error);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (fieldsValidation() && agreementChecked) {
      setErrorMessage("");
      setLoading(true);
      handlePostRequest();
    }
  };

  return (
    <div className="mt-[100px]">
      <div className="">
        <div className="w-full flex flex-col items-center h-full mb-10 justify-center">
          <div>
            <img src={logo} className="h-10 w-[200px] mb-6" alt="" />
          </div>
          <div className="bg-[#0E0E0F] border-[1px] border-[#1e1e1e49] w-[425px] rounded-2xl px-4 py-10">
            <div>
              <div className="text-white text-center text-xl font-bold font-sf-bold">
                Create an account
              </div>

              <form>
                {/* login with google button */}
                <div className="w-full h-10 mt-10 bg-white flex flex-row justify-around items-center rounded-md">
                  <div>
                    <img src={ggle} alt="" />
                  </div>
                  <div className="font-sf-med text-sm text-black">Continue with Google</div>
                  <div></div>
                </div>

                <div className="my-5 text-center text-[#ffffffa0] text-sm sf-pro-med">Or</div>

                {/* fullname input  */}
                <div className="mb-5">
                  <label htmlFor="fullname" className="text-white font-sf-reg text-xs">
                    Full Name
                  </label>
                  <input
                    value={fullname}
                    onChange={handleFullname}
                    type="text"
                    className="w-full mt-2 h-10 bg-transparent border-[1px] border-white px-2 text-white outline-none rounded-md font-sf-reg text-sm"
                    placeholder="Enter your fullname"
                  />
                  <ErrorTextComp errorCondition={fullnameError} />
                </div>

                {/* username input  */}
                <div className="mb-5">
                  <label htmlFor="username" className="text-white font-sf-reg text-xs">
                    Username
                  </label>
                  <input
                    value={username}
                    onChange={handleUsername}
                    type="text"
                    className="w-full mt-2 h-10 bg-transparent border-[1px] border-white px-2 text-white outline-none rounded-md font-sf-reg text-sm"
                    placeholder="Enter username"
                  />
                  <ErrorTextComp errorCondition={usernameError} />
                </div>

                {/* email input  */}
                <div className="mb-5">
                  <label htmlFor="email" className="text-white font-sf-reg text-xs">
                    Email
                  </label>
                  <input
                    value={email}
                    onChange={handleEmail}
                    type="text"
                    className="w-full mt-2 h-10 bg-transparent border-[1px] border-white px-2 text-white outline-none rounded-md font-sf-reg text-sm"
                    placeholder="Enter your email"
                  />
                  <ErrorTextComp errorCondition={emailError} />
                </div>

                {/* password input  */}
                <div className="mb-7">
                  <label htmlFor="email" className="text-white font-sf-reg text-xs">
                    Password
                  </label>
                  <div className="border-[1px] border-white bg-transparent pl-2 mt-2 flex flex-row items-center rounded-md justify-between">
                    <input
                      value={password}
                      onChange={handlePassword}
                      type={showPassword ? "text" : "password"}
                      placeholder="password"
                      className="w-full h-10 bg-transparent flex-1 outline-0 text-white  font-sf-reg text-sm"
                      style={{ borderWidth: "0", outline: "none" }}
                    />
                    <div className="px-2" onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? (
                        <FaRegEye style={{ color: "white" }} className="cursor-pointer" />
                      ) : (
                        <FaRegEyeSlash style={{ color: "white" }} className="cursor-pointer" />
                      )}
                    </div>
                  </div>
                  <ErrorTextComp errorCondition={passwordError} />
                </div>

                {/* agreement checkbox */}
                <div className="mb-5 flex flex-row items-start gap-2">
                  <div>
                    <input
                      value="agreement"
                      checked={agreementChecked}
                      onChange={handleAgreementChecked}
                      type="checkbox"
                      name="agreement"
                      id="agree"
                      className="h-4 w-4"
                    />
                  </div>
                  <div className="text-white font-sf-reg text-xs">
                    I acknowledge that i have read and agree to{" "}
                    <span className="text-[#FF375F]">iGospel’s Agreement</span>
                  </div>
                </div>

                {/* newsletter checkbox */}
                <div className="mb-5 flex flex-row items-start gap-2">
                  <div>
                    <input
                      value="newsletter"
                      checked={newsCheck}
                      onChange={handleNewsCheck}
                      type="checkbox"
                      name="agreement"
                      id="news"
                      className="h-4 w-4"
                    />
                  </div>
                  <div className="text-white font-sf-reg text-xs">
                    Sign up for the latest updates, news, and more about your preferred artists. Be
                    among the first to receive exclusive content.
                  </div>
                </div>

                {/* button here */}
                <button
                  onClick={handleSubmit}
                  className={`w-full h-10 ${agreementChecked ? "bg-[#FF375F] text-white" : "bg-[#636366] text-[#AEAEB2]"}  font-sf-med text-sm rounded-md flex flex-row items-center justify-center`}
                  disabled={loading}
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
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
                  ) : (
                    "Continue"
                  )}
                </button>
              </form>
            </div>
          </div>
          <div className="mt-1">
            <Link to="/auth/login" className="text-white font-sf-reg text-xs">
              Don't have an account ? <span className="text-[#FF375F]">Login here</span>
            </Link>
          </div>
        </div>

        <div className="w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default SignupComp;
