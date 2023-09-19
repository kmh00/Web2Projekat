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
    }
}   
