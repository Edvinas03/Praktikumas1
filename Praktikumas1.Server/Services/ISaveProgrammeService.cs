using Praktikumas1.Server.Models.DTOs;

namespace Praktikumas1.Server.Services
{
    public interface ISaveProgrammeService
    {
        Task Store(ProgrammeDto dto);
        Task Update(int id, ProgrammeDto dto);
        Task Delete(int id);
    }
}
