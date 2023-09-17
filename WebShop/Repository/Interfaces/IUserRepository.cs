using WebShop.Models;

namespace WebShop.Repository.Interfaces
{
    public interface IUserRepository
    {
        User FindByEmail(string email);
        User FindByUsername(string username);
        void Add(User user);
    }
}
