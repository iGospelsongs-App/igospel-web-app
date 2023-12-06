import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

function PublicRoute() {
    const user: any = localStorage.getItem("igospel-user-token") !== null;

    return user ? <Navigate to="/" /> : <Outlet />;
}

export default PublicRoute