using CertificationsAPI.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CertificationsAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CertificationController : ControllerBase
    {
        private readonly ICertificationRepository _context;

        public CertificationController(ICertificationRepository context)
        {
            _context = context;
        }
    }
}
