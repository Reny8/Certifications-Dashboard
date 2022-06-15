using CertificationsAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace CertificationsAPI.Data
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
