using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using CertificationsAPI.Models;
using CertificationsAPI.Repositories;

namespace CertificationsAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CertificationController : ControllerBase
    {
        private readonly ICertificationRepository _CertificationRepository;

        public CertificationController(ICertificationRepository CertificationRepository)
        {
            _CertificationRepository = CertificationRepository;
        }

        [HttpGet]
        public async Task<IEnumerable<Certification>> GetAllCertifications()
        {
            return await _CertificationRepository.GetAll();
        }

        [HttpPost]
        public async Task<ActionResult<Certification>> AddCertification([FromBody] Certification certification)
        {
            var newCerification = await _CertificationRepository.Create(certification);
            return CreatedAtAction(nameof(GetAllCertifications), new {id = newCerification.Id}, newCerification);

        }
    }
 
}
