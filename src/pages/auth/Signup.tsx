import React from 'react';
import bgImg from '../../assets/images/login-bg.svg'
import SignupComp from '../../components/SignupComp';

function Signup() {
  return (
    <div className='relative'>
      <div className=''>
        <div className='lg:flex-[0.5] relative'>
          <img src={bgImg} alt="" />
          <div className="absolute inset-0 w-full">
            <div className="h-[550px] w-full absolute bottom-0 left-[0%] lg:left-0 bg-gradient-to-t opacity-95 from-black from-20% via-black via-20% to-transparent"></div>
          </div>
        </div>
      </div>

      <div className='absolute w-full top-0'>
        <SignupComp />
      </div>

      <div>

      </div>
    </div>
  );
}

export default Signup;
