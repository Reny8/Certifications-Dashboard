using CertificationsAPI.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks; 

namespace CertificationsAPI.Repositories
{
    public class CertificationRepository : ICertificationRepository
    {
        // constructor
        public readonly ApplicationDbContext _context;

        public CertificationRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        // Function to add a new certification
        public async Task<Certification> Create(Certification certification)
        {
            _context.Certifications.Add(certification);
            await _context.SaveChangesAsync();
            return certification;
        }
        // Function to delete an existing certification
        public async Task Delete(int id)
        {
            var DeleteCertificate = await _context.Certifications.FindAsync(id);
            _context.Certifications.Remove(DeleteCertificate);
            await _context.SaveChangesAsync();
        }
        // Function to get all the certifications in the database
        public async Task<IEnumerable<Certification>> GetAll()
        {
            return await _context.Certifications.ToListAsync();
        }
        // Function to get a certificate by id
        public async Task<Certification> Get(int id)
        {
            return await _context.Certifications.FindAsync(id);
        }
        // Function to update an existing certificate
        public async Task Update(Certification certification)
        {
            _context.Entry(certification).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public Task<IEnumerable<Certification>> Get()
        {
            throw new NotImplementedException();
        }

        Task<Certification> ICertificationRepository.Delete(int id)
        {
            throw new NotImplementedException();
        }
    }
}
