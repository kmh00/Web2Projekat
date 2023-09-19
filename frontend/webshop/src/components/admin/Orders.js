import React, { useState } from 'react';
import { useEffect } from 'react';
import { GetAllOrders } from '../../services/OrderServices';


const Orders = () => {

    const[orders, setOrders] = useState([]);

    useEffect(() => {
        async function fetchData() {
          try {
            const response = await GetAllOrders ();
            if (response) {
                setOrders(response.data); 
            }
          } catch (error) {
            
          }
        }
    
        fetchData();
      }, []);

      const formatItems = (items) => {
        return items.map((item) => `${item.id} (${item.quantity})`).join(', ');
      };

    return (
        <div >
            <h1>ORDERS:</h1>
            <table >
                <thead>
                    <tr>
                    <th>Price</th>
                    <th>Delivery address</th>
                    <th>Order time</th>
                    <th>Delivery time</th>
                    <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                {orders.map(order => (
                    <tr key={order.id}>
                        <td>{order.price}</td>
                        <td>{order.deliveryAddress}</td>
                        <td>{order.startTime.split('.')[0]}</td>
                        <td>{order.endTime.split('.')[0]}</td>
                        <td>{order.OrderStatus}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
        
    )

}


export default Orders;