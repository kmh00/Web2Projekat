using WebShop.Models;

namespace WebShop.Repository.Interfaces
{
    public interface IUserRepository
    {
        User FindByEmail(string email);
        User FindByUsername(string username);
        void Add(User user);
        User FindById(string id);
        User UpdateUser(User userPrev, User userNew);
        List<User> GetAllSellers();
        void Verify(string sellerId);
        void Deny(string sellerId);

    }
}
