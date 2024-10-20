using Praktikumas1.Server.Models.DTOs;

namespace Praktikumas1.Server.Services
{
    public interface ISaveSubjectService
    {
        Task Store(SubjectDto dto);
        Task Update(int id, SubjectDto dto);
        Task Delete(int id);
    }
}
