import { createContext, useState } from "react";

interface AuthContextType {
    token: string | null;
    isAuthenticated: boolean;
    authenticate: (token: string) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
    token: '',
    isAuthenticated: false,
    authenticate: () => { },
    logout: () => { },
})


const AuthContextProvider = ({ children }: any) => {
    const [authToken, setAuthToken] = useState<string | null>('');

    const authenticate = (token: string) => {
        setAuthToken(token);
        localStorage.setItem('igospel-user-token', token)
    }

    const logout = () => {
        setAuthToken(null);
        localStorage.removeItem('igospel-user-token')
    }

    const value: AuthContextType = {
        token: authToken,
        isAuthenticated: !!authToken,
        authenticate,
        logout,
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContextProvider;