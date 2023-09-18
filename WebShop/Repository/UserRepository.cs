using Microsoft.EntityFrameworkCore;
using WebShop.Infrastructure;
using WebShop.Models;
using WebShop.Repository.Interfaces;

namespace WebShop.Repository
{
    public class UserRepository : IUserRepository
    {
        private WebShopDbContext _DbContext;

        public UserRepository(WebShopDbContext dbContext)
        {
            _DbContext = dbContext;
        }

        public User FindByEmail(string email)
        {
            return _DbContext.Users.SingleOrDefault<User>(u => String.Equals(u.Email, email));
        }

        public User FindByUsername(string username)
        {
            return _DbContext.Users.SingleOrDefault<User>(u => String.Equals(u.Username, username));
        }

        public void Add(User user)
        {
            
            
            _DbContext.Add(user);
            _DbContext.SaveChanges();

            return;
        }
    }
}

