using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Data;
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

            try
            {
                _userService.RegisterUser(UserDto);
                return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
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

        [HttpGet("getUserData")]
        public IActionResult GetUserData(string email)
        {
            return Ok(_userService.GetUserProfile(email));
        }

        [HttpPost("updateUser")]
        public IActionResult UpdateProfile([FromBody] UserDto UserDto)
        {
                return Ok(_userService.UpdateUser(UserDto));
        }
    }
}
