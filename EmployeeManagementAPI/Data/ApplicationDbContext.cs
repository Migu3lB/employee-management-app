using EmployeeManagementAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace EmployeeManagementAPI.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Employee> Employees { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Employee>().HasData(
                new Employee
                {
                    Id = 1,
                    FirstName = "Miguel",
                    LastName = "Bermeo",
                    Email = "miguel.bermeo@outlook.com",
                    Position = "Full Stack Developer"
                },
                new Employee
                {
                    Id = 2,
                    FirstName = "Ana",
                    LastName = "García",
                    Email = "ana.garcia@example.com",
                    Position = "Backend Developer"
                },
                new Employee
                {
                    Id = 3,
                    FirstName = "Carlos",
                    LastName = "López",
                    Email = "carlos.lopez@example.com",
                    Position = "Frontend Developer"
                }
            );
        }
    }
}
