using WebShop.Dto;

namespace WebShop.Services.Interfaces
{
    public interface IOrderServices
    {
        bool CreateOrder(OrderDto orderDto);
        List<OrderDto> GetAllOrders();
        List<OrderDto> GetAllOrdersSeller(string email);
    }
}
