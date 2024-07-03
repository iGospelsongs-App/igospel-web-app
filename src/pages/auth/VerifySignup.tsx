import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import img from "../../assets/images/pwrod.svg";
import logo from "../../assets/images/logo.svg";
import AuthPageLayout from "../../components/AuthPageLayout";
import OTPInput from "react-otp-input";
import { Puff } from "react-loader-spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ErrorTextComp from "../../components/ErrorTextComp";

function VerifySignup() {
  const [otp, setOtp] = useState("");
  const [inputFill, setInputFill] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const URL = "https://api.igospel.com.ng/dev/auth/activate_account/";

  //TODO: remove this and make sure they fix the error respnse from the backend
  const ERROR_MESSAGE = "Request failed with status code 500";

  useEffect(() => {
    if (otp.length === 4) {
      setInputFill(true);
    } else {
      setInputFill(false);
      setError("");
    }
  }, [otp]);

  const handlePostRequest = async () => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await axios.post(URL, { otp: otp });
      setLoading(false);
      setOtp("");
      navigate("/auth/login");
    } catch (error: any) {
      console.log(error);
      setLoading(false);
      if (error.message === ERROR_MESSAGE) {
        setError("Incorrect Pin");
      } else if (error.message === "Network Error") {
        setError("Network Error");
      } else {
        setError(error?.response?.data?.message);
      }
    }
  };

  const handleSubmit = () => {
    console.log(otp);
    if (inputFill) {
      setError("");
      setLoading(true);
      handlePostRequest();
    }
  };

  return (
    <AuthPageLayout>
      <div className="mt-[100px]">
        <div className="">
          <div className="w-full flex flex-col items-center h-full justify-center">
            <div>
              <img src={logo} className="h-10 w-[200px] mb-6" alt="" />
            </div>
            <div className="bg-[#0E0E0F] border-[1px] border-[#1e1e1e49] w-[425px] rounded-2xl px-4 py-10">
              <div className="">
                <img src={img} alt="" className="block mx-auto mb-20" />

                <div className="text-white text-center text-xl font-semibold mb-5 font-sf-bold">
                  Verify account
                </div>
                <div className="text-white text-center text-sm font-sf-reg">
                  A four digit pin has been sent to your account, <br /> input it and verify your
                  email.
                </div>

                {/* code input here  */}
                <div className="my-10 flex flex-row justify-center w-full">
                  <OTPInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={4}
                    renderSeparator={<span className="w-5 lg:w-3"></span>}
                    renderInput={(props) => (
                      <input
                        {...props}
                        style={{
                          width: "60px",
                          height: "70px",
                          border: "1px solid #ACACAC",
                          textAlign: "center",
                          fontWeight: 500,
                          color: "#ACACAC",
                          fontSize: "35px",
                          borderRadius: "8px",
                          backgroundColor: "transparent",
                          outlineColor: "#FF375F",
                        }}
                      />
                    )}
                  />
                </div>
                <div className="my-2">
                  <ErrorTextComp errorCondition={error} />
                </div>

                <button
                  onClick={handleSubmit}
                  type="submit"
                  className={`w-full h-10 ${inputFill ? "bg-[#FF375F] text-white" : "bg-[#636366] text-[#AEAEB2]"}  font-sf-med text-sm rounded-md flex flex-row items-center justify-center`}
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
                    "Verify"
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="w-full mt-10">
            <Footer />
          </div>
        </div>
      </div>
    </AuthPageLayout>
  );
}

export default VerifySignup;
