using Praktikumas1.Server.Models.DTOs;

namespace Praktikumas1.Server.Services
{
    public interface ISaveStudentService
    {
        Task Store(StudentDto dto);
        Task Update(int id, StudentDto dto);
        Task Delete(int id);
    }
}
