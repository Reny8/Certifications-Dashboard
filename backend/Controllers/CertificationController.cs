using Microsoft.AspNetCore.Mvc;
using CertificationsAPI.Models;
using CertificationsAPI.Data;
using Microsoft.EntityFrameworkCore;

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
        // GET ALL CERTIFICATIONS
        public IActionResult GetAllCertifications()
        {
            var Certifications = _context.Certifications;
            return Ok(Certifications);
        }

        [HttpGet("{id}")]
        // GET CERTIFICATION BY ID
        public IActionResult CertificationById(int id)
        {
            var CertificationFound = _context.Certifications.Where(cert => cert.Id == id);
            return Ok(CertificationFound);
        }

        [HttpPost]
        // ADD A NEW CERTIFICATION
        public IActionResult AddCertification([FromBody] Certification certification)
        {
            _context.Certifications.Add(certification);
            _context.SaveChanges();
            return Ok(_context.Certifications);
        }
        [HttpPut("{id}")]
        // UPDATE A CERTIFICATE IN THE SYSTEM
        public IActionResult UpdateCertification(int id, [FromBody] Certification certification)
        {
            if (id != certification.Id)
            {
                return BadRequest("Not Found");
            }
            else
            {
                _context.Entry(certification).State = EntityState.Modified;
                _context.SaveChanges();
                return Ok(_context.Certifications);
            }
        }     
        // DELETE A CERTIFICATE IN THE SYSTEM
        [HttpDelete("{id}")]
        public IActionResult DeleteCertification(int id)
        {
            var certification = _context.Certifications.Single(x => x.Id == id);
            _context.Certifications.Remove(certification);
            _context.SaveChanges();
            return NoContent();
        }
    }
}