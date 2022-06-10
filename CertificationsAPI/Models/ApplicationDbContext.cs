using Microsoft.EntityFrameworkCore;


namespace CertificationsAPI.Models
{

    public class ApplicationDbContext : DbContext
    {
        public DbSet<Certification> Certifications { get; set; }
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
    }
}