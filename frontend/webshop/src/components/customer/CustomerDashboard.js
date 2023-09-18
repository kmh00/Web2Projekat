import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {

    const navigate = useNavigate();
    const token = localStorage.getItem("userToken");
    if(token == null || token == ""){
        navigate("/profile");
    }

    const profileRedirect = () => {
        navigate('/profile');
    }
    
    const newOrederRedirect = () => {
        navigate('/newOrder');
    }
    
    const pastOrdersRedirect = () => {
        navigate('/pastOrders');
    }

    const logout = () => {
        localStorage.setItem("userToken",'');
        navigate('/');
    }

    return (
        <div>
            <h1>CUSTOMER</h1>
            <button onClick={profileRedirect}>Profile</button>
            <button onClick={newOrederRedirect}>newOrder</button>
            <button onClick={pastOrdersRedirect}>Past orders </button>
            <button onClick={logout}>Log out</button>

        </div>
        
    )

}


export default AdminDashboard;