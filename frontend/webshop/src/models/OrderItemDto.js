export default class OrderItemDto {
    constructor(id, quantity, sellerId,name, description, price, imageUrl) {
        this.Id = id;
        this.SellerId = sellerId;
        this.Quantity = quantity;
        this.Name = name;
        this.Description = description;
        this.Price = price;
        this.ImageUrl = imageUrl;
    }
}