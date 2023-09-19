using AutoMapper;
using Microsoft.EntityFrameworkCore;
using WebShop.Dto;
using WebShop.Models;
using WebShop.Repository.Interfaces;
using WebShop.Services.Interfaces;

namespace WebShop.Services
{
    public class ItemService : IItemService
    {
        private readonly IItemRepository _itemRepository;
        private readonly IMapper _mapper;
        IWebHostEnvironment webHostEnvironment;

        public ItemService(IItemRepository itemRepository, IMapper mapper, IWebHostEnvironment webHostEnvironment)
        {
            _itemRepository = itemRepository;
            _mapper = mapper;
            this.webHostEnvironment = webHostEnvironment;
        }

        public void AddItem(ItemDto productDto)
        {
            var item = _mapper.Map<Item>(productDto);
            _itemRepository.Add(item);
        }
    }
}
