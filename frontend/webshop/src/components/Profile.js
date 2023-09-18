import React from "react";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react"
import { GetUserData, UpdateUser } from "../services/UserServices";

export default function(){
    //const history = useHistory();
    
    const[id, setId] = useState('');
    const[userType, setUserType] = useState('');
    const[verificationStatus, setVerificationStatus] = useState('');
    const[verified, setVerified] = useState('');
    const[fullName, setFullName] =  useState('');
    const[username, setUsername] =  useState('');
    const[email, setEmail] =  useState('');
    const[password, setPassword] =  useState('');
    const[password2, setPassword2] =  useState('');
    const[address, setAddress] =  useState('');
    const[dateOfBirth, setDateOfBirth] =  useState('');
    const[image, setImage] =  useState('');
    
    const handleSubmit = async (event) => {

        event.preventDefault();
        if(password === password2){
            const userJSON = {
                ID : id,
                Username : username,
                Email : email,
                Password : password,
                FullName : fullName,
                DateOfBirth : dateOfBirth,
                UserType : userType,
                Address : address,
                Verified : verified,
                VerificationStatus : verificationStatus,
                UserImage : image
            };

            const data = await UpdateUser(userJSON);
            if(data != null){
                
                alert("Succesfull profile update!!!");
                localStorage.setItem("email", data.data.email);

            } else {
                alert(":(");
            }
        }

    }

    const loggedInEmail = localStorage.getItem("email");
    if(loggedInEmail != undefined){
        useEffect(() => {
           const getUserData = async() =>{
                const response = await GetUserData(loggedInEmail);
                setId(response.data.id);
                setUserType(response.data.userType);
                setVerificationStatus(response.data.verificationStatus);
                setVerified(response.data.verified);
                setFullName(response.data.fullName);
                setUsername(response.data.username);
                setEmail(response.data.email);
                setAddress(response.data.address);
                setImage(response.data.userImage);  
                if(response.data.dateOfBirth != undefined){
                    setDateOfBirth(response.data.dateOfBirth.slice(0, 10));
                }
                
            }
            getUserData();
    
    
        }, []);
    }

    return (
        
        <div className="card">
            <h1>PROFILE</h1>
            <form>
                <div >
                    <label>Full name </label>
                    <input type="text"
                            value={fullName}
                            
                            name="fullName"
                            placeholder="fullName"
                            onChange={(e) => setFullName(e.target.value)}/>
                </div>

                <div >
                    <label>Username </label>
                    <input type="text"
                            value={username}
                            name="username"
                            placeholder="Username"
                            onChange={(e) => setUsername(e.target.value)}/>
                </div>

                <div>
                    <label>Password </label>
                    <input type="password"
                            value={password}
                            name="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <div>
                    <label>Confirm your password</label>
                    <input type="password"
                            value={password2}
                            name="password2"
                            placeholder="Confirm password"
                            onChange={(e) => setPassword2(e.target.value)}/>
                </div>

                <div>
                            <label>Email </label>
                            <input type="email"
                                value={email}
                                name="email"
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div>
                    <label>Date of birth</label>
                    <input
                    id='dateOfBirth'
                    name='dateOfBirth'
                    type="date"
                    className="form-control mt-1"
                    value={dateOfBirth}
                    onChange={(e)=>{setDateOfBirth(e.target.value)}}
                    />
                </div>

                <div>
                            <label>Address </label>
                            <input type="text"
                                value={address}
                                name="address"
                                placeholder="Address"
                                onChange={(e) => setAddress(e.target.value)}/>
                </div>
                <div >
                        <label>Image</label> 
                        <input type="text"
                            value={image}
                            name="image"
                            placeholder="image"
                            onChange={(e) => setImage(e.target.value)}/>
                </div>

              

                <div className="buttons-flex">
                        <button className="blueButton" type="submit" onClick={handleSubmit}>Update profile</button>
                        <div id="singInDiv"></div>
    </div>

            </form>

        </div>
    );
};
