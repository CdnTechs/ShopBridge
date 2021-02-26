using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShopBridgeAPI.Models
{
    public class ShopBridgeContext : DbContext
    {
        public ShopBridgeContext(DbContextOptions<ShopBridgeContext> options) : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }
    }
}
