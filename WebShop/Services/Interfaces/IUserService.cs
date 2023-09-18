using WebShop.Dto;

namespace WebShop.Services.Interfaces
{
    public interface IUserService
    {
        void RegisterUser(UserDto userDto);
        string LogIn(UserLogInDto userLogInDto);
        UserDto GetUserProfile(string email);
        UserDto UpdateUser(UserDto dto);
    }
}
