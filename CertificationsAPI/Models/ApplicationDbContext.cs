using Microsoft.EntityFrameworkCore;
using CertificationsAPI.Models;

namespace CertificationsAPI.Models
{

    public class ApplicationDbContext : DbContext
    {
        public DbSet<Certification> Certifications { get; set; }
        public ApplicationDbContext(DbContextOptions options)
            : base(options)
        {
        }
    }
}