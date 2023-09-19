using WebShop.Enums;
using WebShop.Models;

namespace WebShop.Dto
{
    public class OrderDto
    {

        public string Id { get; set; }

        public string UserId { get; set; }

        public string ShippingAddress { get; set; }

        public List<ItemDto> OrderedItems { get; set; }

        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }

        public int DeliveryPrice { get; set; }
        public int Price { get; set; }

        public OrderStatus OrderStatus { get; set; }
    }
}
