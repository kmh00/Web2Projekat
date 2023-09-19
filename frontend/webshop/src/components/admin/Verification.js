import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { GetSellers, Verify, Deny } from "../../services/UserServices";


export default function(){

    const[id, setId] = useState('');
    const [sellers, setSellers] = useState([]);
    //const data = GetAllSalesmans();
    
    useEffect(() => {
        async function fetchData() {
          
            const response = await GetSellers();
            if (response) {
                setSellers(response.data); // Set the fetched data to the state
            }
          
        }
    
        fetchData();
      }, []);

      function reloadPage() {
        window.location.reload();
      }

      const verify = (sellerId) => {
        setId(sellerId)
        alert(id)
        Verify(id);
        
     
    };

    const deny = (sellerId) => {
     
          try {
            const response = Deny(sellerId);
            reloadPage();
          } 
          catch (error) {
            console.log(error);
          }
  
    };
      

    return (

       <div >
             <p>Here are all verification requests: </p>

             <table >
                <thead>
                    <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Full name</th>
                    <th>Verification status</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {sellers.map(seller => (
                    <tr key={seller.id}>
                        <td>{seller.username}</td>
                        <td>{seller.email}</td>
                        <td>{seller.fullName}</td>
                        <td>
                        {seller.verificationStatus}
                        </td>
                        <td>
                            <button disabled = {!(seller.verificationStatus === 0)} onClick={() => verify(seller.id)} >Accept</button>
                            <button  disabled = {!(seller.verificationStatus === 0)} onClick={() => deny(seller.id)}>Deny</button>
                        </td>
                        
                        
                    </tr>
                    ))}
                </tbody>
            </table>
       </div>

    );
}