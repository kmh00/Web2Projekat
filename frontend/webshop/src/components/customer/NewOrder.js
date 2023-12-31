import { useEffect, useState } from "react"
import { GetItems } from "../../services/ItemServices";
import { useNavigate } from 'react-router-dom';
import OrderItemDto from "../../models/OrderItemDto";
import OrderDto from "../../models/OrderDto";
import { AddNewOrder } from "../../services/OrderServices";

const NewOrder = () => {
    
    const navigate = useNavigate();
    const[selectedValues, setSelectedValues] = useState([]);
    const[price, setPrice] = useState(0);
    const [items, setItems] = useState([]);
    const[itemsForOrder, setItemsForOrder] = useState([]);
    const[deliveryAddress, setDeliveryAddress] = useState('');

    useEffect(() => {
        const getItems = async() =>{
                await GetItems().then(response => {
                setItems(response.data);

            }).catch(error =>
                {
                if(error.response.status == 401){
                    localStorage.clear();
                    navigate("../login");
                }
            });
        }
        getItems()
    }, []);
    
    const handleSelectChange = (articleId, e) => {
        setSelectedValues({
            ...selectedValues,
            [articleId]: parseInt(e.target.value, 10),
          });

      };

    const handleOrdering = (id, quantity, priceOfItem) => {
        setPrice(price + (priceOfItem*quantity));
        //setPriceWithDelivery(price + 300);
        setItemsForOrder([...itemsForOrder, new OrderItemDto(id, quantity)]);
    }

    const order = () => {
        const userId = localStorage.getItem('email');
        const order = new OrderDto("", itemsForOrder, userId, deliveryAddress, price);
        
        
            AddNewOrder(order) 
            .then(response =>{
                console.log(response);
                alert("Order placed successfully!");
            })
            .catch(error => {
                alert(error);
            })
        
        
    }

    return (
        <div >
            <h1>WebShop</h1>
            <table >
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity}</td>
                        <td>{item.description}</td>
                        <td> {item.imageUrl}</td>
                        
                        <td>
                        Quantity:
                        <select value={selectedValues[item.id] || ''} onChange={(e) => handleSelectChange(item.id, e)}>
                            {Array.from({ length: item.quantity }, (_, index) => index + 1).map((value) => (
                                <option key={value} value={value}>
                                {value}
                                </option>
                            ))}
                        </select>
                            <button disabled = {( parseInt(item.quanyity) === 0)} onClick={() => handleOrdering(item.id, selectedValues[item.id], item.price,)}>Add to cart</button>
                        </td>
                        
                    </tr>
                    ))}
                </tbody>
            </table>
            <hr />     
            <h1>CART:</h1> 
            <table >
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                {itemsForOrder.map(item => (
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.Quantity}</td>
                    </tr>
                    ))}
                </tbody>
            </table>   
            <h3>Price: {price}</h3>    
            <h3>Delivery price: 300.00</h3>
            <h3>Total price of your order: {price + 300}</h3>
            <input type="text" value={deliveryAddress} onChange={(e) => setDeliveryAddress(e.target.value)} placeholder='Delivery address'></input>
            
            <button onClick={order}>Order</button>       
            
        </div>
        
    )
}

export default NewOrder;