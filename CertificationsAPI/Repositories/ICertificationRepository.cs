using System;
using CertificationsAPI.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace CertificationsAPI.Repositories
{
    public interface  ICertificationRepository
    {
        Task<Certification> Get(int id);
        Task<Certification> Create(Certification certification);
        Task Update(Certification certification);
        Task <Certification> Delete(int id);
        Task<IEnumerable<Certification>> GetAll();
    }
}
