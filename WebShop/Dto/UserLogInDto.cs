using System.ComponentModel.DataAnnotations;

namespace WebShop.Dto
{
    public class UserLogInDto
    {
            [Required]
            public string Email { get; set; }

            [Required]
            public string Password { get; set; }
    }
}
