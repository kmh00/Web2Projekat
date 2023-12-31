import axios from 'axios';

export const AddItem = async (item) => {
        alert(item.SellerId)
        return await axios.post(`${process.env.REACT_APP_API_URL}/api/items/addItem`,
        item,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
        );
    } 

    export const GetItems = async () => {
      return await axios.get(`${process.env.REACT_APP_API_URL}/api/items/getItems`,
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
      );
  }  

