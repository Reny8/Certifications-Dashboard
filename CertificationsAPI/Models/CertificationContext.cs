using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CertificationsAPI.Models
{

    public class CertificationContext : DbContext
    {
        public CertificationContext(DbContextOptions<CertificationContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }
        public DbSet<Certification> Certifications { get; set; }
    }
}