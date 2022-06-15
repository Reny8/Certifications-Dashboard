using Microsoft.AspNetCore.Mvc;
using CertificationsAPI.Models;
using CertificationsAPI.Data;
using Microsoft.AspNetCore.Http;

namespace CertificationsAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CertificationController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public CertificationController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetAllCertifications()
        {
            var Certifications = _context.Certifications;
            return Ok(Certifications);
        }

        [HttpGet("{id}")]
        public IActionResult CertificationById(int id)
        {
            var CertificationFound = _context.Certifications.Where(cert => cert.Id == id);
            return Ok(CertificationFound);
        }

        [HttpPost]
        // Action Result = allows to return 400 Bad Request, Not found etc. 
        public IActionResult AddCertification([FromBody] Certification certification)
        {
            return Ok("ok");
        }
    }
 
}
