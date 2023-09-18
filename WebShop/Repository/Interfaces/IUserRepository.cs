using WebShop.Models;

namespace WebShop.Repository.Interfaces
{
    public interface IUserRepository
    {
        User FindByEmail(string email);
        User FindByUsername(string username);
        void Add(User user);
        public User FindById(long id);
        public User UpdateUser(User userPrev, User userNew);
    }
}
