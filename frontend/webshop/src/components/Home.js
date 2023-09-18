import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { redirect, useNavigate } from 'react-router-dom';
import { LogInUser } from "../services/UserServices";
import jwt_decode from 'jwt-decode'

const Home = () => {

    const navigate = useNavigate();
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[error, setError] = useState(false);

    const redirectTo= (role) => {
        if(role === 'ADMIN'){
            navigate('/adminDashboard');
        }
        else if(role === 'SELLER'){
            navigate('/sellerDashboard');
        }
        else if(role === 'CUSTOMER'){
            navigate('/customerDashboard');
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(email.length === 0 || password.length === 0) {
            setError(true);
            return;
        }
        
        LogInUser(email, password)
        .then(response => {
            if(response.data == "User not verified"){
                alert(response.data);
            }
            else if(response.data == "Wrong email or password"){
                alert(response.data);
            }
            else{
                localStorage.setItem("userToken", response.data)
                localStorage.setItem("email", email);
                var token = jwt_decode(response.data);
                redirectTo(token["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"])

            }
        })

    }

    
    const gotoRegistration = () => {
        navigate('/register');
    };
    return (
        <div >
            <div>
                <h1>WebShop</h1>
                <div></div>
                <h3>Login</h3>

                <form  onSubmit={handleSubmit}>

                <div >
                    <label>Email  </label>
                    <input type="email"
                           value={email}
                           name="email"
                           placeholder="Email"
                           onChange={(e) => setEmail(e.target.value)}/>
                    {error && email.length === 0 ? <div >You must enter the email address!</div> : null}
                </div>

                <div >
                    <label>Password  </label>
                    <input type="password"
                           value={password}
                           name="password"
                           placeholder="Password"
                           onChange={(p) => setPassword(p.target.value)}/>
                    {error && password.length === 0 ? <div >You must enter your password!</div> : null}
                </div>
                
                <div >
                    <button className="blueButton" type="submit">Log in</button>
                    <div ></div>
                </div>

            </form>
            <hr />

            <button onClick={gotoRegistration}>Sign up</button>
            </div> 
        </div>
    );
}

export default Home;