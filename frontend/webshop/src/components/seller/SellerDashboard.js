import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SellerDashboard = () => {

    const navigate = useNavigate();
    const token = localStorage.getItem("userToken");
    if(token == null || token == ''){
        navigate("/");
    }

    const profileRedirect = () => {
        navigate('/profile');
    }
    
    const addNewItemeRedirect = () => {
        navigate('/addNewItem');
    }
    
    const newOrdersRedirect = () => {
        navigate('/newOrders');
    }

    const myOrdersRedirect = () => {
        navigate('/sellerOrders');
    }

    const logout = () => {
        localStorage.setItem("userToken",null);
        navigate('/');
    }

    return (
        <div>
            <h1>SELLER</h1>
            <button onClick={profileRedirect}>Profile</button>
            <button onClick={addNewItemeRedirect}>Add New Item</button>
            <button onClick={newOrdersRedirect}>New orders </button>
            <button onClick={myOrdersRedirect}>My orders </button>
            <button onClick={logout}>Log out</button>

        </div>
        
    )

}


export default SellerDashboard;