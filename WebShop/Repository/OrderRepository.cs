using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using WebShop.Enums;
using WebShop.Infrastructure;
using WebShop.Models;
using WebShop.Repository.Interfaces;

namespace WebShop.Repository
{
    public class OrderRepository : IOrderRepository
    {

        private WebShopDbContext _DbContext;

        public OrderRepository(WebShopDbContext dbContext)
        {
            _DbContext = dbContext;
        }

        public void AddOrder(Order order)
        {
            _DbContext.Orders.Add(order);
            _DbContext.SaveChanges();
            return;
        }

        public List<Order> GetAllOrders()
        {
            return _DbContext.Orders.ToList();
        }

        public List<Order> GetAllForSeller(string email)
        {
            var orders = _DbContext.Orders.Include(o => o.OrderedItems).ToList();

            List<Order> result = new List<Order>();

            foreach (Order o in orders)
            {
                if (o.OrderedItems.Find(a => a.SellerId == email) != null)
                    result.Add(o);

            }
            return result;
        
        }
    }
}   
