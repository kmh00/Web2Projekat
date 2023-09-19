import React from "react";
import {useState} from "react";
import { useNavigate } from "react-router-dom";     
import { RegisterUser } from "../services/UserServices";

const Register = () => {


    const navigate = useNavigate();
    
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[password2, setPassword2] = useState('');
    const[fullName, setFullName] = useState('');
    const[address, setAddress] = useState('');
    const[dateOfBirth, setDateOfBirth] = useState('');
    const[username, setUsername] = useState('');
    const[image, setImage] = useState('');
    const[userType, setUserType] = useState('');
    const[error, setError] = useState(false);
    const[verificationStatus, setVerificationStatus] = useState('');

    const handleSelectChange = (event) => {
        setUserType(event.target.value);
      };

    const handleSubmit = async (event) => {
        event.preventDefault();
      
        if(password === password2){
            const userJSON = {
                id : "",
                username : username,
                email : email,
                password : password,
                fullName : fullName,
                dateOfBirth : dateOfBirth,
                userType : parseInt(userType, 10),
                address : address,
                verificationStatus: 1,
                userImage : image,
                verified : true
            }
            const data = await RegisterUser(userJSON)
            .then(data =>{
                if(data.status === 204){
                    alert("Successfully registered!");
                    navigate("/");
                }
            })
            .catch(error =>{
                alert("Something went wrong, please try again.");
            })
        }
    }

    return (
        <div>
            <h2>Register: </h2>
            <form  onSubmit={handleSubmit}>
                <div >
                    <label>Full name </label>
                    <input type="text"
                            value={fullName}
                            name="fullName"
                            placeholder="Full name"
                            onChange={(e) => setFullName(e.target.value)}/>
                    {error && fullName.length === 0 ? <div>You must enter your name!</div> : null}
                </div>
    
                <div >
                    <label>Username </label>
                    <input type="text"
                            value={username}
                            name="username"
                            placeholder="Username"
                            onChange={(e) => setUsername(e.target.value)}/>
                    {error && username.length === 0 ? <div>You must enter your username!</div> : null}
                </div>
    
                <div >
                    <label>Password </label>
                    <input type="password"
                            value={password}
                            name="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}/>
                    {error && password.length === 0 ? <div >You must enter your password!</div> : null}
                </div>
    
                <div >
                    <label>Confirm your password</label>
                    <input type="password"
                            value={password2}
                            name="password2"
                            placeholder="Confirm password"
                            onChange={(e) => setPassword2(e.target.value)}/>
                    {error && password2.length === 0 ? <div >You must confirm your password!</div> : null}
                </div>
    
                <div >
                            <label>Email </label>
                            <input type="email"
                                value={email}
                                name="email"
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}/>
                            {error && email.length === 0 ? <div >You must enter the email address!</div> : null}
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
    
                <div >
                            <label>Address </label>
                            <input type="text"
                                value={address}
                                name="address"
                                placeholder="Address"
                                onChange={(e) => setAddress(e.target.value)}/>
                </div>
    
                <div >
                            <label>User type </label>
                            <select value={userType} name="userType" placeholder="User type" onChange={handleSelectChange}>
                                <option value="">Select user type</option>
                                <option value="0">ADMIN</option>
                                <option value="1">CUSTOMER</option>
                                <option value="2">SELLER</option>
                                
                                
                            </select>
                            {error && userType.length === 0 ? <div>You must select user type!</div> : null}
                </div>

                <div >
                        <label>Image: </label> 
                        <input type="text"
                            value={image}
                            name="image"
                            placeholder="image"
                            onChange={(e) => setImage(e.target.value)}/>
                </div>
    
               
    
                <button className="blueButton" type="submit" onClick={handleSubmit}>Sign up</button>
    
            </form>
            <br></br>
        </div>
    );





}

export default Register;