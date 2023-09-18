import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {

    const navigate = useNavigate();
    const token = localStorage.getItem("userToken");
    if(token == null || token == ""){
        navigate('/');
    }

    const profileRedirect = () => {
        navigate('/profile');
    }
    
    const verificationRedirect = () => {
        navigate('/verification');
    }
    
    const ordersRedirect = () => {
        navigate('/orders');
    }

    const logout = () => {
        localStorage.setItem("userToken","");
        navigate('/');
    }

    return (
        <div>
            <h1>ADMIN</h1>
            <button onClick={profileRedirect}>Profile</button>
            <button onClick={verificationRedirect}>Verification requests</button>
            <button onClick={ordersRedirect}>All orders </button>
            <button onClick={logout}>Log out</button>

        </div>
        
    )

}


export default AdminDashboard;