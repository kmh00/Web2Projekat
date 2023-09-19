using WebShop.Dto;
using WebShop.Models;

namespace WebShop.Repository.Interfaces
{
    public interface IOrderRepository
    {
        void AddOrder(Order order);
    }
}
