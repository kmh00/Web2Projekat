using WebShop.Infrastructure;
using WebShop.Models;
using WebShop.Repository.Interfaces;

namespace WebShop.Repository
{
    public class ItemRepository : IItemRepository
    {
        private WebShopDbContext _DbContext;

        public ItemRepository(WebShopDbContext dbContext)
        {
            _DbContext = dbContext;
        }

        public void Add(Item item)
        {
           _DbContext.Add(item);
            _DbContext.SaveChanges();
            return;
        }
    }
}
