using Praktikumas1.Server.Models.DTOs;

namespace Praktikumas1.Server.Services
{
    public interface IGetSubjectService
    {
        Task<List<SubjectDto>> GetAll();
        Task<SubjectDto> Get(int id);
    }
}