using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using WebShop.Dto;
using WebShop.Services;
using WebShop.Services.Interfaces;

namespace WebShop.Controllers
{
    [Route("api/orders")]
    [ApiController]
    public class OrderControler : ControllerBase
    {
        private readonly IOrderServices _orderServices;

        public OrderControler(IOrderServices orderServices)
        {
            _orderServices = orderServices;
        }

        [HttpPost("newOrder")]
        public IActionResult CreateOrder([FromBody]OrderDto orderDto)
        {
            try
            {
                bool res = _orderServices.CreateOrder(orderDto);
                return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpGet("getAllOrders")]
        public IActionResult GetAllOrders()
        {
            return Ok(_orderServices.GetAllOrders());
        }

        [HttpGet("getAllOrdersSeller")]
        public IActionResult GetAllOrdersSeller(string email)
        {
            return Ok(_orderServices.GetAllOrdersSeller(email));
        }
    }
}
