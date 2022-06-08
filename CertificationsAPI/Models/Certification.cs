using System.ComponentModel.DataAnnotations;

namespace CertificationsAPI.Models
{
    public class Certification
    {
        [Key]
        public int Id { get; set; }
        public string Obtained { get; set; }
        public string Expired { get; set; }
        public string Organization { get; set; }
        public string Image { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }

    }
}
