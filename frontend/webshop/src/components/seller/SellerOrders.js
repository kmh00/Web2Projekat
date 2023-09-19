import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GetAllForSeller } from "../../services/OrderServices";

const SellerOrders = () => {

    const[orders, setOrders] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
          try {
            //const response = await GetAllArticles();

            const email = localStorage.getItem('email');
            const response2 = await GetAllForSeller(email);
            if(response2) {
                setOrders(response2.data);
            }

          } catch (error) {
          }
        }
    
        fetchData();
      }, []);

      const formatArticles = (items) => {
        return items.map((item) => `${item.id} (${item.quantity})`).join(', ');
      };

    return (
        <div>
            <h2>All orders:</h2>

            <br></br>
            <table >
                <thead>
                    <tr>
                    <th>Price</th>
                    <th>Items</th>
                    <th>Comment</th>
                    <th>Delivery address</th>
                    <th>Order time</th>
                    <th>Delivery time</th>
                    <th>Status of order</th>
                    </tr>
                </thead>
                <tbody>
                {orders.map(order => (
                    <tr key={order.id}>
                        <td>{order.price}</td>
                        <td>{formatArticles(order.OrderedItems)}</td>
                        <td>{order.comment}</td>
                        <td>{order.deliveryAddress}</td>
                        <td>{order.orderTime.split('.')[0]}</td>
                        <td>{order.deliveryTime.split('.')[0]}</td>
                        <td>{order.isDelevered}</td>
                    </tr>
                    ))}
                </tbody>
            </table>

            <br></br>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );
}

export default SellerOrders;