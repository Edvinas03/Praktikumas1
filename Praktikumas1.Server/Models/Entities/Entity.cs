using System.ComponentModel.DataAnnotations;

namespace Praktikumas1.Server.Models.Entities
{
    public abstract class Entity<T>
    {
        [Key] public T Id { get; protected set; }
    }
}
