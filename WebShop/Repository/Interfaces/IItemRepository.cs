using WebShop.Models;

namespace WebShop.Repository.Interfaces
{
    public interface IItemRepository
    {
        void Add(Item item);
        List<Item> GetAllItems();
    }
}
