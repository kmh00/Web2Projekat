using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using WebShop.Dto;
using WebShop.Services.Interfaces;

namespace WebShop.Controllers
{
    [Route("api/items")]
    [ApiController]
    public class ItemControler : ControllerBase
    {
        private readonly IItemService _itemService;

        public ItemControler(IItemService itemService)
        {
            _itemService = itemService;
        }

        [HttpPost("addItem")]
        public IActionResult AddItem([FromBody]ItemDto itemDto)
        {
            try
            {
                _itemService.AddItem(itemDto);
                return NoContent();

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        [HttpGet("getItems")]
        public IActionResult GetProducts()
        {
            return Ok(_itemService.GetAllItems());
        }
    }
}

