using System.ComponentModel.DataAnnotations;
using WebShop.Enums;

namespace WebShop.Dto
{
    public class UserDto
    {
        public string Id { get; set; }

        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string FullName { get; set; }

        [Required]
        public DateTime DateOfBirth { get; set; }

        [Required]
        public string Address { get; set; }

        public string UserImage { get; set; }

        [Required]
        public UserType UserType { get; set; }

        public VerificationStatus VerificationStatus { get; set; }

        public bool Verified { get; set; }
    }
}
