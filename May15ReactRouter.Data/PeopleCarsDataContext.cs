using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;


namespace May15ReactRouter.Data
{

    public class PeopleCarsDataContext : DbContext
    {
        private readonly string _connectionString;

        public PeopleCarsDataContext(string connectionString)
        {
            _connectionString = connectionString;
        }
        public DbSet<Person> People { get; set; }
        public DbSet<Car> Cars { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionString);
        }
    }

}