import React from "react";
import { useState } from "react";
import { AddItem }  from "../../services/ItemServices";

const AddNewItem = () => {

    const[name, setName] = useState('');
    const[price, setPrice] = useState(0);
    const[quantity, setQuantity] = useState(1);
    const[description, setDescription] = useState('');
    const[image, setImage] = useState('');
    const[error, setError] = useState('');

    

    const handleSubmit = async (event) => {
        event.preventDefault();
        const sellerId = localStorage.getItem("email");
        
        if(sellerId != null){
            const itemJSON = {
                Name : name,
                Id : '',
                Price : price,
                Quantity : quantity,
                Description : description,
                SellerId : sellerId,
                ImageUrl : image
            };

            const data = await AddItem(itemJSON)
            .then(data =>{
                if(data.status === 204){
                    alert("Successfully");
                }
            })
            .catch(error =>{
                alert("Something went wrong, please try again.");
            })
        }
        
    }

        
    
    

    return (
        <div >
            <h3>Add Item</h3>

            <form onSubmit={handleSubmit} >
                <div >
                    <label>Name </label>
                    <input type="text"
                            value={name}
                            name="name"
                            placeholder="Name of item"
                            onChange={(e) => setName(e.target.value)}/>
                </div>

                <div >
                    <label>Price</label>
                    <input type="number"
                            value={price}
                            name="price"
                            placeholder="Price"
                            onChange={(e) => setPrice(e.target.value)}/>
                </div>

                <div>
                    <label>Quantity </label>
                    <input type="number"
                            value={quantity}
                            name="quantity"
                            placeholder="Quantity"
                            onChange={(e) => setQuantity(e.target.value)}/>
                </div>

                <div>
                            <label>Description </label>
                            <input type="text"
                                value={description}
                                name="description"
                                placeholder="Description"
                                onChange={(e) => setDescription(e.target.value)}/>
                </div>

                <div >
                        <label>Image: </label> 
                        <input type="text"
                            value={image}
                            name="image"
                            placeholder="image"
                            onChange={(e) => setImage(e.target.value)}/>
                </div>
                
                <div >
                        <button type="submit" onClick={handleSubmit}>Add item</button>
                </div>

            </form>

        </div>
    );
}

export default AddNewItem;