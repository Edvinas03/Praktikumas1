using Praktikumas1.Server.Models.DTOs;

namespace Praktikumas1.Server.Services
{
    public interface IGetProgrammeService
    {
        Task<List<ProgrammeDto>> GetAll();
        Task<ProgrammeDto> Get(int id);
    }
}

