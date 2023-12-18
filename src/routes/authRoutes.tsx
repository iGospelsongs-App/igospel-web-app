import PublicRoute from "../components/auth/PublicRoute";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import ResetSuccess from "../pages/auth/passwordReset/Success";
import VerifySignup from "../pages/auth/VerifySignup";
import PasswordReset from "../pages/auth/passwordReset/Index";
import ResetPasswordInput from "../pages/auth/passwordReset/Input";
import NewPassword from "../pages/auth/passwordReset/NewPassword";


export const authRoute = {
  path: "/auth",
  element: <PublicRoute />,
  children: [
    {
      path: "/auth/login",
      element: <Login />
    },
    {
      path: "/auth/signup",
      element: <Signup />
    },
    {
      path: "/auth/verify",
      element: <VerifySignup />
    },
    {
      path: '/auth/reset_password',
      element: <PasswordReset />
    },
    {
      path: '/auth/reset_password/verify',
      element: <ResetPasswordInput />
    },
    {
      path: '/auth/reset_password/new',
      element: <NewPassword />
    },
    {
      path: '/auth/reset_password/success',
      element: <ResetSuccess />
    }
  ]
}