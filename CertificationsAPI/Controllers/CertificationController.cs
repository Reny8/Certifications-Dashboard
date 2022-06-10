using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using CertificationsAPI.Models;

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
            var certifications = _context.Certifications;
            return Ok(certifications);
        }
    }
}
