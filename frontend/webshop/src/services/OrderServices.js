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