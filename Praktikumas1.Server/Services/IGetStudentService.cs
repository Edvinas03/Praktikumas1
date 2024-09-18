using Praktikumas1.Server.Models.DTOs;

namespace Praktikumas1.Server.Services
{
    public interface IGetStudentService
    {
        Task<List<StudentDto>> GetAll();
        Task<StudentDto> Get(int id);
    }
}
