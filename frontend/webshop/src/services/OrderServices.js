import axios from "axios";

export const AddNewOrder = async (OrderDto) => {
    try {
        const {data} = await axios.post(`${process.env.REACT_APP_API_URL}/api/orders/newOrder`,
        OrderDto,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
        );
    } catch(err) {
    }
}

export const GetAllOrders = async () => {
    try {
        return await axios.get(`${process.env.REACT_APP_API_URL}/pi/orders/getAllOrder`,
       
        );

    } catch(err) {
    }

}

export const GetAllForSeller = async (email) => {
    try {
        return await axios.get(`${process.env.REACT_APP_API_URL}pi/orders/allForSeller`,
        {
            params: { email },
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );

    } catch(err) {
    }

}