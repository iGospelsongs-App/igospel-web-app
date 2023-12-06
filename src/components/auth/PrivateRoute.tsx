import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

function PrivateRoute() {
    const user = false;
    // const user: any = localStorage.getItem("token") == null;
    return user ? <Outlet /> : <Navigate to="/auth/login" />
}

export default PrivateRoute