export default class OrderDto {
    constructor(Id, OrderedItems, userId, deliveryAddress, price) {
        this.Id = Id;
        this.OrderedItems = OrderedItems;
        this.UserId = userId;
        this.ShippingAddress = deliveryAddress;
        this.deliveryPrice = 300;
        this.Price = price;
        this.StartTime="";
        this.EndTime = "";
        this.OrderedStatus = 0;
    }

    addArticle(OrderedItems) {
        this.OrderedItems.push(OrderedItems);
    }
}