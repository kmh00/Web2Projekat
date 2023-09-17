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