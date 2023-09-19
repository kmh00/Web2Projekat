import axios from 'axios';


export const LogInUser = async(email, password) => {
    try {
        return await axios.post(`${process.env.REACT_APP_API_URL}/api/users/login`,
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
        );

    } catch(err) {
        alert("Something went wrong with logging in!");
        return null;
    }
}

export const RegisterUser = async (UserDto) => {
        return await axios.post(`${process.env.REACT_APP_API_URL}/api/users/register`,
            UserDto,
            {
                headers: { "Content-Type": "application/json" },
                withCredentials: true,
            }
        );
}

export async function GetUserData(email){
    return await axios.get(`${process.env.REACT_APP_API_URL}/api/users/getUserData`, 
    {
        params: {email},  
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    
);
}

export const UpdateUser = async(UserDto) => {

        return await axios.post(`${process.env.REACT_APP_API_URL}/api/users/updateUser`,
            UserDto,
            {
                headers: { "Content-Type": "application/json" },
                withCredentials: true,
            }
        );
}

export async function GetSellers(){
    const userToken = localStorage.getItem("userToken");
    return await axios.get(`${process.env.REACT_APP_API_URL}/api/users/getSellers`, 
    {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
    }
);
}

export async function Verify(SellerId){
    alert(SellerId);
    return await axios.get(`${process.env.REACT_APP_API_URL}/api/users/getUserData`, 
    {
        params: {SellerId},  
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    
);
}

export async function Deny(id){
    return await axios.post(`${process.env.REACT_APP_API_URL}/api/users/deny`, 
    {
        params: {id},  
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    
);
}



