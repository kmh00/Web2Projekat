using WebShop.Dto;

namespace WebShop.Services.Interfaces
{
    public interface IItemService
    {
        void AddItem(ItemDto productDto);
    }
}
