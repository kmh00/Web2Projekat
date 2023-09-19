export default class OrderDto {
    constructor(Id, OrderedItems, userId, deliveryAddress, price) {
        this.Id = Id;
        this.OrderedItems = OrderedItems;
        this.UserId = userId;
        this.ShippingAddress = deliveryAddress;
        this.Price = price;
        
    }

    addArticle(OrderedItems) {
        this.OrderedItems.push(OrderedItems);
    }
}