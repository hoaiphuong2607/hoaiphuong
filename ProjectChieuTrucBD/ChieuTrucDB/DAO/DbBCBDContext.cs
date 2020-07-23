using ChieuTrucDB.Models;
using System.Data.Entity;

namespace ChieuTrucDB.DAO
{
    public class DbBCBDContext : DbContext
    {

        public DbBCBDContext() : base("name=DCBDConnectionString")
        {

        }

        public DbSet<Category> Categories { get; set; }
        public DbSet<Product> Products { get; set; }
        public object CartItems { get; internal set; }
    }
}