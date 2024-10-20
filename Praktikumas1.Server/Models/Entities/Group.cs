using System.ComponentModel.DataAnnotations;

namespace Praktikumas1.Server.Models.Entities
{
    public class Group(string title) : Entity<int>
    {
        [MaxLength(30)] public string Title { get; private set; } = title;


        public void SetValues(string title)
            => (Title) = (title);
    }
}
