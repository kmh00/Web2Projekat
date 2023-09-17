using Microsoft.AspNetCore.Mvc;
using WebShop.Dto;
using WebShop.Services.Interfaces;

namespace WebShop.Controllers
{
    [Route("api/users")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost("register")]
        public IActionResult Register([FromBody] UserDto UserDto)
        {
            if (UserDto != null)
            {
                _userService.RegisterUser(UserDto);
                return NoContent();
            }
            else
            {
                return BadRequest();
            }
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] UserLogInDto login)
        {
            Console.WriteLine("a");
            var token = _userService.LogIn(login);
            if (token != null)
            {
                if (token == string.Empty)
                {
                    return BadRequest("Wrong password!");

                }
                return Ok(token);
            }
            else
            {
                return BadRequest("Wrong email!");
            }

        }
    }
}
