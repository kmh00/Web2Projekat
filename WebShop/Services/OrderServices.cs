using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using WebShop.Dto;
using WebShop.Enums;
using WebShop.Infrastructure;
using WebShop.Models;
using WebShop.Repository;
using WebShop.Repository.Interfaces;
using WebShop.Services.Interfaces;

namespace WebShop.Services
{
    public class OrderServices : IOrderServices
    {
        private readonly IOrderRepository _orderRepository;
        private readonly IItemRepository _itemRepository;
        private readonly IMapper _mapper;
        IWebHostEnvironment webHostEnvironment;

        public OrderServices(IOrderRepository orderRepository,IItemRepository itemRepository, IMapper mapper, IWebHostEnvironment webHostEnvironment)
        {
            _orderRepository = orderRepository;
            _itemRepository = itemRepository;
            _mapper = mapper;
            this.webHostEnvironment = webHostEnvironment;
        }

        public bool CreateOrder(OrderDto orderDto)
        {
            if (orderDto.OrderedItems == null)
                return false;


            List<Item> items = new List<Item>();
            foreach (ItemOrderDto item in orderDto.OrderedItems)
            {
                Item a = _itemRepository.GetById(item.Id);

                items.Add(a);

            }


            Order newOrder = new Order()
            {
                OrderedItems = items,
                Price = orderDto.Price,
                DeliveryPrice = 300,
                StartTime = DateTime.Now,
                OrderStatus = OrderStatus.InProgress,
                ShopperAddress = orderDto.ShippingAddress,
                OrderUserEmail = orderDto.UserId,
            };

            var seed = 3;
            var random = new Random(seed);

            var rNum = random.Next(60, 600);


            newOrder.EndTime = DateTime.Now.AddMinutes((double)(rNum));

            _orderRepository.AddOrder(newOrder);
            return true;
        }

        public List<OrderDto> GetAllOrders()
        {
            List<Order> orders= _orderRepository.GetAllOrders();
            List<OrderDto> ordresDto = _mapper.Map<List<OrderDto>>(orders);
            return ordresDto;
        }

        public List<OrderDto> GetAllOrdersSeller(string email)
        {
            List<Order> orders = _orderRepository.GetAllForSeller(email);
            List<OrderDto> orderDtos = _mapper.Map<List<OrderDto>>(orders);
            return orderDtos;
        }
    }
}
