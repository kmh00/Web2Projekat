import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { LogInUser } from "../services/UserServices";

const Home = () => {

    const navigate = useNavigate();
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[error, setError] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(email.length === 0 || password.length === 0) {
            setError(true);
            return;
        }
        
        const data = await LogInUser(email, password);
        if(data == "User not verified"){
          }
          else if(data == "Wrong email or password"){
            setInputsToEmpty();
  
          }
          else{
            alert("Successfull login!");
          }

    }

    const setInputsToEmpty = () => {
        setEmail('');
        setPassword(''); 
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