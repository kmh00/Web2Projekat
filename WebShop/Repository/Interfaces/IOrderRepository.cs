using WebShop.Dto;
using WebShop.Models;

namespace WebShop.Repository.Interfaces
{
    public interface IOrderRepository
    {
        void AddOrder(Order order);
        List<Order> GetAllOrders();
        List<Order> GetAllForSeller(string email);
    }
}
