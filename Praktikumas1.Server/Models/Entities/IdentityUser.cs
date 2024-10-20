using System.ComponentModel.DataAnnotations;

namespace Praktikumas1.Server.Models.Entities
{
    public class IdentityUser(string userName, string email) : Entity<int>
    {
        [MaxLength(30)] public string UserName { get; private set; } = userName;
        [MaxLength(40)] public string Email { get; private set; } = email;

        public void SetValues(string userName, string email)
    => (UserName, Email) = (userName, email);
    }
}