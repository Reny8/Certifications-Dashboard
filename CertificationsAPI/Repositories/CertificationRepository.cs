using CertificationsAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks; 

namespace CertificationsAPI.Repositories
{
    public class CertificationRepository : ICertificationRepository
    {
        // constructor
        public readonly CertificationContext _context;

        public CertificationRepository(CertificationContext context)
        {
            _context = context;
        }

        // Function to add a new certification
        public Task<Certification> Create(Certification certification)
        {
            return Task.FromResult(certification);
        }
        // Function to delete an existing certification
        public Task<Certification> Delete(int id)
        {
            throw new NotImplementedException();
        }
        // Function to get all the certifications in the database
        public Task<IEnumerable<Certification>> GetAll()
        {
            throw new NotImplementedException();
        }
        // Function to get a certificate by id
        public Task<Certification> Get(int id)
        {
           throw new NotImplementedException();
        }
        // Function to update an existing certificate
        public Task Update(Certification certification)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Certification>> Get()
        {
            throw new NotImplementedException();
        }
    }
}
