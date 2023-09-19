using Microsoft.EntityFrameworkCore;
using System.Reflection;
using WebShop.Models;

namespace WebShop.Infrastructure
{
    public class WebShopDbContext : DbContext
    {

        public DbSet<User> Users { get; set; }
        public DbSet<Item> Items { get; set; }
        public DbSet<Order> Orders { get; set; }

        public WebShopDbContext(DbContextOptions options) : base(options)
        {
        }



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
            modelBuilder.Entity<Order>().HasMany(x => x.OrderedItems).WithMany(x => x.Orders);
        }
    }
}
