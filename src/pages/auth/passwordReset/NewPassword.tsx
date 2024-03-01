import React, { useEffect, useState } from "react";
import AuthPageLayout from "../../../components/AuthPageLayout";
import Footer from "../../../components/Footer";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.svg";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import axios from "axios";
import { Puff } from "react-loader-spinner";
import ErrorTextComp from "../../../components/ErrorTextComp";

function NewPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirm, setConfirm] = useState("");
  const [confirmError, setConfirmError] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [resetOtp, setResetOtp] = useState<string | null>("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const otp = localStorage.getItem("reset_otp");
    setResetOtp(otp);
  }, []);

  const URL = "https://igospelsongs.onrender.com/user/set_password/int:" + resetOtp + "/";

  const fieldsValidation = () => {
    let isPasswordValid = true;
    let isConfirmValid = true;

    if (password.trim() === "") {
      setPasswordError("Password is required");
      isPasswordValid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be more than 6 char");
      isPasswordValid = false;
    } else {
      setPasswordError("");
    }

    if (password.trim() === "") {
      setConfirmError("Password is required");
      isConfirmValid = false;
    } else if (password.length < 6) {
      setConfirmError("Password must be more than 6 char");
      isConfirmValid = false;
    } else {
      setConfirmError("");
    }

    const isValid = isPasswordValid && isConfirmValid && password === confirm;

    return isValid;
  };

  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const handleConfirm = (e: any) => {
    setConfirm(e.target.value);
  };

  const handlePostRequest = async () => {
    try {
      const response = await axios.post(URL, { password });
      setLoading(false);
      setPassword("");
      setConfirm("");
    } catch (error: any) {
      setLoading(false);
      // setErrorMessage(error)
      console.log(error);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (fieldsValidation()) {
      setErrorMessage("");
      setLoading(true);
      handlePostRequest();
    }
  };

  return (
    <AuthPageLayout>
      <div className="h-screen">
        <div className="h-full">
          <div className="flex flex-col items-center justify-between h-full">
            <div className="w-full flex flex-col items-center h-full justify-center">
              <div>
                <img src={logo} className="h-10 w-[200px] mb-6" alt="" />
              </div>
              <div className="bg-[#0E0E0F] border-[1px] border-[#1e1e1e49] w-[425px] rounded-2xl px-10 py-10">
                <div>
                  <div className="text-white text-center text-xl font-bold mb-5 font-sf-bold">
                    Forgt Password
                  </div>
                  <form>
                    {/* password input one  */}
                    <div className="mb-5">
                      <label htmlFor="password" className="text-white font-sf-reg text-xs">
                        New Password
                      </label>
                      <div className="border-[1px] border-white bg-transparent pl-2 mt-2 flex flex-row items-center rounded-md justify-between">
                        <input
                          value={password}
                          onChange={handlePassword}
                          type={showPassword ? "text" : "password"}
                          placeholder="enter new password"
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

                    {/* password input two  */}
                    <div className="mb-7">
                      <label htmlFor="password" className="text-white font-sf-reg text-xs">
                        Confirm Password
                      </label>
                      <div className="border-[1px] border-white bg-transparent pl-2 mt-2 flex flex-row items-center rounded-md justify-between">
                        <input
                          value={confirm}
                          onChange={handleConfirm}
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="confirm new password"
                          className="w-full h-10 bg-transparent flex-1 outline-0 text-white  font-sf-reg text-sm"
                          style={{ borderWidth: "0", outline: "none" }}
                        />
                        <div
                          className="px-2"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                          {showConfirmPassword ? (
                            <FaRegEye style={{ color: "white" }} className="cursor-pointer" />
                          ) : (
                            <FaRegEyeSlash style={{ color: "white" }} className="cursor-pointer" />
                          )}
                        </div>
                      </div>
                      <ErrorTextComp errorCondition={confirmError} />
                    </div>

                    {/* button here */}
                    <button
                      onClick={handleSubmit}
                      type="submit"
                      className="w-full h-10 bg-[#FF375F] text-white font-sf-med text-sm rounded-md flex flex-row items-center justify-center"
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

              <div className="mt-5">
                <Link to="/auth/login" className="text-white font-sf-reg text-xs">
                  Remember your password ? <span className="text-[#FF375F]">Login here</span>
                </Link>
              </div>
            </div>

            <div className="w-full">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </AuthPageLayout>
  );
}

export default NewPassword;
