using WebShop.Dto;

namespace WebShop.Services.Interfaces
{
    public interface IOrderServices
    {
        bool CreateOrder(OrderDto orderDto);
    }
}
