﻿using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using WebShop.Dto;
using WebShop.Enums;
using WebShop.Infrastructure;
using WebShop.Models;
using WebShop.Repository.Interfaces;
using WebShop.Services.Interfaces;

namespace WebShop.Services
{
    public class UserService : IUserService
    {
        private readonly IMapper _mapper;
        IUserRepository _userRepository;
        private readonly IConfigurationSection _secretKey;
        IWebHostEnvironment webHostEnvironment;


        public UserService(IUserRepository userRepository, IConfiguration config, IWebHostEnvironment webHostEnvironment, IMapper mapper)
        {
            _userRepository = userRepository;
            _secretKey = config.GetSection("SecretKey");
            this.webHostEnvironment = webHostEnvironment;
            _mapper = mapper;
        }
        public UserService(IUserRepository userRepo, IWebHostEnvironment webHostEnvironment)
        {
            _userRepository = userRepo;
            this.webHostEnvironment = webHostEnvironment;
        }

        public void RegisterUser(UserDto userDto)
        {
            if (_userRepository.FindByUsername(userDto.Username) != null)
            {
                throw new Exception("Username is not avalible!");
            }
            if (_userRepository.FindByEmail(userDto.Email) != null)
            {
                throw new Exception("Email not avalible!");
            }

            User newUser = new User {Id = Guid.NewGuid().ToString(), Username = userDto.Username, Address = userDto.Address, DateOfBirth = userDto.DateOfBirth, Email = userDto.Email, FullName = userDto.FullName, UserImage = userDto.UserImage, Password = BCrypt.Net.BCrypt.HashPassword(userDto.Password), UserType = userDto.UserType };
           
            if (newUser.UserType == UserType.ADMIN)
            {
                newUser.Verified = true;
                newUser.VerificationStatus = Enums.VerificationStatus.ACCEPTED;
            }
            if (newUser.UserType == UserType.CUSTOMER)
            {
                newUser.Verified = true;    
                newUser.VerificationStatus = Enums.VerificationStatus.ACCEPTED;
            }
            if (newUser.UserType == UserType.SELLER)
            {
                newUser.Verified = false;
                newUser.VerificationStatus = Enums.VerificationStatus.PROCCESSING;
            }

            _userRepository.Add(newUser);
        }

        public string LogIn(UserLogInDto userLogInDto)
        {
            User user = _userRepository.FindByEmail(userLogInDto.Email);
            if (user == null)
                return "Email doesn't exist";

            if (BCrypt.Net.BCrypt.Verify(userLogInDto.Password, user.Password))
            {
                List<Claim> claims = new List<Claim>();

                if (user.UserType == Enums.UserType.ADMIN)
                    claims.Add(new Claim(ClaimTypes.Role, "ADMIN"));
                else if (user.UserType == Enums.UserType.SELLER)
                    claims.Add(new Claim(ClaimTypes.Role, "SELLER"));
                else if (user.UserType == Enums.UserType.CUSTOMER)
                    claims.Add(new Claim(ClaimTypes.Role, "CUSTOMER"));

                SymmetricSecurityKey secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_secretKey.Value));
                var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);
                var tokeOptions = new JwtSecurityToken(
                    issuer: "http://localhost:44398",
                    claims: claims, //claimovi
                    expires: DateTime.Now.AddMinutes(20),
                    signingCredentials: signinCredentials
                );
                return new JwtSecurityTokenHandler().WriteToken(tokeOptions);
            }
            else
            {
                return "Wrong email or password";
            }
        }

        
        public UserDto GetUserProfile(string email)
        {
            User user = _userRepository.FindByEmail(email);
            UserDto userDto = _mapper.Map<UserDto>(user);
            return userDto;
        }

        public UserDto UpdateUser(UserDto dto)
        {
            User u = new User()
            {
                Id = dto.Id,
                Username = dto.Username,
                Address = dto.Address,
                DateOfBirth = dto.DateOfBirth,
                Email = dto.Email,
                FullName = dto.FullName,
                UserImage = dto.UserImage,
                Password = dto.Password,
            };


            User previous = _userRepository.FindById(u.Id);

            if (previous == null)
            {
                return null;

            }
            else
            {
                _userRepository.UpdateUser(previous, u);
            }
            return _mapper.Map<UserDto>(u);
        }

        public List<UserDto> GetSellers()
        {
            List<UserDto> sellers = _mapper.Map<List<UserDto>>(_userRepository.GetAllSellers());

            return sellers;
        }

        public void Verify(string email)
        {
            _userRepository.Verify(email);
            return;
        }

        public void Deny(string email)
        {
            _userRepository.Deny(email);
        }
    }
}
