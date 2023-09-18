﻿using Microsoft.EntityFrameworkCore;
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
        public User FindById(long id)
        {
            return _DbContext.Users.SingleOrDefault<User>(u => String.Equals(u.Id, id));
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

        public User UpdateUser(User userPrev, User userNew)
        {
            _DbContext.Users.FirstOrDefault(u => u.Id == userPrev.Id).UserImage = userNew.UserImage;
            _DbContext.Users.FirstOrDefault(u => u.Id == userPrev.Id).UserType = userNew.UserType;
            _DbContext.Users.FirstOrDefault(u => u.Id == userPrev.Id).FullName = userNew.FullName;
            _DbContext.Users.FirstOrDefault(u => u.Id == userPrev.Id).Username = userNew.Username;
            _DbContext.Users.FirstOrDefault(u => u.Id == userPrev.Id).DateOfBirth = userNew.DateOfBirth;
            _DbContext.Users.FirstOrDefault(u => u.Id == userPrev.Id).Address = userNew.Address;

            if (!BCrypt.Net.BCrypt.Verify(userNew.Password, userPrev.Password))
            {
                if (userNew.Password != userPrev.Password)
                    _DbContext.Users.FirstOrDefault(u => u.Id == userPrev.Id).Password = BCrypt.Net.BCrypt.HashPassword(userNew.Password);
            }

            _DbContext.Users.FirstOrDefault(u => u.Id == userPrev.Id).Email = userNew.Email;
            _DbContext.SaveChanges();
            return userNew;
        }
    }
}

